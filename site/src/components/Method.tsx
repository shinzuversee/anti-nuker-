import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { method } from '../content'
import SectionHeading from './SectionHeading'
import Pattern from './Pattern'

export default function Method() {
  const ref = useRef<HTMLOListElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 85%', 'end 60%'] })
  const line = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section id="methode" className="relative isolate overflow-hidden bg-forest py-24 text-ivory sm:py-32">
      <Pattern className="absolute inset-0 -z-10 text-gold opacity-[0.05]" size={96} />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading kicker={method.kicker} title={method.title} dark />

        <ol ref={ref} className="relative mt-20 grid gap-12 md:grid-cols-4 md:gap-6">
          <div className="absolute top-7 right-[12.5%] left-[12.5%] hidden h-px bg-ivory/10 md:block" aria-hidden="true">
            <motion.div className="h-full origin-left bg-gold" style={{ scaleX: line }} />
          </div>
          <div className="absolute top-0 bottom-0 left-7 w-px bg-ivory/10 md:hidden" aria-hidden="true">
            <motion.div className="h-full w-full origin-top bg-gold" style={{ scaleY: line }} />
          </div>

          {method.steps.map((s, i) => (
            <motion.li
              key={s.title}
              className="relative flex gap-6 md:flex-col md:items-center md:text-center"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <motion.span
                className="relative z-10 grid size-14 shrink-0 place-items-center rounded-full border border-gold/50 bg-forest font-display text-2xl text-gold shadow-[0_0_30px_-6px] shadow-gold/40"
                initial={{ rotateY: 180, transformPerspective: 600 }}
                whileInView={{ rotateY: 0, transformPerspective: 600 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 1, delay: 0.2 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                {i + 1}
              </motion.span>
              <div>
                <h3 className="font-display text-2xl font-semibold md:mt-6">{s.title}</h3>
                <p className="mt-2 max-w-xs leading-relaxed text-ivory/65">{s.text}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
