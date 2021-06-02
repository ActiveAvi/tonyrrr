import Hero from '../components/hero'
import Services from '../components/services'
import Bio from '../components/bio'
import Projects from '../components/projects'
import Cta from '../components/cta'

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Bio />
      <Projects />
      <Cta />
    </div>
  )
}
