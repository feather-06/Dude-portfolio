'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import TextReveal from './TextReveal'

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)

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
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
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
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.1, duration: 0.5, ease: 'easeOut' }}
              className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed"
            >
              I’m a full-stack software engineer who likes building systems that actually ship: clean UI, reliable APIs,
              and the data/ML plumbing behind the scenes. My recent work spans event-driven pipelines on AWS,
              production workflows in Java/Spring Boot, and ML prototypes that turn messy inputs into useful decisions.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }}
              className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed"
            >
              I’ve worked on responsible AI governance and hands-on engineering. I care about correctness, monitoring,
              and human-in-the-loop approvals as much as I care about performance. I’m currently finishing my MS in CS
              at Northeastern University and optimizing my portfolio for big-tech software engineering roles.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.3, duration: 0.55, ease: 'easeOut' }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10"
            >
              <motion.div
                whileHover={{ scale: 1.04 }}
                className="p-6 bg-primary-50 dark:bg-gray-800 rounded-lg hover:shadow-xl transition-all"
              >
                <h3 className="text-lg font-semibold mb-2 text-primary-900 dark:text-primary-400">
                  Full-Stack Engineering
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  Building production-ready UIs and APIs using React, Next.js, Java, and Spring Boot with a focus on
                  performance, correctness, and maintainable code.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.04 }}
                className="p-6 bg-primary-50 dark:bg-gray-800 rounded-lg hover:shadow-xl transition-all"
              >
                <h3 className="text-lg font-semibold mb-2 text-primary-900 dark:text-primary-400">
                  Data & Systems
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  Designing event-driven pipelines and ETL workflows on AWS using Lambda, DynamoDB, S3, and monitoring
                  that keeps systems observable in production.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.04 }}
                className="p-6 bg-primary-50 dark:bg-gray-800 rounded-lg hover:shadow-xl transition-all"
              >
                <h3 className="text-lg font-semibold mb-2 text-primary-900 dark:text-primary-400">
                  ML-Aware Product Work
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  Shipping ML-powered features responsibly from model pipelines to explainability, governance, and
                  human-in-the-loop workflows that teams can trust.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
