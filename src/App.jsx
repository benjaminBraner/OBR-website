import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Values from './components/Values';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Calendly from './components/Calendly';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const [showWsp, setShowWsp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowWsp(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Projects />
        <Values />
        {/* <Calendly /> */}
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton isVisible={showWsp} />
    </>
  );
}

export default App;
