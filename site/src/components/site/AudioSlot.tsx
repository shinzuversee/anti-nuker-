import { Mic } from "lucide-react";

/** Emplacement réservé, toujours visible, pour déposer plus tard un enregistrement. */
export function AudioSlot() {
  return (
    <section className="not-prose mt-16" aria-label="Emplacement audio">
      <div className="glass grain rounded-xl border-dashed px-6 py-10 text-center sm:px-10">
        <div className="relative z-10 flex flex-col items-center">
          <span className="flex size-12 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-primary">
            <Mic className="size-5" />
          </span>
          <p className="eyebrow mt-5">ÉCOUTER LE COMMENTAIRE DE SIDI</p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
            Emplacement réservé à l’enregistrement audio de ce sujet. Glissez ici votre fichier
            (m4a, mp3) et il s’affichera à cet endroit avec le lecteur.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AudioSlot;
