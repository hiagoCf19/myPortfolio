import React from 'react';
import { Database, Layout, Server, Settings, Terminal, Smartphone, Layers, Shield } from 'lucide-react';

const Skills: React.FC = () => {
  const skills = [
    {
      name: "Backend",
      icon: <Server />,
      tech: "Java (Spring, Servlet), Node.js (NestJS/Fastify), PHP (Vanilla,Laravel,CodeIgniter), RabbitMQ, etc."
    },
    {
      name: "Frontend",
      icon: <Layout />,
      tech: "React, Next.js, Vue.js, Tailwind, Micro-frontends, BFF, etc."
    },
    {
      name: "Mobile",
      icon: <Smartphone />,
      tech: "React Native, Offline-first, Performance Optimization, etc."
    },
    {
      name: "Database",
      icon: <Database />,
      tech: "PostgreSQL, MongoDB, SQL Optimization, Migrations, etc."
    },
    {
      name: "DevOps & QA",
      icon: <Terminal />,
      tech: "Docker, CI/CD, SonarQube, Playwright, TDD"
    },
    {
      name: "Security",
      icon: <Shield />,
      tech: "Keycloak, OAuth2, JWT, AuthZ/AuthN"
    }
  ];

  return (
    <section id="skills" className="py-24 bg-black/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="animate-fade-up">
            <h2 className="text-4xl font-display font-bold text-white mb-6">
              Conhecimento Técnico <span className="text-accent-cyan">Aplicado</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Tenho facilidade em transitar entre diferentes camadas da aplicação, escolhendo a melhor abordagem técnica para cada desafio, sempre com foco em resolver o problema de forma clara e sustentável.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {['Spring Boot', 'NestJS', 'React Native', 'RabbitMQ', 'PostgreSQL', 'Laravel'].map(item => (
                <div key={item} className="flex items-center gap-2 text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-purple"></div>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-xl hover:bg-white/5 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-accent-cyan mb-4 group-hover:scale-110 group-hover:bg-accent-cyan/10 transition-all">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{skill.name}</h3>
                <p className="text-sm text-slate-400 font-mono leading-relaxed">
                  {skill.tech}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;