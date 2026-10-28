import { Mail } from 'lucide-react'
import { finalCta, site } from '../content'
import Reveal from './Reveal'
import Pattern from './Pattern'

export default function FinalCta() {
  return (
    <section id="contact" className="bg-ivory px-5 py-24 sm:px-8 sm:py-32">
      <Reveal className="relative isolate mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-forest px-6 py-20 text-center text-ivory sm:px-16">
        <Pattern className="absolute inset-0 -z-10 text-gold opacity-[0.07]" />
        <div className="absolute -top-32 left-1/2 -z-10 size-[30rem] -translate-x-1/2 rounded-full bg-gold/15 blur-[100px]" />
        <h2 className="mx-auto max-w-2xl font-display text-4xl leading-[1.1] font-medium text-balance sm:text-5xl">
          {finalCta.title}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ivory/70">{finalCta.text}</p>
        <a
          href={`mailto:${site.email}`}
          className="mt-10 inline-flex h-13 items-center gap-2 rounded-full bg-gold px-8 font-medium text-night shadow-[0_0_40px_-8px] shadow-gold/60 transition-colors hover:bg-gold-soft"
        >
          <Mail className="size-4" />
          {finalCta.button}
        </a>
      </Reveal>
    </section>
  )
}
