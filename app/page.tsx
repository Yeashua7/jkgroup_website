import { Header } from '@/components/jk/header'
import { HeroSection } from '@/components/jk/hero-section'
import { AboutSection } from '@/components/jk/about-section'
import { ServicesSection } from '@/components/jk/services-section'
import { WhyUsSection } from '@/components/jk/why-us-section'
import { ContactSection } from '@/components/jk/contact-section'
import { Footer } from '@/components/jk/footer'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyUsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
