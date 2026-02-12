import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-black/40 text-center border-t border-white/5">
      <div className="flex justify-center space-x-8 mb-6 md:hidden">
        <a href="https://github.com/hiagoCf19" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
          <Github size={20} />
        </a>
        <a href="https://www.linkedin.com/in/dev-hiago79216/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
          <Linkedin size={20} />
        </a>
        <a href="mailto:hiagodeveloperfr@gmail.com" className="text-slate-400 hover:text-white transition-colors">
          <Mail size={20} />
        </a>
      </div>

      <div className="font-mono text-xs text-slate-500 hover:text-accent-cyan transition-colors duration-300 cursor-pointer mb-2">
        <p>Desenvolvido por Hiago Ferreira</p>
      </div>

      <div className="text-slate-600 text-xs">
        &copy; {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;