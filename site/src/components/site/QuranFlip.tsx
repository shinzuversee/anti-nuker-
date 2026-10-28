import quranOpen from "@/assets/quran-open.png";

/**
 * Coran ouvert en premier plan, sans animation de page.
 */
export function QuranFlip({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
    >
      <img
        src={quranOpen}
        alt=""
        width={1024}
        height={1024}
        loading="lazy"
        className="w-full drop-shadow-[0_35px_60px_rgba(0,0,0,0.35)]"
      />
    </div>
  );
}
