'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface TypewriterTextProps {
  words: string[]
  className?: string
  typingSpeed?: number
  deletingSpeed?: number
  pauseTime?: number
}

export default function TypewriterText({
  words,
  className = '',
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 2000,
}: TypewriterTextProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[currentWordIndex]
    let timeout: NodeJS.Timeout

    if (!isDeleting && currentText === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime)
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false)
      setCurrentWordIndex((prev) => (prev + 1) % words.length)
    } else {
      timeout = setTimeout(
        () => {
          setCurrentText((prev) => {
            if (isDeleting) {
              return prev.slice(0, -1)
            } else {
              return currentWord.slice(0, prev.length + 1)
            }
          })
        },
        isDeleting ? deletingSpeed : typingSpeed
      )
    }

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseTime])

  return (
    <span className={className}>
      {currentText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
        className="inline-block w-0.5 h-6 bg-primary-600 ml-1"
      />
    </span>
  )
}

