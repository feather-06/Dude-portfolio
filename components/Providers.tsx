'use client'

import { ThemeProvider } from '@/contexts/ThemeContext'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-200">
        <Header />
        <main className="flex-grow" id="main-content">
          {children}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

