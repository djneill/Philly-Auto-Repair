import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { Garage } from './components/sections/Garage';
import { Reviews } from './components/sections/Reviews';
import { CarScene } from './components/sections/CarScene';
import { Socials } from './components/sections/Socials';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <div className="bg-background min-h-screen text-text-main font-sans selection:bg-primary/30 selection:text-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Garage />
        <Reviews />
        <CarScene />
        <Socials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
