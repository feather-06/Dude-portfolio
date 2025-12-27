'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import TextReveal from './TextReveal'
import MagneticButton from './MagneticButton'

const EMAIL = 'sakethdude.dev@gmail.com'
const GITHUB = 'https://github.com/feather-06'
// TODO: replace once you send your real LinkedIn
const LINKEDIN = 'https://linkedin.com'

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 })

  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const subject = encodeURIComponent(`Portfolio message from ${formData.name || 'someone'}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    )

    // open user's email client
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`

    // small UX reset
    setTimeout(() => setIsSubmitting(false), 500)
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 md:py-32 bg-white dark:bg-gray-900"
      aria-labelledby="contact-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-4xl mx-auto"
        >
          <TextReveal direction="up" className="text-center mb-8 md:mb-12">
            <h2
              id="contact-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white glitch"
            >
              Get In Touch
            </h2>
          </TextReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Let&apos;s Connect</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-8">
                Recruiting, collab, or building something real? Hit me up — I respond fast.
              </p>

              <div className="space-y-4">
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-4 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 rounded p-2"
                  aria-label="Send email"
                >
                  <span className="font-medium">{EMAIL}</span>
                </a>

                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 rounded p-2"
                  aria-label="Visit LinkedIn profile"
                >
                  <span className="font-medium">LinkedIn</span>
                  <span className="text-xs text-gray-500">(send me your URL to replace)</span>
                </a>

                <a
                  href={GITHUB}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 rounded p-2"
                  aria-label="Visit GitHub profile"
                >
                  <span className="font-medium">GitHub</span>
                  <span className="text-xs text-gray-500">feather-06</span>
                </a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 20 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              onSubmit={handleSubmit}
              className="space-y-6"
              noValidate
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                />
              </div>

              <MagneticButton>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed pulse-glow"
                  aria-label="Send message"
                >
                  {isSubmitting ? 'Opening Email…' : 'Send Message'}
                </motion.button>
              </MagneticButton>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
