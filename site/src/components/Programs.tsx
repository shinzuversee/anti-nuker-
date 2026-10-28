import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { AudioLines, BookOpen, Check, Heart, Languages, ScrollText, type LucideIcon } from 'lucide-react'
import { programs, type ProgramIcon } from '../content'
import SectionHeading from './SectionHeading'
import { fadeUp3d, stagger } from './Reveal'
import TiltCard, { Lift } from './TiltCard'

const icons: Record<ProgramIcon, LucideIcon> = {
  alphabet: BookOpen,
  tajwid: AudioLines,
  arabic: Languages,
  tafsir: ScrollText,
  heart: Heart,
}

const arabicDigits = ['١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩']

function useDesktop() {
  const query = '(min-width: 1024px)'
  const [desktop, setDesktop] = useState(() => window.matchMedia(query).matches)
  useEffect(() => {
    const mq = window.matchMedia(query)
    const on = () => setDesktop(mq.matches)
    mq.addEventListener('change', on)
    return () => mq.removeEventListener('change', on)
  }, [])
  return desktop
}

function Card({ p, i }: { p: (typeof programs.items)[number]; i: number }) {
  const Icon = icons[p.icon]
  return (
    <TiltCard
      max={7}
      className="group flex h-full flex-col rounded-[2rem] border border-ink/8 bg-ivory p-8 shadow-[0_30px_70px_-45px_rgba(11,29,23,0.6)] transition-[border-color] duration-500 hover:border-gold/50"
    >
      <Lift z={50} className="flex items-center justify-between">
        <span className="grid size-14 place-items-center rounded-2xl bg-night text-gold shadow-lg shadow-night/20 transition-transform duration-500 group-hover:rotate-6">
          <Icon className="size-6" strokeWidth={1.6} />
        </span>
        <span className="flex items-center gap-3">
          <span className="rounded-full bg-emerald/8 px-3 py-1 text-xs font-medium text-emerald">{p.level}</span>
          <span className="font-arabic text-3xl text-gold" aria-label={`Étape ${i + 1}`}>
            {arabicDigits[i]}
          </span>
        </span>
      </Lift>
      <Lift z={35}>
        <h3 className="mt-8 font-display text-3xl font-semibold text-ink">{p.title}</h3>
        <p className="mt-3 leading-relaxed text-muted">{p.text}</p>
      </Lift>
      <ul className="mt-auto space-y-2.5 border-t border-ink/8 pt-6 text-sm">
        {p.points.map((pt) => (
          <li key={pt} className="flex items-center gap-3 text-ink/80">
            <Check className="size-4 shrink-0 text-gold" />
            {pt}
          </li>
        ))}
      </ul>
    </TiltCard>
  )
}

function Journey() {
  const section = useRef<HTMLElement>(null)
  const track = useRef<HTMLDivElement>(null)
  const [dist, setDist] = useState(0)

  useLayoutEffect(() => {
    const measure = () => {
      if (track.current) setDist(Math.max(0, track.current.scrollWidth - window.innerWidth))
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  const { scrollYProgress } = useScroll({ target: section, offset: ['start start', 'end end'] })
  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.4 })
  const x = useTransform(smooth, [0, 1], [0, -dist])
  const pathLength = useTransform(smooth, [0, 0.95], [0, 1])

  return (
    <section id="parcours" ref={section} className="relative bg-sand/60" style={{ height: `calc(100vh + ${dist}px)` }}>
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <motion.div ref={track} style={{ x }} className="relative flex w-max items-stretch gap-8 pr-[12vw] pl-[max(2rem,calc((100vw-80rem)/2+2rem))]">
          {/* Chemin doré qui relie les étapes et se trace avec le défilement */}
          <svg className="pointer-events-none absolute top-1/2 left-0 h-24 w-full -translate-y-1/2 overflow-visible" preserveAspectRatio="none" viewBox="0 0 1000 100" aria-hidden="true">
            <path d="M0 50 C 100 0, 200 100, 300 50 S 500 0, 600 50 S 800 100, 1000 50" fill="none" stroke="#d9b56a" strokeOpacity="0.18" strokeWidth="2" vectorEffect="non-scaling-stroke" />
            <motion.path
              d="M0 50 C 100 0, 200 100, 300 50 S 500 0, 600 50 S 800 100, 1000 50"
              fill="none"
              stroke="#d9b56a"
              strokeWidth="2.5"
              vectorEffect="non-scaling-stroke"
              style={{ pathLength }}
            />
          </svg>

          <div className="relative flex w-[30rem] shrink-0 flex-col justify-center">
            <SectionHeading kicker={programs.kicker} title={programs.title} intro={programs.intro} align="left" />
            <p className="mt-8 flex items-center gap-3 text-sm text-muted">
              <motion.span animate={{ x: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity }} className="text-gold">
                →
              </motion.span>
              Fais défiler pour avancer sur le chemin
            </p>
          </div>
          {programs.items.map((p, i) => (
            <div key={p.title} className={`relative w-[24rem] shrink-0 ${i % 2 ? 'mt-24' : 'mb-24'}`}>
              <Card p={p} i={i} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function Stack() {
  return (
    <section id="parcours" className="bg-sand/60 py-24">
      <div className="mx-auto max-w-2xl px-5 sm:px-8">
        <SectionHeading kicker={programs.kicker} title={programs.title} intro={programs.intro} />
        <motion.ul
          className="mt-14 grid gap-5"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger(0.08)}
        >
          {programs.items.map((p, i) => (
            <motion.li key={p.title} variants={fadeUp3d}>
              <Card p={p} i={i} />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}

export default function Programs() {
  return useDesktop() ? <Journey /> : <Stack />
}
