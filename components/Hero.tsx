import React from 'react';
import { ArrowRight, Github, Linkedin, FileText } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">

      {/* Background Blobs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-accent-purple/20 rounded-full blur-[100px] animate-blob mix-blend-screen"></div>
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent-cyan/20 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-screen"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 w-full relative z-10 text-center flex flex-col items-center">

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 animate-fade-up">
          <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse"></span>
          <span className="text-sm text-slate-300 tracking-wide">Disponível para novos projetos</span>
        </div>

        <h1 className="text-5xl md:text-8xl font-display font-bold tracking-tight mb-6 animate-fade-up delay-100">
          <span className="block text-white mb-2">Hiago Ferreira</span>
          <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-accent-cyan via-primary to-accent-purple">
            Fullstack Developer
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-3xl mb-10 leading-relaxed animate-fade-up delay-200">
          Desenvolvedor orientado a solução, com forte capacidade analítica e foco em gerar impacto real para o cliente <span className="text-white">meu diferencial está em entender o problema e construir a melhor solução técnica para cada contexto</span>.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-300 items-center">
          <a
            href="#projects"
            className="group relative px-8 py-4 rounded-full bg-white text-bg-secondary font-bold text-lg hover:scale-105 transition-transform duration-200 overflow-hidden min-w-[180px]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan to-accent-purple opacity-0 group-hover:opacity-10 transition-opacity"></div>
            <span className="relative flex items-center justify-center gap-2">
              Ver Projetos <ArrowRight size={20} />
            </span>
          </a>

          <div className="flex gap-4">
            <a
              href="https://github.com/hiagoCf19"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-accent-purple/50 transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/dev-hiago79216/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-accent-cyan/50 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://drive.google.com/file/d/1tLHO_oroBSk2rNhCpnogOTIvwxXUE3RF/view?usp=sharing"
              className="p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-primary/50 transition-colors"
              aria-label="Currículo"

              target="_blank"
              rel="noopener noreferrer"
            >
              <FileText size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;