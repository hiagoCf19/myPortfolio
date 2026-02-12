import React from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 text-center relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-3xl mx-auto px-6 sm:px-10 relative z-10">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
          Vamos construir algo <br />
          <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-accent-cyan to-accent-purple">incrível juntos?</span>
        </h2>

        <p className="text-slate-400 text-lg mb-10 leading-relaxed max-w-xl mx-auto">
          Estou disponível para novos desafios em desenvolvimento Fullstack. Entre em contato para discutirmos como posso agregar valor ao seu projeto.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="mailto:hiagodeveloperfr@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-bg font-bold text-lg hover:scale-105 transition-transform shadow-lg shadow-white/10"
          >
            <Mail size={20} />
            hiagodeveloperfr@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/dev-hiago79216/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold text-lg hover:bg-white/10 transition-colors"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;