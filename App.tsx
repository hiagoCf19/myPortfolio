import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <div className="bg-bg min-h-screen text-slate-300 font-sans relative overflow-x-hidden selection:bg-accent-purple/30 selection:text-white">
      
      {/* Static Tech Grid Background */}
      <div className="fixed inset-0 bg-grid z-0 opacity-20 pointer-events-none"></div>

      {/* Dynamic Glow Spotlight */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(800px at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.08), transparent 80%)`
        }}
      />
      
      {/* Top Gradient Mesh */}
      <div className="fixed top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-accent-purple/5 to-transparent z-0 pointer-events-none"></div>

      <Header />
      
      <main className="mx-auto w-full relative z-10 flex flex-col gap-12 md:gap-24">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;