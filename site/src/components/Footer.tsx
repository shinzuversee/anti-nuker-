import { footer, nav, site } from '../content'
import Logo from './Logo'

const socialIcons = {
  tiktok: (
    <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48Z" />
  ),
  instagram: (
    <path d="M12 7.2a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6Zm0 7.9a3.1 3.1 0 1 1 0-6.2 3.1 3.1 0 0 1 0 6.2Zm6.1-8.1a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0ZM21.4 8c-.1-1.5-.4-2.9-1.5-4s-2.5-1.4-4-1.5C14.3 2.4 9.7 2.4 8.1 2.5c-1.5.1-2.9.4-4 1.5S2.6 6.5 2.5 8c-.1 1.6-.1 6.3 0 7.9.1 1.5.4 2.9 1.5 4s2.5 1.4 4 1.5c1.6.1 6.3.1 7.9 0 1.5-.1 2.9-.4 4-1.5s1.4-2.5 1.5-4c.1-1.6.1-6.3 0-7.9Zm-2.1 9.6a3.2 3.2 0 0 1-1.8 1.8c-1.2.5-4.2.4-5.5.4s-4.3.1-5.5-.4a3.2 3.2 0 0 1-1.8-1.8c-.5-1.2-.4-4.2-.4-5.6s-.1-4.3.4-5.5a3.2 3.2 0 0 1 1.8-1.8c1.2-.5 4.2-.4 5.5-.4s4.3-.1 5.5.4a3.2 3.2 0 0 1 1.8 1.8c.5 1.2.4 4.2.4 5.5s.1 4.4-.4 5.6Z" />
  ),
  youtube: (
    <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4a2.5 2.5 0 0 0-1.8 1.8C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8c1.6.4 7.8.4 7.8.4s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8ZM10 15V9l5.2 3L10 15Z" />
  ),
}

const socialLabels = { tiktok: 'TikTok', instagram: 'Instagram', youtube: 'YouTube' }

export default function Footer() {
  return (
    <footer className="bg-night text-ivory">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-6 max-w-sm leading-relaxed text-ivory/60">{footer.text}</p>
        </div>
        <nav aria-label="Liens du pied de page">
          <p className="text-xs font-semibold tracking-[0.25em] text-gold uppercase">Navigation</p>
          <ul className="mt-5 grid grid-cols-2 gap-3 text-sm md:grid-cols-1">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-ivory/65 transition-colors hover:text-gold">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="text-xs font-semibold tracking-[0.25em] text-gold uppercase">Nous suivre</p>
          <ul className="mt-5 flex gap-3">
            {(Object.keys(site.socials) as (keyof typeof site.socials)[]).map((key) => (
              <li key={key}>
                <a
                  href={site.socials[key]}
                  aria-label={socialLabels[key]}
                  className="grid size-11 place-items-center rounded-full border border-ivory/15 text-ivory/75 transition-all hover:border-gold hover:bg-gold hover:text-night"
                >
                  <svg viewBox="0 0 24 24" className="size-[18px]" fill="currentColor" aria-hidden="true">
                    {socialIcons[key]}
                  </svg>
                </a>
              </li>
            ))}
          </ul>
          <a href={`mailto:${site.email}`} className="mt-6 inline-block text-sm text-ivory/65 transition-colors hover:text-gold">
            {site.email}
          </a>
        </div>
      </div>
      <div className="border-t border-ivory/10">
        <p className="mx-auto max-w-7xl px-5 py-6 text-xs text-ivory/40 sm:px-8">{footer.copyright}</p>
      </div>
    </footer>
  )
}
