import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import { finalCta, site } from '../content'
import Pattern from './Pattern'
import Mishkat from './Mishkat'
import GlowButton from './GlowButton'

// Dernier appel, dans une porte en arc qui s'ouvre à l'arrivée.
export default function FinalCta() {
  return (
    <section id="contact" className="bg-ivory px-5 py-24 sm:px-8 sm:py-32">
      <motion.div
        className="relative isolate mx-auto max-w-4xl overflow-hidden rounded-t-[50%_9rem] rounded-b-[2.5rem] bg-forest px-6 pt-24 pb-20 text-center text-ivory sm:rounded-t-[50%_14rem] sm:px-16 sm:pt-32"
        initial={{ clipPath: 'inset(100% 0 0 0 round 50% 50% 2.5rem 2.5rem)' }}
        whileInView={{ clipPath: 'inset(0% 0 0 0 round 0 0 0 0)' }}
        viewport={{ once: true, margin: '-120px' }}
        transition={{ duration: 1.3, ease: [0.76, 0, 0.24, 1] }}
      >
        <Pattern className="absolute inset-0 -z-10 text-gold opacity-[0.07]" />
        <div className="absolute -top-32 left-1/2 -z-10 size-[30rem] -translate-x-1/2 rounded-full bg-gold/20 blur-[100px]" />
        <Mishkat className="mx-auto h-20 w-auto text-gold" />
        <h2 className="mx-auto mt-8 max-w-2xl font-display text-4xl leading-[1.1] font-medium text-balance sm:text-5xl">
          {finalCta.title}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ivory/70">{finalCta.text}</p>
        <div className="mt-10">
          <GlowButton href={`mailto:${site.email}`}>
            <Mail className="size-4" />
            {finalCta.button}
          </GlowButton>
        </div>
      </motion.div>
    </section>
  )
}
