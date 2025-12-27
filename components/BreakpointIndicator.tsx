'use client'

import { useState, useEffect } from 'react'

export default function BreakpointIndicator() {
  const [breakpoint, setBreakpoint] = useState('')
  const [width, setWidth] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updateBreakpoint = () => {
      const windowWidth = window.innerWidth
      setWidth(windowWidth)
      if (windowWidth < 640) {
        setBreakpoint('sm')
      } else if (windowWidth < 768) {
        setBreakpoint('md')
      } else if (windowWidth < 1024) {
        setBreakpoint('lg')
      } else if (windowWidth < 1280) {
        setBreakpoint('xl')
      } else {
        setBreakpoint('2xl')
      }
    }

    updateBreakpoint()
    window.addEventListener('resize', updateBreakpoint)

    // Toggle visibility with 'B' key (for development)
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'b' || e.key === 'B') {
        setIsVisible((prev) => !prev)
      }
    }

    window.addEventListener('keydown', handleKeyPress)

    return () => {
      window.removeEventListener('resize', updateBreakpoint)
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [])

  // Only show in development mode
  if (process.env.NODE_ENV === 'production' || !isVisible) {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 px-3 py-2 bg-black/80 text-white text-xs rounded-md font-mono shadow-lg">
      <div className="flex items-center gap-2">
        <span className="text-gray-400">Breakpoint:</span>
        <span className="text-primary-400 font-bold">{breakpoint}</span>
        <span className="text-gray-500">({width}px)</span>
      </div>
      <div className="text-gray-500 text-[10px] mt-1">
        Press &apos;B&apos; to toggle
      </div>
    </div>
  )
}

