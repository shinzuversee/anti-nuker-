import { site } from '../content'
import Mishkat from './Mishkat'

export default function Logo() {
  return (
    <a href="#accueil" className="group flex items-center gap-3" aria-label={`${site.name}, retour à l'accueil`}>
      <Mishkat className="h-10 w-auto text-gold transition-transform duration-500 group-hover:-translate-y-0.5" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-xl font-semibold tracking-wide text-ivory">{site.name}</span>
        <span className="mt-1 font-arabic text-sm text-gold">{site.nameAr}</span>
      </span>
    </a>
  )
}
