// L'ouverture animée ne se joue qu'une fois par visite. Un petit script dans <head>
// pose la classe « intro-seen » avant l'affichage, pour éviter tout clignotement.
export const INTRO_KEY = "nur-intro";

export const introScript = `try{if(sessionStorage.getItem("${INTRO_KEY}")||matchMedia("(prefers-reduced-motion: reduce)").matches)document.documentElement.classList.add("intro-seen")}catch(e){}`;

export function introPending() {
  if (typeof document === "undefined") return false;
  return !document.documentElement.classList.contains("intro-seen");
}

// Délai à laisser aux animations de l'accueil pour qu'elles démarrent après l'ouverture.
export function introDelay() {
  return introPending() ? 2.6 : 0.2;
}
