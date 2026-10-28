import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import {
  type StripeEnv,
  createStripeClient,
  getStripeErrorMessage,
} from "@/lib/stripe.server";

const inputSchema = z.object({
  priceId: z.string().regex(/^[a-zA-Z0-9_-]+$/),
  reservationId: z.string().uuid(),
  returnUrl: z.string().url(),
  environment: z.enum(["sandbox", "live"]),
});

type CheckoutResult = { clientSecret: string } | { error: string };

async function resolveOrCreateCustomer(
  stripe: ReturnType<typeof createStripeClient>,
  options: { email?: string | undefined; userId: string },
): Promise<string> {
  if (!/^[a-zA-Z0-9_-]+$/.test(options.userId)) throw new Error("Invalid userId");

  const found = await stripe.customers.search({
    query: `metadata['userId']:'${options.userId}'`,
    limit: 1,
  });
  if (found.data.length && found.data[0]) return found.data[0].id;

  if (options.email) {
    const existing = await stripe.customers.list({ email: options.email, limit: 1 });
    const customer = existing.data[0];
    if (customer) {
      if (customer.metadata?.["userId"] !== options.userId) {
        await stripe.customers.update(customer.id, {
          metadata: { ...customer.metadata, userId: options.userId },
        });
      }
      return customer.id;
    }
  }

  const created = await stripe.customers.create({
    ...(options.email && { email: options.email }),
    metadata: { userId: options.userId },
  });
  return created.id;
}

export const createSessionCheckout = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data: unknown) => inputSchema.parse(data))
  .handler(async ({ data, context }): Promise<CheckoutResult> => {
    const { supabase, userId } = context;

    const { data: reservation, error } = await supabase
      .from("reservations")
      .select("id, session_name")
      .eq("id", data.reservationId)
      .maybeSingle();
    if (error || !reservation) return { error: "Réservation introuvable." };

    try {
      const stripe = createStripeClient(data.environment as StripeEnv);

      const prices = await stripe.prices.list({ lookup_keys: [data.priceId] });
      const stripePrice = prices.data[0];
      if (!stripePrice) return { error: "Tarif introuvable." };

      const {
        data: { user },
      } = await supabase.auth.getUser();

      const customerId = await resolveOrCreateCustomer(stripe, {
        email: user?.email ?? undefined,
        userId,
      });

      const isRecurring = stripePrice.type === "recurring";

      let description: string | undefined;
      if (!isRecurring) {
        const productId =
          typeof stripePrice.product === "string" ? stripePrice.product : stripePrice.product.id;
        const product = await stripe.products.retrieve(productId);
        description = product.name;
      }

      const session = await stripe.checkout.sessions.create({
        line_items: [{ price: stripePrice.id, quantity: 1 }],
        mode: isRecurring ? "subscription" : "payment",
        ui_mode: "embedded_page",
        return_url: data.returnUrl,
        customer: customerId,
        ...(isRecurring
          ? { subscription_data: { metadata: { userId, reservationId: reservation.id } } }
          : { payment_intent_data: { description } }),
        managed_payments: { enabled: true },
        metadata: {
          userId,
          reservationId: reservation.id,
          managed_payments: "true",
        },
      } as any);


      return { clientSecret: session.client_secret ?? "" };
    } catch (error) {
      return { error: getStripeErrorMessage(error) };
    }
  });
