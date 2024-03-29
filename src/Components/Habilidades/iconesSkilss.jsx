import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt, FaReact, FaGitAlt, FaGithub } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { SiTailwindcss, SiStyledcomponents } from "react-icons/si";
import temaCtx from "../../Context/context";
import { useContext } from "react";

import { CardLig, SecondaryLig } from "@/style/lightTheme";
import { CardDark, PrimaryDark } from "@/style/darkTheme";
const Icones = () => {
  const { themeState } = useContext(temaCtx);

  const cards = [
    {
      nome: "HTML 5",
      icon: AiFillHtml5,
    },
    {
      nome: "CSS 3",
      icon: FaCss3Alt,
    },
    {
      nome: "JAVASCRIPT",
      icon: RiJavascriptFill,
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
  ];
  return (
    <div className="flex justify-center ">
      <div
        className={` sm:ml-8 ml-3  flex sm:gap-10 gap-8 sm:justify-normal  flex-wrap justify-center`}
      >
        {cards.map((hab, i) => (
          <div
            key={i}
            className={`sm:h-[125px] sm:w-[125px] w-[125px] h-[115px] text-center flex flex-col font-bold shadow-lg  border border-solid rounded ${
              themeState === false ? CardDark : CardLig
            } `}
          >
            <p className=" flex  justify-center sm:m-4 m-3 text-[18px]">
              {hab.nome}{" "}
            </p>
            <div className="flex justify-center">
              <hab.icon
                size={50}
                color={`${themeState === false ? PrimaryDark : SecondaryLig}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Icones;
