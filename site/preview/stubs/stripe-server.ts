// Le code Stripe côté serveur n'est pas inclus dans l'aperçu.
export type StripeEnv = "sandbox" | "live";
export const verifyWebhook = async () => {
  throw new Error("Indisponible dans l'aperçu.");
};
export const createStripeClient = () => {
  throw new Error("Indisponible dans l'aperçu.");
};
export const getStripeErrorMessage = () => "Indisponible dans l'aperçu.";
