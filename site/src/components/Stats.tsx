import { useEffect, useRef } from 'react'
import { animate, motion, useInView, useReducedMotion } from 'framer-motion'
import { stats } from '../content'
import SectionHeading from './SectionHeading'

function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const reduced = useReducedMotion()

  useEffect(() => {
    const el = ref.current
    if (!el || !inView) return
    if (reduced) {
      el.textContent = value.toLocaleString('fr-FR')
      return
    }
    const controls = animate(0, value, {
      duration: 2.2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => (el.textContent = Math.round(v).toLocaleString('fr-FR')),
    })
    return () => controls.stop()
  }, [inView, value, reduced])

  return (
    <span ref={ref} className="tabular-nums">
      {value.toLocaleString('fr-FR')}
    </span>
  )
}

// Médaillon à huit branches qui se trace autour de chaque chiffre.
function Medallion({ delay }: { delay: number }) {
  return (
    <motion.svg
      viewBox="0 0 200 200"
      className="absolute inset-0 size-full text-gold"
      aria-hidden="true"
      animate={{ rotate: 360 }}
      transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
    >
      {[0, 45].map((r, i) => (
        <motion.rect
          key={r}
          x="38"
          y="38"
          width="124"
          height="124"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          transform={`rotate(${r} 100 100)`}
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.55 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, delay: delay + i * 0.25, ease: [0.65, 0, 0.35, 1] }}
        />
      ))}
      <motion.circle
        cx="100"
        cy="100"
        r="96"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeDasharray="1 5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.5 }}
        viewport={{ once: true }}
        transition={{ delay: delay + 0.8, duration: 1 }}
      />
    </motion.svg>
  )
}

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading kicker={stats.kicker} title={stats.title} />
        <ul className="mt-16 grid gap-12 sm:grid-cols-3 sm:gap-6">
          {stats.items.map((s, i) => (
            <li key={s.label} className="flex flex-col items-center text-center">
              <div className="relative grid size-52 place-items-center">
                <div className="absolute inset-10 rounded-full bg-night" />
                <Medallion delay={i * 0.2} />
                <span className="relative font-display text-5xl font-semibold text-gold-gradient">
                  <Counter value={s.value} />
                </span>
              </div>
              <p className="mt-4 font-display text-2xl font-semibold text-ink">{s.label}</p>
              <p className="mt-1 text-muted">{s.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
