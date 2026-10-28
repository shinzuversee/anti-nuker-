import { motion } from 'framer-motion'

// L'emblème : une niche (mishkât) en arc brisé, avec une lampe suspendue dont la flamme vacille.
export const ARCH_PATH = 'M6 46 V22 C6 12.5 13 6.5 20 2 C27 6.5 34 12.5 34 22 V46'

type Props = { className?: string; draw?: boolean; delay?: number }

export default function Mishkat({ className = '', draw = false, delay = 0 }: Props) {
  const stroke = draw
    ? {
        initial: { pathLength: 0, opacity: 0 },
        animate: { pathLength: 1, opacity: 1 },
        transition: { duration: 1.2, delay, ease: [0.65, 0, 0.35, 1] as const },
      }
    : {}
  return (
    <svg viewBox="0 0 40 48" className={className} aria-hidden="true" overflow="visible">
      <defs>
        <radialGradient id="mishkat-glow">
          <stop offset="0" stopColor="#fff3d0" stopOpacity="0.95" />
          <stop offset="0.4" stopColor="#d9b56a" stopOpacity="0.45" />
          <stop offset="1" stopColor="#d9b56a" stopOpacity="0" />
        </radialGradient>
      </defs>
      <motion.path d={ARCH_PATH} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" {...stroke} />
      <motion.path d="M20 9 V15" stroke="currentColor" strokeWidth="1" {...stroke} />
      <motion.circle
        cx="20"
        cy="20"
        r="9"
        fill="url(#mishkat-glow)"
        animate={{ opacity: [0.75, 1, 0.85, 1, 0.75], scale: [1, 1.06, 0.98, 1.04, 1] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: draw ? delay + 0.9 : 0 }}
        style={{ transformOrigin: '20px 20px' }}
      />
      <motion.path
        d="M20 15.5 C22.6 18.4 22.4 21.2 20 22.4 C17.6 21.2 17.4 18.4 20 15.5 Z"
        fill="#fff1c9"
        animate={{ scaleY: [1, 1.12, 0.95, 1.08, 1], skewX: [0, 3, -2, 2, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformOrigin: '20px 22px' }}
      />
      <motion.path d="M13.5 23 H26.5 Q24.5 30 20 30 Q15.5 30 13.5 23 Z" fill="currentColor" opacity="0.9" {...(draw ? { initial: { opacity: 0 }, animate: { opacity: 0.9 }, transition: { delay: delay + 0.8 } } : {})} />
      <motion.path d="M10 46 H30" stroke="currentColor" strokeWidth="1" opacity="0.5" {...stroke} />
    </svg>
  )
}
