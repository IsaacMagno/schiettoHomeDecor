import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Intro from '@/components/sections/Intro'
import Experiences from '@/components/sections/Experiences'
import Features from '@/components/sections/Features'
import Consultant from '@/components/sections/Consultant'
import Highlights from '@/components/sections/Highlights'
import Values from '@/components/sections/Values'
import Location from '@/components/sections/Location'
import ClosingCTA from '@/components/sections/ClosingCTA'
import BackToTop from '@/components/ui/BackToTop'
import WhatsAppFloat from '@/components/ui/WhatsAppFloat'

export default function Home() {
  return (
    <main className="bg-loja-offwhite">
      <Header />
      <Hero />
      <Intro />
      <Experiences />
      <Features />
      <Consultant />
      <Highlights />
      <Values />
      <Location />
      <ClosingCTA />
      <Footer />
      <WhatsAppFloat />
      <BackToTop />
    </main>
  )
}
