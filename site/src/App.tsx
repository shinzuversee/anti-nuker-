import { MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Verse from './components/Verse'
import Mission from './components/Mission'
import Programs from './components/Programs'
import Method from './components/Method'
import Reminders from './components/Reminders'
import Quote from './components/Quote'
import Faq from './components/Faq'
import FinalCta from './components/FinalCta'
import Footer from './components/Footer'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Navbar />
      <main>
        <Hero />
        <Verse />
        <Mission />
        <Programs />
        <Method />
        <Reminders />
        <Quote />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </MotionConfig>
  )
}
