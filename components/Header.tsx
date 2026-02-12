import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre', href: '#about' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Experiência', href: '#experience' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-white/5 ${scrolled ? 'bg-bg/80 backdrop-blur-xl py-3' : 'bg-transparent py-5 border-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-accent-purple to-accent-cyan rounded-lg opacity-20 group-hover:opacity-40 blur transition duration-200"></div>
            <div className="relative text-xl font-display font-bold text-white tracking-wider">
              HF<span className="text-accent-cyan">.</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-cyan transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}

            <a
              href="/resume.pdf"
              className="ml-4 px-5 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-medium text-white transition-all hover:scale-105 hover:border-accent-purple/50"
            >
              Currículo
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-300 hover:text-white transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-bg/95 backdrop-blur-xl transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        style={{ top: '0' }}
      >
        <div className="flex flex-col h-full justify-center items-center space-y-8 p-8 relative">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-slate-300"
          >
            <X size={32} />
          </button>

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-display font-medium text-slate-300 hover:text-white hover:text-gradient transition-colors"
            >
              {link.name}
            </a>
          ))}

          <a
            href="https://drive.google.com/file/d/1tLHO_oroBSk2rNhCpnogOTIvwxXUE3RF/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 px-8 py-3 rounded-full bg-gradient-to-r from-accent-purple to-accent-cyan text-white font-bold shadow-lg shadow-accent-purple/20"
          >
            Currículo
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;