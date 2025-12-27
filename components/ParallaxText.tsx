'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface ParallaxTextProps {
  children: React.ReactNode
  className?: string
  speed?: number
}

export default function ParallaxText({ children, className = '', speed = 0.5 }: ParallaxTextProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -100 * speed])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3])

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

