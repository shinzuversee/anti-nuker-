import { lazy, Suspense, useRef, type PointerEvent } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { hero, site } from '../content'
import Pattern from './Pattern'
import GlowButton from './GlowButton'
import { INTRO_DELAY } from '../intro'

const LetterField = lazy(() => import('./LetterField'))

const ease = [0.22, 1, 0.36, 1] as const
// Délai pour laisser l'ouverture se terminer avant d'animer le titre.
const D = INTRO_DELAY

// Grand arc brisé qui encadre le titre, comme l'entrée d'une mosquée ou le cadre d'un manuscrit.
const ARCH = 'M10 600 V270 C10 140 120 70 200 8 C280 70 390 140 390 270 V600'
const ARCH_IN = 'M28 600 V274 C28 156 128 90 200 32 C272 90 372 156 372 274 V600'

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const archScale = useTransform(scrollYProgress, [0, 1], [1, 1.35])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 140])
  const fade = useTransform(scrollYProgress, [0, 0.65], [1, 0])

  // La lumière suit la souris et révèle le motif géométrique caché.
  const onMove = (e: PointerEvent<HTMLElement>) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - r.left}px`)
    el.style.setProperty('--my', `${e.clientY - r.top}px`)
  }

  const words = hero.title[0].split(' ')

  return (
    <section
      id="accueil"
      ref={ref}
      onPointerMove={onMove}
      className="relative isolate flex min-h-svh items-center overflow-hidden bg-night pt-28 pb-20 text-ivory [--mx:50%] [--my:40%]"
    >
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_50%_35%,#1f5c4d_0%,#0b1d17_60%)]" />
      <Pattern className="absolute inset-0 -z-10 text-gold opacity-[0.05]" />
      <Pattern
        className="absolute inset-0 -z-10 text-gold-soft opacity-60 [mask-image:radial-gradient(circle_220px_at_var(--mx)_var(--my),black,transparent)]"
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_380px_at_var(--mx)_var(--my),rgba(234,215,168,0.13),transparent_70%)]"
        aria-hidden="true"
      />

      <div className="absolute inset-0 -z-10">
        <Suspense fallback={null}>
          <LetterField />
        </Suspense>
      </div>

      <motion.svg
        viewBox="0 0 400 600"
        preserveAspectRatio="xMidYMax meet"
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-[84%] w-[94vw] max-w-3xl -translate-x-1/2 text-gold"
        style={{ scale: archScale, opacity: fade, transformOrigin: '50% 100%' }}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="arch-fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="currentColor" stopOpacity="0.9" />
            <stop offset="1" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="arch-light" cx="0.5" cy="0.3" r="0.6">
            <stop offset="0" stopColor="#1f5c4d" stopOpacity="0.55" />
            <stop offset="1" stopColor="#0b1d17" stopOpacity="0" />
          </radialGradient>
        </defs>
        <motion.path d={ARCH_IN} fill="url(#arch-light)" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: D + 0.8, duration: 1.5 }} />
        <motion.path
          d={ARCH}
          fill="none"
          stroke="url(#arch-fade)"
          strokeWidth="1.4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: D, duration: 2.2, ease: [0.65, 0, 0.35, 1] }}
        />
        <motion.path
          d={ARCH_IN}
          fill="none"
          stroke="url(#arch-fade)"
          strokeWidth="0.7"
          strokeDasharray="2 6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: D + 0.3, duration: 2.2, ease: [0.65, 0, 0.35, 1] }}
        />
        <motion.g
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: D + 1.9, type: 'spring', stiffness: 200, damping: 14 }}
          style={{ transformOrigin: '200px 8px' }}
        >
          <rect x="194" y="2" width="12" height="12" fill="currentColor" transform="rotate(45 200 8)" />
          <circle cx="200" cy="8" r="14" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.6" />
        </motion.g>
      </motion.svg>

      <motion.div style={{ y: contentY, opacity: fade }} className="mx-auto w-full max-w-4xl px-5 text-center sm:px-8">
        <motion.p
          className="font-arabic text-lg text-gold/90 sm:text-xl"
          lang="ar"
          dir="rtl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: D + 0.2, duration: 1, ease }}
        >
          {hero.eyebrow}
        </motion.p>

        {/* Le nom s'écrit de droite à gauche, comme le trace un calame. */}
        <motion.p
          className="mt-6 font-arabic text-7xl leading-[1.45] font-bold text-gold-gradient drop-shadow-[0_0_30px_rgba(217,181,106,0.35)] sm:text-8xl md:text-9xl"
          lang="ar"
          initial={{ clipPath: 'inset(0 0 0 100%)' }}
          animate={{ clipPath: 'inset(0 0 0 0%)' }}
          transition={{ delay: D + 0.5, duration: 1.6, ease: [0.65, 0, 0.35, 1] }}
        >
          {site.nameAr}
        </motion.p>

        <h1 className="mt-2 font-display text-4xl leading-[1.05] font-medium text-balance sm:text-6xl md:text-7xl">
          <span className="sr-only">{hero.title.join(' ')}</span>
          <span aria-hidden="true">
            {words.map((w, i) => (
              <span key={i} className="inline-block overflow-hidden pb-1 align-bottom">
                <motion.span
                  className="inline-block"
                  initial={{ y: '110%', rotate: 6 }}
                  animate={{ y: 0, rotate: 0 }}
                  transition={{ delay: D + 1.1 + i * 0.08, duration: 0.9, ease }}
                >
                  {w}
                  {i < words.length - 1 && ' '}
                </motion.span>
              </span>
            ))}
            <br />
            <motion.span
              className="inline-block text-ivory/60 italic"
              initial={{ opacity: 0, filter: 'blur(12px)', letterSpacing: '0.12em' }}
              animate={{ opacity: 1, filter: 'blur(0px)', letterSpacing: '0em' }}
              transition={{ delay: D + 1.5, duration: 1.4, ease }}
            >
              {hero.title[1]}
            </motion.span>
          </span>
        </h1>

        <motion.p
          className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-ivory/70 sm:text-lg"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: D + 1.8, duration: 0.9, ease }}
        >
          {hero.subtitle}
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: D + 2, duration: 0.9, ease }}
        >
          <GlowButton href={hero.primaryCta.href}>
            {hero.primaryCta.label}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </GlowButton>
          <GlowButton href={hero.secondaryCta.href} variant="ghost">
            {hero.secondaryCta.label}
          </GlowButton>
        </motion.div>

        <motion.ul
          className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-ivory/55"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: D + 2.3, duration: 1 }}
        >
          {hero.highlights.map((h, i) => (
            <li key={h} className="flex items-center gap-6">
              {i > 0 && <span className="size-1 rotate-45 bg-gold/70" aria-hidden="true" />}
              {h}
            </li>
          ))}
        </motion.ul>
      </motion.div>

      <motion.a
        href="#verset"
        aria-label="Faire défiler vers le bas"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] tracking-[0.3em] text-ivory/40 uppercase md:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: D + 2.6 }}
      >
        Entrer
        <motion.span
          className="h-10 w-px origin-top bg-gradient-to-b from-gold to-transparent"
          animate={{ scaleY: [0, 1, 1], opacity: [1, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.a>
    </section>
  )
}
