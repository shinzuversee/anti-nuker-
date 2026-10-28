import { motion } from 'framer-motion'
import { ArrowUpRight, Play } from 'lucide-react'
import { reminders } from '../content'
import SectionHeading from './SectionHeading'
import Reveal, { fadeUp, stagger } from './Reveal'
import { Star } from './Pattern'

export default function Reminders() {
  return (
    <section id="rappels" className="bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading kicker={reminders.kicker} title={reminders.title} intro={reminders.intro} align="left" />
          <Reveal>
            <a
              href={reminders.cta.href}
              className="group inline-flex items-center gap-2 border-b border-ink/30 pb-1 font-medium text-ink transition-colors hover:border-gold hover:text-emerald"
            >
              {reminders.cta.label}
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>
        </div>

        <motion.ul
          className="mt-14 grid gap-6 md:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger(0.12)}
        >
          {reminders.items.map((r) => (
            <motion.li key={r.title} variants={fadeUp}>
              <a
                href={r.href}
                className="group block overflow-hidden rounded-3xl border border-ink/8 bg-white/50 transition-shadow duration-500 hover:shadow-[0_30px_70px_-40px_rgba(11,29,23,0.5)]"
              >
                <div className="relative isolate grid aspect-[4/3] place-items-center md:aspect-[4/5] overflow-hidden bg-night">
                  <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_40%,rgba(31,92,77,0.9),transparent_70%)]" />
                  <Star className="absolute size-[130%] text-gold/10 transition-transform duration-[1.5s] ease-out group-hover:rotate-45" />
                  <p className="font-arabic text-6xl text-gold-gradient transition-transform duration-700 group-hover:scale-105" lang="ar" dir="rtl">
                    {r.ar}
                  </p>
                  <span className="absolute bottom-6 left-6 grid size-12 place-items-center rounded-full bg-ivory/10 text-ivory backdrop-blur-md transition-all duration-500 group-hover:bg-gold group-hover:text-night">
                    <Play className="ml-0.5 size-5" fill="currentColor" />
                  </span>
                </div>
                <div className="p-7">
                  <p className="text-xs font-semibold tracking-[0.2em] text-emerald uppercase">{r.reference}</p>
                  <h3 className="mt-3 font-display text-3xl font-semibold text-ink">{r.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{r.text}</p>
                </div>
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
