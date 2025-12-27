'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface TextRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}

export default function TextReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: TextRevealProps) {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const directions = {
    up: { y: 50, x: 0 },
    down: { y: -50, x: 0 },
    left: { x: 50, y: 0 },
    right: { x: -50, y: 0 },
  }

  const initial = directions[direction]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...initial }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 1, x: 0, y: 0 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

