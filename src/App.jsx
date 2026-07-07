import { useState, useEffect } from 'react';
import useMousePosition from './hooks/useMousePosition';

// Background
import AuroraBackground from './components/background/AuroraBackground';
import ParticleField from './components/background/ParticleField';
import NoiseOverlay from './components/background/NoiseOverlay';
import GridOverlay from './components/background/GridOverlay';
import MouseSpotlight from './components/background/MouseSpotlight';

// Layout
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Sections
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

export default function App() {
  const mousePosition = useMousePosition();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Brief delay for initial load animation
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#020617]">
      {/* ── Background System ──────────────────────── */}
      <AuroraBackground />
      <ParticleField mousePosition={mousePosition} />
      <GridOverlay />
      <NoiseOverlay />
      <MouseSpotlight mousePosition={mousePosition} />

      {/* ── Content ────────────────────────────────── */}
      <div
        className="relative z-10 transition-opacity duration-700"
        style={{ opacity: loaded ? 1 : 0 }}
      >
        <Navbar />

        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}
