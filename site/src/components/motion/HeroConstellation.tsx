import { lazy, Suspense, useEffect, useState } from "react";

// La scène 3D n'est chargée que dans le navigateur, après l'affichage de la page.
const LetterField = lazy(() => import("./LetterField"));

export function HeroConstellation() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <Suspense fallback={null}>
      <LetterField />
    </Suspense>
  );
}
