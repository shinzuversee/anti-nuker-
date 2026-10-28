import { EmbeddedCheckoutProvider, EmbeddedCheckout } from "@stripe/react-stripe-js";
import { getStripe, getStripeEnvironment } from "@/lib/stripe";
import { createSessionCheckout } from "@/lib/payments.functions";

type SessionCheckoutProps = {
  priceId: string;
  reservationId: string;
  returnUrl: string;
};

export function SessionCheckout({ priceId, reservationId, returnUrl }: SessionCheckoutProps) {
  const fetchClientSecret = async (): Promise<string> => {
    const result = await createSessionCheckout({
      data: { priceId, reservationId, returnUrl, environment: getStripeEnvironment() },
    });
    if ("error" in result) throw new Error(result.error);
    if (!result.clientSecret) throw new Error("Le paiement n'a pas pu être initialisé.");
    return result.clientSecret;
  };

  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider stripe={getStripe()} options={{ fetchClientSecret }}>
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  );
}
