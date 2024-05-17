import { FaReact, FaGitAlt, FaGithub } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { SiTailwindcss, SiStyledcomponents } from "react-icons/si";

import { FaJava } from "react-icons/fa6";
import { BiLogoSpringBoot } from "react-icons/bi";
import { PiFileSql } from "react-icons/pi";

const Icones = () => {
  const cards = [
    {
      nome: "JAVASCRIPT",
      icon: RiJavascriptFill,
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
      nome: "TYPESCRIPT",
      icon: BiLogoTypescript,
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
      nome: "Git",
      icon: FaGitAlt,
    },
    {
      nome: "GitHub",
      icon: FaGithub,
    },
    {
      nome: "SQL",
      icon: PiFileSql,
    },
  ];
  return (
    <div className="flex justify-center ">
      <div
        className={` sm:ml-8 ml-3  flex sm:gap-10 gap-8 sm:justify-normal  flex-wrap justify-center`}
      >
        {cards.map((hab, i) => (
          <div
            key={i}
            className="sm:h-[125px] sm:w-[125px] w-[125px] h-[115px] text-center flex flex-col font-bold shadow-lg  border border-solid rounded
             CardDark "
          >
            <p className=" flex  justify-center sm:m-4 m-3 text-[18px]">
              {hab.nome}{" "}
            </p>
            <div className="flex justify-center">
              <hab.icon size={50} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Icones;
