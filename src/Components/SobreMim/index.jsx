import Titulo from "../Titulo";
import Typing from "react-typing-effect";
import CurriculoIcon from "../../CurriuloIcon";
import Qualificacao from "./Qualificacao";
import temaCtx from "../../Context/context";
import { useContext } from "react";
import { Gradientlig } from "@/style/lightTheme";
import { GradientDark } from "@/style/darkTheme";
import { Element } from "react-scroll";

const SobreMim = () => {
  const { themeState } = useContext(temaCtx);
  return (
    <Element
      className="mx-4 sm:mx-0 flex flex-col justify-center "
      name="sobre-mim"
    >
      <div>
        <Titulo title={"Sobre mim"} subTitle={"Quem eu sou ?"} />
      </div>
      <div className="flex sm:justify-center gap-8  items-center sm:px-8">
        {/* MINHA FOTO */}
        <div className=" items-center justify-center hidden sm:block mt-12">
          <div className="flex items-center justify-center">
            <img
              src="/publicimgs/eu2.jpeg"
              alt="minha foto"
              className="h-[320px] w-[280px] rounded-lg"
            />
          </div>
        </div>
        {/* CONTAINER DO TEXTO SOBRE MIM */}
        <div className="w-[500px] flex flex-col gap-8">
          {/* BORDA GRADIENTE */}
          <h3
            className={` font-bold text-[20px] ${
              themeState === false
                ? `text-transparent bg-clip-text ${GradientDark} `
                : `text-transparent bg-clip-text ${Gradientlig} `
            }`}
          >
            {/* textos */}
            <span
              className={`font-bold ${
                themeState === false ? "text-[#ffffff]" : "text-[#000000]"
              }`}
            >
              {" "}
              Eu sou{" "}
            </span>
            <Typing
              speed={100}
              typingDelay={500}
              text={[" Desenvolvedor Front-end", "Freelancer"]}
              eraseDelay={500}
              cursor="|"
            />
          </h3>

          <div className=" flex gap-4 sm:flex-row flex-col ">
            <div
              className={`sm:h-[320px] sm:w-8 ${
                themeState === false ? GradientDark : Gradientlig
              }  w-full h-[4px]`}
            ></div>

            <p
              className={`flex sm:leading-normal leading-snug text-justify text-[18px] ${
                themeState === false ? "text-[#ffffff]" : "text-[#000000]"
              }`}
            >
              &nbsp; Atualmente estou cursando Análise e Desenvolvimento de
              Sistemas, também estou no fim da minha graduação em História pela
              Universidade Federal Fluminense. <br /> &nbsp; Minha paixão pela
              tecnologia me levou a explorar o vasto campo do desenvolvimento
              web, e nos últimos tempos, tenho concentrado meus esforços no
              universo do React, uma biblioteca JavaScript que me encanta com
              sua versatilidade e capacidade de criar experiências interativas
              incríveis. Estou sempre em busca de aprendizado e constantemente
              me atualizando para abraçar as novas tecnologias que moldarão o
              futuro do desenvolvimento web.
            </p>
          </div>
        </div>
      </div>

      <Qualificacao />
      <a
        href="https://drive.google.com/file/d/1z1yE76W2oDQxJxU5mOs_3lKrAgjOgV8l/view?usp=drive_link"
        className="mt-8 flex justify-center  sm:mr-16"
        target="_blank"
        rel="noreferrer"
      >
        <CurriculoIcon content={"CURRÍCULO"} />
      </a>
    </Element>
  );
};
export default SobreMim;
