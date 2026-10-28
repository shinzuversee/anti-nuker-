import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { site } from '../content'
import { INTRO_KEY, INTRO_PENDING } from '../intro'
import Mishkat from './Mishkat'

// Ouverture : la niche se dessine, la lampe s'allume, puis la lumière ouvre la page.
export default function Preloader() {
  const reduced = useReducedMotion()
  const [show, setShow] = useState(INTRO_PENDING)

  useEffect(() => {
    if (!show) return
    if (reduced) return setShow(false)
    document.documentElement.style.overflow = 'hidden'
    const t = setTimeout(() => {
      setShow(false)
      try {
        sessionStorage.setItem(INTRO_KEY, '1')
      } catch {
        /* stockage indisponible : l'intro se rejouera, ce n'est pas grave */
      }
    }, 2600)
    return () => clearTimeout(t)
  }, [show, reduced])

  return (
    <AnimatePresence onExitComplete={() => (document.documentElement.style.overflow = '')}>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center bg-night"
          exit={{ clipPath: 'circle(0% at 50% 45%)' }}
          initial={{ clipPath: 'circle(150% at 50% 45%)' }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          aria-hidden="true"
        >
          <div className="flex flex-col items-center">
            <div className="relative">
              <motion.div
                className="absolute inset-[-120%] rounded-full bg-gold/30 blur-3xl"
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1, duration: 1.2 }}
              />
              <Mishkat draw className="relative h-28 w-auto text-gold" />
            </div>
            <motion.p
              className="mt-8 font-arabic text-4xl text-gold-gradient"
              initial={{ clipPath: 'inset(0 0 0 100%)' }}
              animate={{ clipPath: 'inset(0 0 0 0%)' }}
              transition={{ delay: 1.2, duration: 1, ease: [0.65, 0, 0.35, 1] }}
            >
              {site.nameAr}
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
