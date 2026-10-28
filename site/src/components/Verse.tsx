import { motion } from 'framer-motion'
import { verse } from '../content'
import Reveal from './Reveal'

export default function Verse() {
  return (
    <section id="verset" className="relative overflow-hidden bg-gradient-to-b from-night to-forest py-28 text-ivory sm:py-36">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <motion.div
          className="flex flex-col items-center gap-2 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-8"
          lang="ar"
          dir="rtl"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.35 } } }}
        >
          {verse.lines.map((line, i) => (
            <motion.span
              key={line}
              variants={{
                hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
                show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 1 } },
              }}
              className={`font-arabic text-4xl leading-[1.8] sm:text-5xl ${i === verse.lines.length - 1 ? 'text-gold' : 'text-ivory'}`}
            >
              {line}
            </motion.span>
          ))}
        </motion.div>

        <Reveal delay={0.3}>
          <div className="mx-auto mt-10 flex items-center justify-center gap-4 text-gold/60">
            <span className="h-px w-16 bg-current" />
            <span className="size-1.5 rotate-45 bg-current" />
            <span className="h-px w-16 bg-current" />
          </div>
          <p className="mx-auto mt-8 max-w-2xl font-display text-2xl leading-snug text-ivory/90 italic sm:text-3xl">
            {verse.meaning}
          </p>
          <p className="mt-5 text-xs font-semibold tracking-[0.25em] text-gold uppercase">{verse.reference}</p>
          <p className="mx-auto mt-8 max-w-md text-sm leading-relaxed text-ivory/55">{verse.note}</p>
        </Reveal>
      </div>
    </section>
  )
}
