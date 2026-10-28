import { useEffect, useRef, useState } from "react";
import { Pause, Play, RotateCcw } from "lucide-react";

const SPEEDS = [1, 1.5, 2] as const;

function fmt(s: number) {
  if (!Number.isFinite(s)) return "0:00";
  const m = Math.floor(s / 60);
  const r = Math.floor(s % 60);
  return `${m}:${r.toString().padStart(2, "0")}`;
}

type Props = { src: string; title?: string | undefined; caption?: string | undefined };

/** Lecteur audio inline : la lecture continue sans quitter la page. */
export function AudioPlayer({ src, title, caption }: Props) {
  const ref = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const [speed, setSpeed] = useState<number>(1);
  const [missing, setMissing] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onTime = () => setCurrent(el.currentTime);
    const onMeta = () => setDuration(el.duration);
    const onEnd = () => setPlaying(false);
    const onErr = () => setMissing(true);
    el.addEventListener("timeupdate", onTime);
    el.addEventListener("loadedmetadata", onMeta);
    el.addEventListener("ended", onEnd);
    el.addEventListener("error", onErr);
    return () => {
      el.removeEventListener("timeupdate", onTime);
      el.removeEventListener("loadedmetadata", onMeta);
      el.removeEventListener("ended", onEnd);
      el.removeEventListener("error", onErr);
    };
  }, [src]);

  const toggle = () => {
    const el = ref.current;
    if (!el) return;
    if (el.paused) {
      void el.play();
      setPlaying(true);
    } else {
      el.pause();
      setPlaying(false);
    }
  };

  const progress = duration ? (current / duration) * 100 : 0;

  const changeSpeed = (next: number) => {
    const el = ref.current;
    if (!el) return;
    el.playbackRate = next;
    setSpeed(next);
  };

  return (
    <figure className="glass grain my-10 rounded-xl px-5 py-5 sm:px-7 sm:py-6">
      <div className="relative z-10">
        {title ? (
          <p className="eyebrow mb-4">{title}</p>
        ) : null}

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={toggle}
            aria-label={playing ? "Mettre en pause" : "Écouter"}
            className="flex size-12 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-primary transition-all duration-300 hover:scale-105 hover:bg-primary/20"
          >
            {playing ? (
              <Pause className="size-5" />
            ) : (
              <Play className="size-5 translate-x-[1px]" />
            )}
          </button>

          <div className="min-w-0 flex-1">
            <input
              type="range"
              min={0}
              max={duration || 0}
              step={0.1}
              value={current}
              onChange={(e) => {
                const el = ref.current;
                if (!el) return;
                el.currentTime = Number(e.target.value);
                setCurrent(Number(e.target.value));
              }}
              aria-label="Progression"
              className="h-1 w-full cursor-pointer appearance-none rounded-full bg-border accent-primary"
              style={{
                background: `linear-gradient(to right, var(--color-primary) ${progress}%, var(--color-border) ${progress}%)`,
              }}
            />
            <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground tabular-nums">
              <span>{fmt(current)}</span>
              <span>Durée : {fmt(duration)}</span>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-1">
            {SPEEDS.map((rate) => (
              <button
                key={rate}
                type="button"
                onClick={() => changeSpeed(rate)}
                aria-label={`Vitesse ${rate}x`}
                className={`min-w-[2.5rem] rounded-md px-2 py-1 text-xs font-medium transition-all duration-200 ${
                  speed === rate
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-primary/10 hover:text-foreground"
                }`}
              >
                {rate}x
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => {
              const el = ref.current;
              if (!el) return;
              el.currentTime = 0;
              setCurrent(0);
            }}
            aria-label="Revenir au début"
            className="hidden size-9 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground sm:flex"
          >
            <RotateCcw className="size-4" />
          </button>
        </div>

        <audio ref={ref} src={src} preload="metadata" className="hidden" />

        {missing ? (
          <p className="mt-4 text-xs text-muted-foreground">
            Aucun fichier audio trouvé. Vérifiez le lien ou rechargez la page.
          </p>
        ) : caption ? (
          <figcaption className="mt-4 text-sm text-muted-foreground">
            {caption}
          </figcaption>
        ) : null}
      </div>
    </figure>
  );
}
