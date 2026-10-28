import { useRef, useState, type PointerEvent, type ReactNode } from 'react'
import { motion, useReducedMotion, useSpring } from 'framer-motion'

type Props = {
  href: string
  children: ReactNode
  variant?: 'gold' | 'ghost'
  className?: string
}

// Bouton « aimanté » : il se laisse attirer par la souris, un reflet le traverse au survol
// et une onde de lumière part du point de clic.
export default function GlowButton({ href, children, variant = 'gold', className = '' }: Props) {
  const ref = useRef<HTMLAnchorElement>(null)
  const reduced = useReducedMotion()
  const x = useSpring(0, { stiffness: 250, damping: 18 })
  const y = useSpring(0, { stiffness: 250, damping: 18 })
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([])

  const onMove = (e: PointerEvent<HTMLAnchorElement>) => {
    if (reduced || e.pointerType !== 'mouse' || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - r.left - r.width / 2) * 0.3)
    y.set((e.clientY - r.top - r.height / 2) * 0.4)
  }
  const onLeave = () => {
    x.set(0)
    y.set(0)
  }
  const onDown = (e: PointerEvent<HTMLAnchorElement>) => {
    if (!ref.current) return
    const r = ref.current.getBoundingClientRect()
    const id = Date.now()
    setRipples((rs) => [...rs, { id, x: e.clientX - r.left, y: e.clientY - r.top }])
    setTimeout(() => setRipples((rs) => rs.filter((rp) => rp.id !== id)), 700)
  }

  const styles =
    variant === 'gold'
      ? 'bg-gold text-night shadow-[0_0_40px_-8px] shadow-gold/60 hover:shadow-[0_0_60px_-6px] hover:shadow-gold/80'
      : 'border border-ivory/20 text-ivory hover:border-gold/60 hover:text-gold'

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{ x, y }}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      onPointerDown={onDown}
      whileTap={{ scale: 0.96 }}
      className={`group relative inline-flex h-13 items-center gap-2 overflow-hidden rounded-full px-7 font-medium transition-[box-shadow,border-color,color] duration-300 ${styles} ${className}`}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/45 to-transparent opacity-0 transition-none group-hover:left-[130%] group-hover:opacity-100 group-hover:transition-[left] group-hover:duration-700"
      />
      {ripples.map((r) => (
        <motion.span
          key={r.id}
          aria-hidden="true"
          className={`pointer-events-none absolute size-4 rounded-full ${variant === 'gold' ? 'bg-white/60' : 'bg-gold/40'}`}
          style={{ left: r.x - 8, top: r.y - 8 }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 18, opacity: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        />
      ))}
      <span className="relative flex items-center gap-2">{children}</span>
    </motion.a>
  )
}
