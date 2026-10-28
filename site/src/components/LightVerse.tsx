import { useRef, type PointerEvent } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { lightVerse } from '../content'
import Mishkat from './Mishkat'

// Le verset de la Lumière : une lampe suspendue dans sa niche éclaire le texte,
// et la lumière suit aussi la souris.
export default function LightVerse() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const lampY = useTransform(scrollYProgress, [0, 0.5], [-120, 0])
  const glow = useTransform(scrollYProgress, [0.15, 0.45], [0, 1])
  const textReveal = useTransform(scrollYProgress, [0.25, 0.5], ['inset(0 0 0 100%)', 'inset(0 0 0 0%)'])
  const endReveal = useTransform(scrollYProgress, [0.4, 0.6], ['inset(0 0 0 100%)', 'inset(0 0 0 0%)'])

  const onMove = (e: PointerEvent<HTMLElement>) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    el.style.setProperty('--lx', `${e.clientX - r.left}px`)
    el.style.setProperty('--ly', `${e.clientY - r.top}px`)
  }

  return (
    <section
      ref={ref}
      onPointerMove={onMove}
      className="relative isolate overflow-hidden bg-[#071410] py-28 text-center text-ivory [--lx:50%] [--ly:30%] sm:py-36"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_420px_at_var(--lx)_var(--ly),rgba(234,215,168,0.08),transparent_70%)]" />
      {/* Rayons de lumière qui tournent lentement autour de la lampe */}
      <motion.div
        className="pointer-events-none absolute top-[-30rem] left-1/2 -z-10 size-[80rem] -translate-x-1/2 bg-[repeating-conic-gradient(from_0deg,rgba(217,181,106,0.08)_0deg_4deg,transparent_4deg_16deg)] [mask-image:radial-gradient(circle,black_10%,transparent_55%)]"
        style={{ opacity: glow }}
        animate={{ rotate: 360 }}
        transition={{ duration: 160, repeat: Infinity, ease: 'linear' }}
      />

      <motion.div style={{ y: lampY }} className="relative mx-auto w-fit">
        <div className="mx-auto h-24 w-px bg-gradient-to-b from-transparent to-gold/60" />
        <motion.div className="absolute top-24 left-1/2 size-72 -translate-x-1/2 -translate-y-1/4 rounded-full bg-gold/25 blur-[70px]" style={{ opacity: glow }} />
        <Mishkat className="relative h-40 w-auto text-gold" />
      </motion.div>

      <div className="mx-auto mt-14 max-w-4xl px-5">
        <p className="text-xs font-semibold tracking-[0.3em] text-gold uppercase">{lightVerse.kicker}</p>
        <motion.p
          className="mt-8 font-arabic text-5xl leading-[1.7] text-gold-gradient sm:text-7xl"
          lang="ar"
          dir="rtl"
          style={{ clipPath: textReveal }}
        >
          {lightVerse.ar}
        </motion.p>
        <p className="mt-4 font-display text-2xl text-ivory/85 italic sm:text-3xl">{lightVerse.meaning}</p>

        <motion.p className="mt-12 font-arabic text-4xl leading-[1.7] text-ivory sm:text-5xl" lang="ar" dir="rtl" style={{ clipPath: endReveal }}>
          {lightVerse.arEnd}
        </motion.p>
        <p className="mt-2 font-display text-xl text-ivory/75 italic sm:text-2xl">{lightVerse.meaningEnd}</p>
        <p className="mt-6 text-xs font-semibold tracking-[0.25em] text-gold uppercase">{lightVerse.reference}</p>
        <p className="mx-auto mt-10 max-w-lg text-sm leading-relaxed text-ivory/55">{lightVerse.text}</p>
      </div>
    </section>
  )
}
