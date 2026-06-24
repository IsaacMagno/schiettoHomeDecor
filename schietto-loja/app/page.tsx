import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Highlights from '@/components/sections/Highlights'
import Location from '@/components/sections/Location'
import BackToTop from '@/components/ui/BackToTop'
import SectionTransition from '@/components/ui/SectionTransition'

export default function Home() {
  return (
    <main className="bg-loja-offwhite">
      <Header />
      <Hero />
      <SectionTransition variant="offwhite-to-dark" />
      <About />
      <SectionTransition variant="dark-to-offwhite" />
      <Highlights />
      <Location />
      <SectionTransition variant="offwhite-to-dark" />
      <Footer />
      <BackToTop />
    </main>
  )
}
