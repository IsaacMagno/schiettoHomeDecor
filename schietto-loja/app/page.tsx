import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Highlights from '@/components/sections/Highlights'
import CatalogHome from '@/components/sections/CatalogHome'
import CatalogJewelry from '@/components/sections/CatalogJewelry'
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
      <CatalogHome />
      <SectionTransition variant="offwhite-to-dark" />
      <CatalogJewelry />
      <SectionTransition variant="dark-to-offwhite" />
      <Location />
      <SectionTransition variant="offwhite-to-dark" />
      <Footer />
      <BackToTop />
    </main>
  )
}
