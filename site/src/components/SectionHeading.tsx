import Reveal from './Reveal'

type Props = {
  kicker: string
  title: string
  intro?: string
  dark?: boolean
  align?: 'center' | 'left'
}

export default function SectionHeading({ kicker, title, intro, dark = false, align = 'center' }: Props) {
  const centered = align === 'center'
  return (
    <Reveal className={`max-w-2xl ${centered ? 'mx-auto text-center' : ''}`}>
      <p className={`flex items-center gap-3 text-xs font-semibold tracking-[0.25em] uppercase ${centered ? 'justify-center' : ''} ${dark ? 'text-gold' : 'text-emerald'}`}>
        <span className="h-px w-8 bg-current opacity-60" />
        {kicker}
        <span className="h-px w-8 bg-current opacity-60" />
      </p>
      <h2 className={`mt-5 font-display text-4xl leading-[1.1] font-medium text-balance sm:text-5xl ${dark ? 'text-ivory' : 'text-ink'}`}>
        {title}
      </h2>
      {intro && <p className={`mt-5 text-lg leading-relaxed ${dark ? 'text-ivory/70' : 'text-muted'}`}>{intro}</p>}
    </Reveal>
  )
}
