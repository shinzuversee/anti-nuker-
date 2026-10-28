import { cn } from "@/lib/utils";

function Bird({ className, delay }: { className?: string; delay: string }) {
  return (
    <svg
      viewBox="0 0 24 12"
      className={cn("absolute size-5 text-foreground/50", className)}
      style={{ animationDelay: delay }}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path className="bird-wing" d="M1 7 Q6 1 11 7" />
      <path className="bird-wing" d="M13 7 Q18 1 23 7" style={{ animationDelay: delay }} />
    </svg>
  );
}

/**
 * Purely decorative animated layer over a still photo:
 * drifting clouds, flying birds and a gentle wind sway on the leaves.
 */
export function LivingPhoto({
  src,
  alt,
  width,
  height,
  className,
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative isolate overflow-hidden rounded-xl border border-border shadow-elegant",
        className,
      )}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        width={width}
        height={height}
        className="w-full animate-breathe object-cover"
      />

      {/* Clouds drifting slowly across the sky */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2" aria-hidden="true">
        <span className="cloud-drift absolute top-[12%] left-0 h-10 w-40 rounded-full bg-background/25 blur-2xl" />
        <span className="cloud-drift absolute top-[26%] left-0 h-8 w-56 rounded-full bg-background/20 blur-2xl [animation-delay:-14s] [animation-duration:52s]" />
        <span className="cloud-drift absolute top-[4%] left-0 h-6 w-28 rounded-full bg-background/15 blur-xl [animation-delay:-28s] [animation-duration:64s]" />
      </div>

      {/* Birds crossing the frame */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <span className="bird-path absolute top-[18%] left-0">
          <Bird delay="0s" />
        </span>
        <span className="bird-path absolute top-[26%] left-0 [animation-delay:-6s] [animation-duration:26s]">
          <Bird className="size-4" delay="-0.2s" />
        </span>
        <span className="bird-path absolute top-[13%] left-0 [animation-delay:-13s] [animation-duration:34s]">
          <Bird className="size-3" delay="-0.4s" />
        </span>
      </div>

      {/* Wind pass over the foliage */}
      <div
        className="wind-sweep pointer-events-none absolute inset-0 mix-blend-soft-light"
        aria-hidden="true"
      />
    </div>
  );
}
