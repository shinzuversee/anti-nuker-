// Remplace @tanstack/react-start dans l'aperçu : il n'y a pas de serveur derrière.
const unavailable = async (): Promise<never> => {
  throw new Error("Cette fonction n'est pas disponible dans l'aperçu du site.");
};

function chain(): any {
  const fn: any = unavailable;
  for (const key of ["inputValidator", "validator", "middleware", "server", "client", "type"]) {
    fn[key] = () => chain();
  }
  fn.handler = () => unavailable;
  return fn;
}

export const createServerFn = () => chain();
export const createMiddleware = () => chain();
export const createCsrfMiddleware = () => chain();
export const createStart = () => ({});
export const useServerFn = <T>(fn: T) => fn;
export const getRequest = () => undefined;
