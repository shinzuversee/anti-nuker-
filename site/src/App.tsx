import { MotionConfig } from 'framer-motion'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Verse from './components/Verse'
import Stats from './components/Stats'
import Mission from './components/Mission'
import Alphabet from './components/Alphabet'
import Programs from './components/Programs'
import Method from './components/Method'
import Reminders from './components/Reminders'
import LightVerse from './components/LightVerse'
import Faq from './components/Faq'
import FinalCta from './components/FinalCta'
import Footer from './components/Footer'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Verse />
        <Stats />
        <Mission />
        <Alphabet />
        <Programs />
        <Method />
        <Reminders />
        <LightVerse />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </MotionConfig>
  )
}
