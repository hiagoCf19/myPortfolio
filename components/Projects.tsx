import React, { useState } from 'react';
import { Github, ExternalLink, ArrowDown } from 'lucide-react';
import { Project } from '../types';

const Projects: React.FC = () => {
  const [visibleProjects, setVisibleProjects] = useState(6);

  const projects: Project[] = [
    {
      id: 14,
      title: "System cl",
      category: "Fullstack",
      description: "Um ERP focado em administração de repuublicas estudantis, com controle de vagas, anuncios, visualização de moradores e controle financeiro.",
      technologies: ["Java", "Spring Boot", "React", "TypeScript", "Tailwind", "PostgreSQL", "Flyway"],
      imageUrl: "Cl.png",
      liveUrl: "https://bleach-guia.vercel.app/",
      featured: false
    },
    {
      id: 1,
      title: "Fullcar",
      category: "Full-stack",
      description: "Marketplace de veículos com integração FIPE. Solução completa para criação e gerenciamento de anúncios de automóveis com busca automática de dados.",
      technologies: ["Next.js", "TypeScript", "Tailwind", "Java", "Spring Boot", "AWS", "PostgreSQL"],
      imageUrl: "fullcar.png",
      featured: true
    },
    {
      id: 2,
      title: "NextFood",
      category: "Full-stack",
      description: "Plataforma de delivery que permite cadastro de usuários via Google, listagem de restaurantes por categorias e gerenciamento completo de pedidos.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind", "PostgreSQL", "Prisma"],
      imageUrl: "next-food-home.png",
      featured: true
    },
    {
      id: 3,
      title: "Sync Transactions AI",
      category: "Backend",
      description: "Microsserviço inteligente para gestão financeira. Automatiza lançamentos a partir de extratos e usa IA para classificar transações bancárias automaticamente.",
      technologies: ["Java", "Spring Boot", "OpenAI", "PostgreSQL", "Flyway"],
      imageUrl: "ms-transactions.jpeg",
      liveUrl: "https://next-food-hiago-dev.vercel.app/", // Keeping provided link
      featured: true
    },
    {
      id: 4,
      title: "DashB",
      category: "Full-stack",
      description: "Sistema de gerenciamento de estoque extensível. Permite visualização, edição e controle abrangente de produtos para integração com outros sistemas.",
      technologies: ["Spring Boot", "Next.js", "React", "TypeScript", "Java", "Tailwind", "PostgreSQL"],
      imageUrl: "dash-home.png",
      liveUrl: "https://dashboardcontrol-hiagocf19s-projects.vercel.app/",
      featured: true
    },
    {
      id: 5,
      title: "Finance.ai",
      category: "Full-stack",
      description: "Wallet inteligente com insights via OpenAI. Controle de despesas com gráficos interativos e recomendações financeiras personalizadas.",
      technologies: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL", "Prisma", "OpenAI"],
      imageUrl: "finance.png",
      liveUrl: "https://finance-ai-three.vercel.app/",
      featured: true
    },
    {
      id: 6,
      title: "TsStore",
      category: "Full-stack",
      description: "E-commerce completo de roupas e utilitários. Sistema robusto de login, carrinho de compras e gestão de usuários.",
      technologies: ["React", "TypeScript", "Tailwind", "Firebase", "Styled Components"],
      imageUrl: "tsStore-login.png",
      liveUrl: "https://ts-store-sigma.vercel.app/",
      featured: false
    },
    {
      id: 7,
      title: "Mamãe Instruída",
      category: "Mobile Web",
      description: "Blog assistencial para mães de primeira viagem. Desenvolvido em parceria universitária para fornecer dicas de saúde e primeiros socorros.",
      technologies: ["Next.js", "TypeScript", "Tailwind"],
      imageUrl: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&q=80&w=800",
      liveUrl: "https://www.xn--mameinstruida-yeb.com.br/",
      featured: false
    },
    {
      id: 8,
      title: "Spotify Clone",
      category: "Front-end",
      description: "Clone funcional do Spotify. Sistema de reprodução, busca avançada (artista, álbum, gênero), curtidas e perfis dinâmicos.",
      technologies: ["React", "TypeScript", "Tailwind"],
      imageUrl: "miniSpotify.png",
      liveUrl: "https://spotify-clone-psi-gray.vercel.app/",
      featured: false
    },
    {
      id: 9,
      title: "Best Burger",
      category: "Front-end",
      description: "Sistema de cardápio digital para restaurantes. Envia pedidos formatados diretamente para o WhatsApp do estabelecimento.",
      technologies: ["React", "TypeScript", "Tailwind"],
      imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800",
      liveUrl: "https://h-rest-react.vercel.app/",
      featured: false
    },
    {
      id: 10,
      title: "Dev.Food",
      category: "Mobile",
      description: "App de delivery estilo iFood desenvolvido em React Native. Foco em navegação fluida, animações e integração de dados dinâmicos.",
      technologies: ["React Native", "TypeScript", "Tailwind"],
      imageUrl: "devfood.jpeg",
      githubUrl: "https://github.com/hiagoCf19/mobile_food",
      featured: false
    },
    {
      id: 11,
      title: "Pass-in",
      category: "Back-end",
      description: "API de gestão de eventos presenciais. Cadastro de participantes, check-in e emissão de credenciais para controle de acesso.",
      technologies: ["Java", "Spring Boot", "MySQL", "Flyway"],
      imageUrl: "passIn01.png",
      githubUrl: "https://github.com/hiagoCf19/pass-in",
      featured: false
    },
    {
      id: 13,
      title: "Audio Notes",
      category: "Front-end",
      description: "Gravador de notas de áudio via web. Foco em manipulação de mídia no navegador e acessibilidade.",
      technologies: ["React", "TypeScript", "Tailwind"],
      imageUrl: "miniNotas.png",
      liveUrl: "https://gravador-de-notas.vercel.app/",
      featured: false
    },
    {
      id: 14,
      title: "Bleach Seasons Guide",
      category: "Front-end",
      description: "Guia interativo das temporadas de Bleach. Projeto focado em HTML/CSS puro e design responsivo.",
      technologies: ["HTML5", "CSS3"],
      imageUrl: "guia-bleach.png",
      liveUrl: "https://bleach-guia.vercel.app/",
      featured: false
    }
  ];

  const showMore = () => {
    setVisibleProjects(prev => Math.min(prev + 6, projects.length));
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Projetos <span className="text-accent-purple">Pessoais</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-lg">
            Uma seleção de aplicações públicas desenvolvidas para explorar novas tecnologias e resolver problemas do dia a dia.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <div
              key={project.id}
              className="group glass-card rounded-2xl overflow-hidden flex flex-col h-full animate-fade-up hover:border-accent-purple/50 transition-colors"
              style={{ animationDelay: `${(index % 3) * 150}ms` }}
            >
              {/* Image Area */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary to-transparent z-10 opacity-60"></div>
                <div className="absolute top-3 right-3 z-20">
                  <span className="px-2 py-1 text-[10px] uppercase font-bold tracking-wider bg-black/60 backdrop-blur text-white rounded border border-white/10">
                    {project.category}
                  </span>
                </div>
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                />
              </div>

              {/* Content Area */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-accent-cyan transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3 text-slate-400">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        className="hover:text-white transition-colors p-1.5 hover:bg-white/10 rounded-full"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Ver Código"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        className="hover:text-white transition-colors p-1.5 hover:bg-white/10 rounded-full"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Ver Projeto Online"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map(tech => (
                    <span key={tech} className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-accent-purple border border-white/5 group-hover:border-accent-purple/30 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleProjects < projects.length && (
          <div className="flex justify-center mt-12 animate-fade-up">
            <button
              onClick={showMore}
              className="group flex items-center gap-2 px-8 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-all hover:scale-105"
            >
              Ver Mais Projetos
              <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default Projects;