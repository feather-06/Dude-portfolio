'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useRef } from 'react'
import TextReveal from './TextReveal'

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  })

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 md:py-32 bg-white dark:bg-gray-900 relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-4xl mx-auto"
        >
          <TextReveal direction="down" className="text-center mb-8 md:mb-12">
            <h2
              id="about-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white glitch"
            >
              About Me
            </h2>
          </TextReveal>

          <div className="prose prose-lg max-w-none">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed"
            >
              I&apos;m a passionate developer and data engineer with a strong foundation in
              software engineering and data infrastructure. I specialize in building
              scalable applications, designing efficient data pipelines, and creating
              solutions that transform complex data into actionable insights.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed"
            >
              My expertise spans across full-stack development, cloud infrastructure,
              data warehousing, and machine learning. I&apos;m always eager to learn new
              technologies and apply them to solve real-world problems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="p-6 bg-primary-50 dark:bg-gray-800 rounded-lg tilt-3d hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-3 text-primary-900 dark:text-primary-400">
                  Development
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Building modern web applications with React, Next.js, and TypeScript.
                  Focus on performance, accessibility, and user experience.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, rotateY: -5 }}
                className="p-6 bg-primary-50 dark:bg-gray-800 rounded-lg tilt-3d hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-3 text-primary-900 dark:text-primary-400">
                  Data Engineering
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Designing and implementing data pipelines, ETL processes, and data
                  warehouses. Working with big data technologies and cloud platforms.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

