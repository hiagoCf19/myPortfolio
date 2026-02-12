import React from 'react';
import { Experience as ExperienceType } from '../types';

const Experience: React.FC = () => {
  const experiences: ExperienceType[] = [
    {
      id: 1,
      role: "Desenvolvedor Full-stack",
      company: "IVY Group",
      period: "2024 - Atual",
      description: [
        "Atuação em projetos estratégicos para clientes de grande porte, modernizando soluções de alta complexidade.",
        "Modernização de sistema legado de Seguradora (Struts 1 para Spring Boot Microservices), implementando sistema de alçadas em tempo real com RabbitMQ e WebSockets.",
        "Desenvolvimento de App Mobile Offline-first para o Agronegócio, com pipeline de dados e sincronização local robusta.",
        "Implementação de plataforma de Recuperação de Crédito multi-tenant em Laravel, processando grandes lotes via filas assíncronas.",
        "Arquitetura de App de Social Trade Marketing em React Native, otimizado para alta performance com cache e infinite scroll."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24">
      <div className="max-w-4xl mx-auto px-6 sm:px-10">
        <h2 className="text-3xl font-display font-bold text-white mb-12 text-center">
          Jornada Profissional
        </h2>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">

              {/* Icon/Dot on timeline */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-bg shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-hover:border-accent-purple transition-colors">
                <div className="w-3 h-3 bg-accent-purple rounded-full"></div>
              </div>

              {/* Content Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 rounded-xl border border-white/5 hover:border-accent-purple/30 transition-all">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2">
                  <h3 className="font-bold text-white text-lg">{exp.role}</h3>
                  <span className="text-xs font-mono text-accent-cyan bg-accent-cyan/10 px-2 py-1 rounded">{exp.period}</span>
                </div>
                <div className="text-accent-purple font-medium mb-4 text-sm">@ {exp.company}</div>
                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-sm text-slate-400 flex items-start">
                      <span className="mr-2 text-accent-purple shrink-0">›</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;