import { IconType } from "react-icons/lib";
import { DiFirebase, DiMysql } from "react-icons/di";
import { FaReact, FaCss3 } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiTailwindcss, SiStyledcomponents, SiSpringsecurity, SiAuth0, SiNextdotjs, SiPrisma, SiReact, SiFlyway } from "react-icons/si";
import { FaJava, FaHtml5 } from "react-icons/fa6";
import { BiLogoSpringBoot, BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";

interface Projeto {
  nome: string;
  subtitle: string;
  stack: string;
  foto: string;
  descricao: string;
  link: string;
  tecs: IconType[];
}
export const projetos: Projeto[] = [
  {
    nome: "NextFood",
    subtitle: "Plataforma de restaurantes",
    stack: "Full-stack",
    foto: "/publicimgs/next-food-home.png",
    descricao:
      "NextFood é uma plataforma que disponibiliza uma variedade de restaurantes que trabalham com diferentes categorias de alimentos para pronta entrega, a plataforma permite que o usuario se cadastre realizando autenticação com o google e gerencie seus pedidos.",
    link: "https://next-food-hiago-dev.vercel.app/",
    tecs: [SiNextdotjs, SiReact, BiLogoTypescript, SiTailwindcss, BiLogoPostgresql, SiPrisma]
  },
  {
    nome: "DashB",
    subtitle: "Gerenciamento de estoque.",
    stack: "Full-stack",
    foto: "/publicimgs/dash-home.png",
    descricao:
      "Esta aplicação foi desenvolvida para funcionar como uma extensão de outros sistemas, permitindo um controle abrangente do estoque de produtos. Com ela, é possível visualizar detalhes dos produtos, editar informações, excluir itens e registrar novos produtos de forma eficiente.",
    link: "https://dashboardcontrol-hiagocf19s-projects.vercel.app/",
    tecs: [BiLogoSpringBoot, SiNextdotjs, SiReact, BiLogoTypescript, FaJava, SiTailwindcss, BiLogoPostgresql, SiFlyway,]
  },
  {
    nome: "TsStore",
    subtitle: "E-commerce de roupas e utilitários",
    stack: "Full-stack",
    foto: "/publicimgs/tsStore-login.png",
    descricao:
      "TsStore é uma aplicação de E-commerce completo construída utilizando TypeScript e React. Esta aplicação oferece um sistema robusto de login, um banco de dados para armazenar os dados do usuário e funcionalidades essenciais para uma experiência de compra completa.",
    link: "https://ts-store-sigma.vercel.app/",
    tecs: [FaReact, BiLogoTypescript, SiTailwindcss, DiFirebase, SiStyledcomponents]
  },

  {
    nome: "Spotify",
    subtitle: "Clone funcional do Spotify",
    stack: "Front-end",
    foto: "/publicimgs/miniSpotify.png",
    descricao:
      "O projeto visa desenvolver um clone do Spotify com uma abordagem que vai além da interface. Foi buscado implementar uma série de funcionalidades presentes no Spotify, incluindo sistema de curtidas de músicas, busca por nome, álbum, playlist e gênero, reprodutor dinâmico, perfis de artistas, entre outras.",
    link: "https://spotify-clone-psi-gray.vercel.app/",
    tecs: [FaReact, BiLogoTypescript, SiTailwindcss]
  },
  {
    nome: "Pass-in",
    subtitle: "Gestão de eventos presenciais.",
    stack: "Back-end",
    foto: "/publicimgs/passIn01.png",
    descricao: "O pass.in é uma aplicação de gestão de participantes em eventos presenciais. A ferramenta permite que o organizador cadastre e gerencie um evento abrindo uma página pública de inscrição. Os participantes inscritos podem emitir uma credencial para check-in no dia do evento. O sistema fará um scan da credencial do participante para permitir a entrada no evento.",
    link: "https://github.com/hiagoCf19/pass-in",
    tecs: [FaJava, BiLogoSpringBoot, DiMysql, SiFlyway]
  },
  {
    nome: "Hia-med",
    subtitle: "Gerenciamento de clínica médica",
    stack: "Back-end",
    foto: "/publicimgs/hia.med01.png",
    descricao: "A Hia-Med é uma aplicação robusta para a gestão de clínicas médicas, projetada para otimizar o gerenciamento de operações diárias. Com a Hia-Med, administradores autenticados podem cadastrar, excluir e atualizar perfis de médicos e pacientes na base de dados da clínica. Agendar e gerenciar consultas dentro do horário de funcionamento da clínica, garantindo uma organização eficiente e prática.Esta aplicação foi desenvolvida para proporcionar uma experiência intuitiva e simplificada para administradores, permitindo um controle total sobre as atividades essenciais da clínica.",
    link: "https://github.com/hiagoCf19/hiamed_api",
    tecs: [FaJava, BiLogoSpringBoot, DiMysql, SiSpringsecurity, SiAuth0, SiFlyway]
  },
  {
    nome: "Notes",
    subtitle: "Gravador de notas de áudio",
    stack: "Front-end",
    foto: "/publicimgs/miniNotas.png",
    descricao:
      "O objetivo principal do projeto é criar um gravador de notas com a capacidade de gravar notas por áudio. Ao longo do desenvolvimento desta aplicação de interface simples, pude aprimorar minhas habilidades no tratamento de acessibilidade.",
    link: "https://gravador-de-notas.vercel.app/",
    tecs: [FaReact, BiLogoTypescript, SiTailwindcss]
  },
  {
    nome: "HRest",
    subtitle: "Sistema de gerenciamento de restaurante",
    stack: "Front-end",
    foto: "/publicimgs/printP1.png",
    descricao:
      " Esse projeto visa simplificar o processo de pedidos em restaurantes, oferecendo aos clientes a opção de fazer pedidos online, eliminando a necessidade de ligar para o atendimento telefônico e permitindo que os pedidos sejam enviados diretamente para o WhatsApp da empresa.",
    link: "https://h-rest-react.vercel.app/",
    tecs: [FaReact, RiJavascriptFill, SiTailwindcss]
  },
  {
    nome: "Bleach Seasons",
    subtitle: "Guia da série Bleach",
    stack: "Front-end",
    foto: "/publicimgs/guia-bleach.png",
    descricao:
      " Esse projeto foi desenvolvido durante um evento de programação da Rocketseat, utilizando apenas HTML e CSS, ele tem o objetivo de servir como uma referencia para novos fãs da série Bleach. O projeto visa trazer um breve resumo da história das temporadas da série animada.",
    link: "https://bleach-guia.vercel.app/",
    tecs: [FaHtml5, FaCss3],
  },
];
