import { motion } from 'framer-motion'
import { quote } from '../content'
import Pattern from './Pattern'

export default function Quote() {
  return (
    <section className="relative isolate overflow-hidden bg-night py-28 text-center text-ivory sm:py-36">
      <Pattern className="absolute inset-0 -z-10 text-gold opacity-[0.06] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="absolute top-1/2 left-1/2 -z-10 size-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald/30 blur-[120px]" />
      <motion.div
        className="mx-auto max-w-3xl px-5"
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
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
