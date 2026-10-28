import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { quote } from '../content'
import Pattern from './Pattern'

export default function Quote() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  // Le verset bascule en 3D : penché à l'arrivée, droit au centre, penché en sortant.
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [45, 0, -35])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9])
  const opacity = useTransform(scrollYProgress, [0.1, 0.4, 0.75, 0.95], [0, 1, 1, 0])
  const patternRotate = useTransform(scrollYProgress, [0, 1], [-8, 8])

  return (
    <section ref={ref} className="relative isolate overflow-hidden bg-night py-32 text-center text-ivory sm:py-44">
      <motion.div className="absolute inset-[-20%] -z-10" style={{ rotate: patternRotate }}>
        <Pattern className="h-full w-full text-gold opacity-[0.06] [mask-image:radial-gradient(ellipse_at_center,black,transparent_60%)]" />
      </motion.div>
      <div className="absolute top-1/2 left-1/2 -z-10 size-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald/30 blur-[120px]" />
      <motion.div
        className="mx-auto max-w-3xl px-5"
        style={{ rotateX, scale, opacity, transformPerspective: 900 }}
      >
        <p className="font-arabic text-5xl leading-[1.6] text-gold-gradient sm:text-7xl" lang="ar" dir="rtl">
          {quote.ar}
        </p>
        <p className="mt-6 font-display text-2xl text-ivory/85 italic sm:text-3xl">{quote.meaning}</p>
        <p className="mt-5 text-xs font-semibold tracking-[0.25em] text-gold uppercase">{quote.reference}</p>
      </motion.div>
    </section>
  )
}
