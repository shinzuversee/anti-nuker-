import { useRef, type PointerEvent, type ReactNode } from 'react'
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'

type Props = {
  children: ReactNode
  className?: string
  max?: number
  glare?: boolean
}

// Carte qui s'incline en 3D sous la souris, avec un reflet lumineux qui suit le curseur.
// Désactivée au toucher et quand l'utilisateur demande moins d'animations.
export default function TiltCard({ children, className = '', max = 9, glare = true }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)
  const spring = { stiffness: 220, damping: 22 }
  const rotateX = useSpring(useTransform(py, [0, 1], [max, -max]), spring)
  const rotateY = useSpring(useTransform(px, [0, 1], [-max, max]), spring)
  const glareX = useTransform(px, (v) => `${v * 100}%`)
  const glareY = useTransform(py, (v) => `${v * 100}%`)
  const glareBg = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgba(255,244,214,0.28), transparent 55%)`
  const glareOpacity = useSpring(0, spring)

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (reduced || e.pointerType !== 'mouse' || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    px.set((e.clientX - rect.left) / rect.width)
    py.set((e.clientY - rect.top) / rect.height)
    glareOpacity.set(1)
  }

  const onLeave = () => {
    px.set(0.5)
    py.set(0.5)
    glareOpacity.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={{ rotateX, rotateY, transformPerspective: 1100, transformStyle: 'preserve-3d' }}
      className={`relative ${className}`}
    >
      {children}
      {glare && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-20 rounded-[inherit]"
          style={{ background: glareBg, opacity: glareOpacity }}
        />
      )}
    </motion.div>
  )
}

// Élément « détaché » de la carte : il flotte au-dessus quand la carte s'incline.
export function Lift({ children, z = 40, className = '' }: { children: ReactNode; z?: number; className?: string }) {
  return (
    <div className={className} style={{ transform: `translateZ(${z}px)`, transformStyle: 'preserve-3d' }}>
      {children}
    </div>
  )
}
