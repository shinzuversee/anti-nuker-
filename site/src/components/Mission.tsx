import { motion } from 'framer-motion'
import { mission } from '../content'
import Reveal, { fadeUp3d, stagger } from './Reveal'
import TiltCard, { Lift } from './TiltCard'
import { Star } from './Pattern'

export default function Mission() {
  return (
    <section id="mission" className="relative overflow-hidden bg-ivory py-24 sm:py-32">
      <Star className="pointer-events-none absolute -top-24 -right-24 size-96 text-emerald/[0.06]" />
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <Reveal>
          <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.25em] text-emerald uppercase">
            <span className="h-px w-8 bg-current opacity-60" />
            {mission.kicker}
          </p>
          <h2 className="mt-5 font-display text-4xl leading-[1.1] font-medium text-balance text-ink sm:text-5xl">
            {mission.title}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">{mission.intro}</p>
        </Reveal>

        <motion.ol
          className="grid gap-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger(0.12)}
        >
          {mission.pillars.map((p, i) => (
            <motion.li key={p.title} variants={fadeUp3d}>
              <TiltCard
                max={6}
                className="group flex gap-6 rounded-3xl border border-ink/8 bg-white/60 p-7 transition-[background-color,border-color,box-shadow] duration-500 hover:border-gold/40 hover:bg-white hover:shadow-[0_30px_60px_-30px_rgba(11,29,23,0.4)]"
              >
                <Lift z={50} className="relative grid size-16 shrink-0 place-items-center">
                  {/* Médaillon de fin de verset, avec le chiffre arabe-indien */}
                  <svg viewBox="0 0 64 64" className="absolute inset-0 size-full text-gold transition-transform duration-700 group-hover:rotate-45" aria-hidden="true">
                    <g fill="none" stroke="currentColor" strokeWidth="1.2">
                      <rect x="14" y="14" width="36" height="36" />
                      <rect x="14" y="14" width="36" height="36" transform="rotate(45 32 32)" />
                      <circle cx="32" cy="32" r="13" strokeOpacity="0.5" />
                    </g>
                  </svg>
                  <span className="relative font-arabic text-2xl text-emerald" aria-hidden="true">{['١', '٢', '٣'][i]}</span>
                </Lift>
                <Lift z={25}>
                  <h3 className="font-display text-2xl font-semibold text-ink">{p.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{p.text}</p>
                </Lift>
              </TiltCard>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  )
}
