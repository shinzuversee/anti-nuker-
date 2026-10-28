import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

const reservationSchema = z.object({
  sessionName: z.string().trim().min(1).max(120),
  requestedDate: z.string().trim().min(1).max(20),
  requestedSlot: z.string().trim().min(1).max(20),
  notes: z.string().trim().max(1000).optional(),
});

export const createReservation = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data: unknown) => reservationSchema.parse(data))
  .handler(async ({ data, context }) => {
    const { data: row, error } = await context.supabase
      .from("reservations")
      .insert({
        user_id: context.userId,
        session_name: data.sessionName,
        requested_date: data.requestedDate,
        requested_slot: data.requestedSlot,
        notes: data.notes ?? null,
      })
      .select("id")
      .single();
    if (error) throw new Error(error.message);
    return { ok: true as const, reservationId: row.id };
  });


export const getAssiseAccess = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const [{ data: isAdmin }, reservations, profile] = await Promise.all([
      context.supabase.rpc("has_role", { _user_id: context.userId, _role: "admin" }),
      context.supabase
        .from("reservations")
        .select("id, session_name, requested_date, requested_slot, status")
        .order("requested_date", { ascending: false }),
      context.supabase.from("profiles").select("full_name, email").maybeSingle(),
    ]);

    const rows = reservations.data ?? [];
    const isHost = isAdmin === true;
    const hasPaid = rows.some((r) => r.status === "paid");

    return {
      isHost,
      allowed: isHost || hasPaid,
      reservations: rows,
      displayName: profile.data?.full_name ?? profile.data?.email ?? "Participant",
    };
  });
