import { site } from '../content'

export default function Logo({ light = true }: { light?: boolean }) {
  return (
    <a href="#accueil" className="group flex items-center gap-3" aria-label={`${site.name}, retour à l'accueil`}>
      <svg viewBox="0 0 40 40" className="size-9 text-gold transition-transform duration-700 group-hover:rotate-45" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeWidth="1.6">
          <rect x="10" y="10" width="20" height="20" />
          <rect x="10" y="10" width="20" height="20" transform="rotate(45 20 20)" />
        </g>
        <circle cx="20" cy="20" r="3.2" fill="currentColor" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-xl font-semibold tracking-wide ${light ? 'text-ivory' : 'text-ink'}`}>{site.name}</span>
        <span className="mt-1 font-arabic text-sm text-gold">{site.nameAr}</span>
      </span>
    </a>
  )
}
