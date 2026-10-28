import { lazy, Suspense, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import { hero, site } from '../content'
import Pattern, { Star } from './Pattern'
import { fadeUp, stagger } from './Reveal'

// La scène 3D est chargée à part pour que le texte s'affiche immédiatement.
const Scene3D = lazy(() => import('./Scene3D'))

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const textY = useTransform(scrollYProgress, [0, 1], [0, 120])
  const sceneY = useTransform(scrollYProgress, [0, 1], [0, 220])
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section
      id="accueil"
      ref={ref}
      className="relative isolate flex min-h-svh items-center overflow-hidden bg-night pt-24 pb-16 text-ivory lg:pt-28"
    >
      <Pattern className="absolute inset-0 -z-10 text-gold opacity-[0.07] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
      <div className="absolute top-1/2 right-[-6rem] -z-10 size-[40rem] -translate-y-1/2 rounded-full bg-emerald/40 blur-[120px]" />
      <div className="absolute bottom-[-12rem] left-[-8rem] -z-10 size-[28rem] rounded-full bg-gold/10 blur-[100px]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-4 px-5 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-8">
        <motion.div
          style={{ y: sceneY, opacity: fade }}
          className="relative mx-auto aspect-square w-full max-w-[22rem] sm:max-w-md lg:order-2 lg:max-w-none"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-[18%] rounded-full bg-gold/15 blur-[80px]" aria-hidden="true" />
          <Suspense fallback={<Star className="absolute inset-[12%] text-gold/30" />}>
            <Scene3D />
          </Suspense>
        </motion.div>

        <motion.div
          style={{ y: textY, opacity: fade }}
          className="text-center lg:text-left"
          initial="hidden"
          animate="show"
          variants={stagger(0.12)}
        >
          <motion.p variants={fadeUp} className="font-arabic text-lg text-gold/90 sm:text-xl" lang="ar" dir="rtl">
            {hero.eyebrow}
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-4 font-arabic text-6xl leading-[1.45] font-bold text-gold-gradient sm:text-7xl"
            lang="ar"
          >
            {site.nameAr}
          </motion.p>

          <motion.h1 variants={fadeUp} className="mt-2 font-display text-4xl leading-[1.05] font-medium text-balance sm:text-6xl xl:text-7xl">
            {hero.title[0]}
            <br />
            <span className="text-ivory/60 italic">{hero.title[1]}</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ivory/70 sm:text-lg lg:mx-0">
            {hero.subtitle}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
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

          <motion.ul
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-ivory/60 lg:justify-start"
          >
            {hero.highlights.map((h) => (
              <li key={h} className="flex items-center gap-2">
                <Check className="size-4 text-gold" />
                {h}
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </div>

      <motion.a
        href="#verset"
        aria-label="Faire défiler vers le bas"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:block"
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
