import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Clients from '../components/Clients'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div className="min-h-screen" dir="rtl">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Clients />
      <Contact />
      <Footer />
    </div>
  )
}


