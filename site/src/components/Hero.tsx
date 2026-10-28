import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import { hero, site } from '../content'
import Pattern, { Star } from './Pattern'
import { fadeUp, stagger } from './Reveal'

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 160])
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section
      id="accueil"
      ref={ref}
      className="relative isolate flex min-h-svh items-center overflow-hidden bg-night pt-28 pb-20 text-ivory"
    >
      <Pattern className="absolute inset-0 -z-10 text-gold opacity-[0.07] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
      <div className="absolute top-1/3 left-1/2 -z-10 size-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald/40 blur-[120px]" />
      <div className="absolute right-[-10rem] bottom-[-10rem] -z-10 size-[28rem] rounded-full bg-gold/10 blur-[100px]" />

      <motion.div style={{ y }} className="pointer-events-none absolute top-1/2 left-1/2 -z-10 -translate-x-1/2 -translate-y-1/2">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}>
          <Star className="size-[min(90vw,46rem)] text-gold/10" />
        </motion.div>
      </motion.div>

      <motion.div
        style={{ opacity: fade }}
        className="mx-auto w-full max-w-5xl px-5 text-center sm:px-8"
        initial="hidden"
        animate="show"
        variants={stagger(0.12)}
      >
        <motion.p variants={fadeUp} className="font-arabic text-xl text-gold/90 sm:text-2xl" lang="ar" dir="rtl">
          {hero.eyebrow}
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="mt-8 font-arabic text-6xl leading-[1.4] font-bold text-gold-gradient sm:text-7xl md:text-8xl"
          lang="ar"
          dir="rtl"
        >
          {site.nameAr}
        </motion.p>

        <motion.h1 variants={fadeUp} className="mt-4 font-display text-4xl leading-[1.05] font-medium text-balance sm:text-6xl md:text-7xl">
          {hero.title[0]}
          <br />
          <span className="text-ivory/60 italic">{hero.title[1]}</span>
        </motion.h1>

        <motion.p variants={fadeUp} className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-ivory/70 sm:text-lg">
          {hero.subtitle}
        </motion.p>

        <motion.div variants={fadeUp} className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={hero.primaryCta.href}
            className="group inline-flex h-13 items-center gap-2 rounded-full bg-gold px-7 font-medium text-night shadow-[0_0_40px_-8px] shadow-gold/60 transition-all hover:bg-gold-soft"
          >
            {hero.primaryCta.label}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={hero.secondaryCta.href}
            className="inline-flex h-13 items-center rounded-full border border-ivory/20 px-7 font-medium text-ivory transition-colors hover:border-gold/60 hover:text-gold"
          >
            {hero.secondaryCta.label}
          </a>
        </motion.div>

        <motion.ul variants={fadeUp} className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-ivory/60">
          {hero.highlights.map((h) => (
            <li key={h} className="flex items-center gap-2">
              <Check className="size-4 text-gold" />
              {h}
            </li>
          ))}
        </motion.ul>
      </motion.div>

      <motion.a
        href="#verset"
        aria-label="Faire défiler vers le bas"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 sm:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <span className="flex h-11 w-7 justify-center rounded-full border border-ivory/25 pt-2">
          <motion.span
            className="size-1.5 rounded-full bg-gold"
            animate={{ y: [0, 14, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </span>
      </motion.a>
    </section>
  )
}
