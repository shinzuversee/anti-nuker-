import { motion } from 'framer-motion'
import { verse } from '../content'
import Reveal from './Reveal'

const ease = [0.65, 0, 0.35, 1] as const

// Coin d'enluminure (tazhîb) qui se trace à l'arrivée de la section.
function Corner({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 80 80" className={`absolute size-14 text-gold sm:size-20 ${className}`} aria-hidden="true">
      {['M2 78 V20 Q2 2 20 2 H78', 'M12 78 V28 Q12 12 28 12 H78', 'M22 40 Q22 22 40 22'].map((d, i) => (
        <motion.path
          key={d}
          d={d}
          fill="none"
          stroke="currentColor"
          strokeWidth={i === 0 ? 1.4 : 0.8}
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: i * 0.2, ease }}
        />
      ))}
      <motion.rect
        x="34"
        y="34"
        width="8"
        height="8"
        fill="currentColor"
        transform="rotate(45 38 38)"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.2, type: 'spring' }}
        style={{ transformOrigin: '38px 38px' }}
      />
    </svg>
  )
}

export default function Verse() {
  return (
    <section id="verset" className="relative overflow-hidden bg-gradient-to-b from-night to-forest px-5 py-24 text-ivory sm:px-8 sm:py-32">
      <div className="relative mx-auto max-w-4xl px-6 py-16 text-center sm:px-16 sm:py-20">
        <Corner className="top-0 left-0" />
        <Corner className="top-0 right-0 -scale-x-100" />
        <Corner className="bottom-0 left-0 -scale-y-100" />
        <Corner className="right-0 bottom-0 -scale-100" />

        <div className="flex flex-col items-center gap-1 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-8" lang="ar" dir="rtl">
          {verse.lines.map((line, i) => {
            const last = i === verse.lines.length - 1
            return (
              <motion.span
                key={line}
                className={`relative inline-block font-arabic text-4xl leading-[1.9] sm:text-5xl ${last ? 'text-gold' : 'text-ivory'}`}
                initial={{ clipPath: 'inset(0 0 0 100%)', opacity: 0.2 }}
                whileInView={{ clipPath: 'inset(0 0 0 0%)', opacity: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 1.1, delay: 0.3 + i * 0.55, ease }}
              >
                {line}
                {last && (
                  <motion.span
                    className="absolute inset-0 -z-10 rounded-full bg-gold/25 blur-xl"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: [0, 1, 0.6], scale: 1.2 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.55 + 0.9, duration: 1.4 }}
                  />
                )}
              </motion.span>
            )
          })}
        </div>

        <Reveal delay={0.4}>
          <div className="mx-auto mt-10 flex items-center justify-center gap-4 text-gold/60">
            <motion.span className="h-px w-16 origin-right bg-current" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 2.4, duration: 0.8 }} />
            <span className="size-1.5 rotate-45 bg-current" />
            <motion.span className="h-px w-16 origin-left bg-current" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 2.4, duration: 0.8 }} />
          </div>
          <p className="mx-auto mt-8 max-w-2xl font-display text-2xl leading-snug text-ivory/90 italic sm:text-3xl">{verse.meaning}</p>
          <p className="mt-5 text-xs font-semibold tracking-[0.25em] text-gold uppercase">{verse.reference}</p>
          <p className="mx-auto mt-8 max-w-md text-sm leading-relaxed text-ivory/55">{verse.note}</p>
        </Reveal>
      </div>
    </section>
  )
}
