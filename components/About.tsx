import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Image Side */}
          <div className="order-2 md:order-1 flex justify-center md:justify-end animate-fade-up">
            <div className="relative w-72 h-80 sm:w-80 sm:h-96 group">
              {/* Glowing Background */}
              <div className="absolute -inset-4 bg-gradient-to-r from-accent-cyan to-accent-purple opacity-20 blur-xl rounded-full group-hover:opacity-40 transition-opacity duration-500"></div>

              {/* Image Card */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-bg-secondary rotate-3 group-hover:rotate-0 transition-transform duration-500">
                <div className="absolute inset-0 bg-accent-purple/20 mix-blend-overlay z-10"></div>
                <img
                  src="eu2.jpeg"
                  alt="Hiago Ferreira"
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-bg-secondary border border-white/10 rounded-xl p-4 flex flex-col justify-center items-center shadow-xl z-20 animate-float">
                <span className="text-3xl font-bold text-white">4+</span>
                <span className="text-[10px] uppercase tracking-wider text-slate-400">Projetos relevantes</span>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="order-1 md:order-2 animate-fade-up delay-100">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-12 h-[1px] bg-accent-purple"></span>
              <span className="text-accent-purple font-mono text-sm uppercase tracking-widest">Quem sou eu</span>
            </div>

            <h2 className="text-4xl font-display font-bold text-white mb-6">
              Backend, Frontend & <br />
              <span className="text-slate-500">Mobile em escala.</span>
            </h2>

            <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
              <p>
                Atualmente atuo como Desenvolvedor Full-stack na <strong>IVY Group</strong>, participando do desenvolvimento e evolução de sistemas críticos para diversificados clientes.
              </p>
              <p>
                Atuo de ponta a ponta no desenvolvimento, desde a concepção da solução até a entrega em produção. Tenho facilidade em transitar entre diferentes tecnologias e contextos, sempre com foco em resolver problemas reais e gerar valor consistente para o cliente.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Microsserviços", "Modernização de Legado", "Mobile Offline-First", "High Performance"].map(tag => (
                <span key={tag} className="px-4 py-2 rounded-full border border-white/10 text-sm text-slate-300 hover:border-accent-cyan/50 hover:text-white transition-colors cursor-default">
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;