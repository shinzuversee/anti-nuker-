import { motion, type HTMLMotionProps } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as const

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
}

// Entrée en perspective : l'élément se redresse en arrivant à l'écran.
export const fadeUp3d = {
  hidden: { opacity: 0, y: 60, rotateX: 28, scale: 0.94, transformPerspective: 1200 },
  show: { opacity: 1, y: 0, rotateX: 0, scale: 1, transformPerspective: 1200, transition: { duration: 0.95, ease } },
}

export const stagger = (delay = 0.1) => ({
  hidden: {},
  show: { transition: { staggerChildren: delay } },
})

// Fait apparaître son contenu en douceur quand il entre dans l'écran.
export default function Reveal({ delay = 0, ...props }: HTMLMotionProps<'div'> & { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32, rotateX: 16, transformPerspective: 1200 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0, transformPerspective: 1200 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, ease, delay }}
      {...props}
    />
  )
}
