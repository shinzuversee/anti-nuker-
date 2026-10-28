import { useState } from "react";
import { Mishkat } from "./Mishkat";
import { TiltCard } from "./TiltCard";

// Portrait encadré d'or. Si l'image ne se charge pas, un cadre enluminé prend sa place
// plutôt qu'une image cassée.
export function PortraitFrame({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);
  return (
    <TiltCard className="rounded-xl" max={5}>
      <div className="relative overflow-hidden rounded-xl border border-primary/30 bg-ink shadow-elegant">
        {failed ? (
          <div className="relative grid aspect-[4/5] place-items-center text-primary">
            <div className="absolute inset-4 rounded-lg border border-primary/25" />
            <div className="absolute inset-7 rounded-md border border-dashed border-primary/15" />
            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="absolute inset-[-90%] rounded-full bg-primary/20 blur-2xl" />
                <Mishkat className="relative h-24 w-auto" />
              </div>
              <p lang="ar" className="gold-text mt-6 text-4xl">
                نور البيان
              </p>
            </div>
          </div>
        ) : (
          <>
            <img
              src={src}
              alt={alt}
              width={864}
              height={1080}
              onError={() => setFailed(true)}
              className="aspect-[4/5] w-full object-cover"
            />
            {/* Voile doré en bas et liseré intérieur, pour fondre la photo dans le décor */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
            <div className="pointer-events-none absolute inset-3 rounded-lg border border-primary/30" />
          </>
        )}
      </div>
    </TiltCard>
  );
}
