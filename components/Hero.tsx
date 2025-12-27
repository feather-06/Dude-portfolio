'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import FloatingParticles from './FloatingParticles'
import TypewriterText from './TypewriterText'
import MagneticButton from './MagneticButton'

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })

  const contentY = useTransform(scrollYProgress, [0, 1], [0, 80])
  const blob1Y = useTransform(scrollYProgress, [0, 1], [0, -120])
  const blob2Y = useTransform(scrollYProgress, [0, 1], [0, 140])
  const blob3Y = useTransform(scrollYProgress, [0, 1], [0, -80])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section
      id="home"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20"
      aria-label="Hero section"
    >
      <FloatingParticles count={30} />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-grid opacity-60 dark:opacity-30" aria-hidden="true" />
        <motion.div
          style={{ y: blob1Y }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"
        />
        <motion.div
          style={{ y: blob2Y }}
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"
        />
        <motion.div
          style={{ y: blob3Y }}
          className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ y: contentY }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"
      >
        <motion.div variants={itemVariants} className="inline-flex flex-col items-center mb-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-primary-600 dark:text-primary-400">
            Full-Stack Software Engineer • Data Engineering • AI/ML
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="block mb-1 text-gray-800 dark:text-gray-100">Hi, I&apos;m</span>
            <span className="block text-gradient animate-gradient">Saketh Krishna Dude</span>
          </h1>
        </motion.div>

        <motion.p variants={itemVariants} className="text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-4 min-h-[2rem]">
          <TypewriterText
            words={[
              'Full-Stack Engineer',
              'Backend + APIs',
              'Data Pipelines',
              'ML Systems',
              'Responsible AI',
            ]}
            className="text-primary-600 dark:text-primary-400 font-semibold"
          />
        </motion.p>

        <motion.p variants={itemVariants} className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-8">
          I build production-grade web systems and data/ML pipelines from scalable APIs to measurable user experiences.
          Currently focused on shipping AI responsibly and efficiently.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <MagneticButton>
            <a
              href="#projects"
              className="px-8 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 shadow-lg hover:shadow-xl hover:scale-105"
              aria-label="View my projects"
            >
              View Projects
            </a>
          </MagneticButton>
          <MagneticButton>
            <a
              href="#contact"
              className="px-8 py-3 bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 border-2 border-primary-600 dark:border-primary-500 rounded-lg font-semibold hover:bg-primary-50 dark:hover:bg-gray-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 hover:scale-105"
              aria-label="Get in touch"
            >
              Get In Touch
            </a>
          </MagneticButton>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-10 opacity-70">
          <span className="inline-block animate-bounce">↓</span>
        </motion.div>
      </motion.div>
    </section>
  )
}
