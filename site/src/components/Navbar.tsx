import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { hero, nav } from '../content'
import Logo from './Logo'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#accueil')
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  // Suit la section visible pour y placer la pastille dorée du menu.
  useEffect(() => {
    const sections = nav.map((n) => document.querySelector(n.href)).filter(Boolean) as Element[]
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-500 ${
          scrolled || open ? 'border-b border-gold/15 bg-night/85 py-3 backdrop-blur-xl' : 'bg-transparent py-5'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8" aria-label="Navigation principale">
          <Logo />
          <ul className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`relative block rounded-full px-4 py-2 text-sm transition-colors hover:text-ivory ${
                    active === item.href ? 'text-night' : 'text-ivory/75'
                  }`}
                >
                  {active === item.href && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-gold"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
          <a
            href={hero.primaryCta.href}
            className="hidden rounded-full border border-gold/50 px-5 py-2.5 text-sm font-medium text-gold transition-all hover:bg-gold hover:text-night lg:inline-flex"
          >
            Commencer
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid size-11 cursor-pointer place-items-center rounded-full text-ivory lg:hidden"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={open}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </nav>
      </div>
      <motion.div className="h-px origin-left bg-gold/70" style={{ scaleX: progress }} />

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-x-0 top-[65px] bottom-0 bg-night/97 backdrop-blur-xl lg:hidden"
          >
            <motion.ul
              className="flex flex-col gap-1 px-6 pt-8"
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
            >
              {nav.map((item) => (
                <motion.li key={item.href} variants={{ hidden: { opacity: 0, x: -16 }, show: { opacity: 1, x: 0 } }}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-ivory/10 py-4 font-display text-3xl text-ivory"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
              <motion.li variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }} className="pt-8">
                <a
                  href={hero.primaryCta.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-full bg-gold py-4 text-center font-medium text-night"
                >
                  {hero.primaryCta.label}
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
