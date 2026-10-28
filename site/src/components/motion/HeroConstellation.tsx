import { lazy, Suspense, useEffect, useState } from "react";
import { introPending } from "./intro";

// La scène 3D n'est chargée que dans le navigateur, et seulement après l'ouverture
// de la porte : la charger pendant l'animation la ferait saccader.
const LetterField = lazy(() => import("./LetterField"));

export function HeroConstellation({ avoidCenter = false }: { avoidCenter?: boolean }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), introPending() ? 4300 : 300);
    return () => clearTimeout(t);
  }, []);
  if (!mounted) return null;
  return (
    <Suspense fallback={null}>
      <LetterField avoidCenter={avoidCenter} />
    </Suspense>
  );
}
