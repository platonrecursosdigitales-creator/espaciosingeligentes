import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import ServicesSection from './components/sections/ServicesSection'
import AboutSection from './components/sections/AboutSection'
import ContactSection from './components/sections/ContactSection'
import Footer from './components/layout/Footer'
import FloatingWhatsAppButton from './components/ui/FloatingWhatsAppButton'

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans relative">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  )
}

export default App
