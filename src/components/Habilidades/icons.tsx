import { FaReact, FaGitAlt, FaSass } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";

import { SiTailwindcss, SiStyledcomponents, SiNextdotjs, SiFlyway, SiPrisma } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { BiLogoSpringBoot, BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { PiGithubLogoFill } from "react-icons/pi";
import { DiMysql } from "react-icons/di";

const Icons = () => {
  const cards = [
    {
      nome: "JAVASCRIPT",
      icon: RiJavascriptFill,
    },
    {
      nome: "TYPESCRIPT",
      icon: BiLogoTypescript,
    },
    {
      nome: "JAVA",
      icon: FaJava,
    },
    {
      nome: "SPRING BOOT",
      icon: BiLogoSpringBoot,
    },
    {
      nome: "REACT",
      icon: FaReact,
    },
    {
      nome: "NEXT",
      icon: SiNextdotjs,
    },

    {
      nome: "TAILWIND",
      icon: SiTailwindcss,
    },
    {
      nome: "STYLED COMPONENTS",
      icon: SiStyledcomponents,
    },
    {
      nome: "SASS",
      icon: FaSass,
    },
    {
      nome: "Git",
      icon: FaGitAlt,
    },
    {
      nome: "GitHub",
      icon: PiGithubLogoFill,
    },
    {
      nome: "Postgresql",
      icon: BiLogoPostgresql,
    },
    {
      nome: "MYSQL",
      icon: DiMysql,
    },
    {
      nome: "PRISMA",
      icon: SiPrisma,
    },
    {
      nome: "FLYWAY",
      icon: SiFlyway
    }
  ];
  return (
    <div className="">
      <div
        className="grid grid-cols-2 lg:grid-cols-5"
      >
        {cards.map((hab, i) => (
          <div
            key={i}
            className="p-3 lg:p-5 m-1 lg:m-2 border border-primary rounded-lg"
          >
            <p className="text-center text-muted-foreground font-medium">
              {hab.nome}
            </p>
            <div className="flex justify-center">
              <hab.icon size={50} className="text-primary " />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Icons;
