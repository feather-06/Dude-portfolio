import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import BreakpointIndicator from '@/components/BreakpointIndicator'

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <BreakpointIndicator />
    </>
  )
}

