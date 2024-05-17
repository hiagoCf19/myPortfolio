import Titulo from "../Titulo";
import Typing from "react-typing-effect";
import Qualificacao from "./Qualificacao";

import { Element } from "react-scroll";

const SobreMim = () => {
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
            className={`font-bold text-[20px] text-transparent bg-clip-text `}
          >
            {/* textos */}
            <span className="font-bold text-[#000000]"> Eu sou </span>
            Desenvolvedor{" "}
            <Typing
              speed={100}
              typingDelay={500}
              text={["Front-end", " Back-end", "Full-Stack"]}
              eraseDelay={500}
              cursor="|"
            />
          </h3>

          <div className=" flex gap-4 sm:flex-row flex-col ">
            <div className={`sm:h-[320px] sm:w-8  w-full h-[4px]  `}></div>

            <p
              className="flex sm:leading-normal leading-snug text-justify text-[18px]
              text-[#ffffff]"
            >
              &nbsp; Atualmente estou cursando Análise e Desenvolvimento de
              Sistemas, também estou no fim da minha graduação em História pela
              Universidade Federal Fluminense. <br /> &nbsp; Minha paixão pela
              tecnologia me levou a explorar o vasto campo do desenvolvimento.
              Nos últimos tempos, tenho concentrado meus esforços no universo
              Java, utilizando Spring Boot. Estou sempre em busca de aprendizado
              e constantemente me atualizando para abraçar as novas tecnologias
              que moldarão o futuro do desenvolvimento.
            </p>
          </div>
        </div>
      </div>

      <Qualificacao />
      <a
        href="https://drive.google.com/file/d/1mwmktknXV-OFlQRUwgzPow2DXWvg-lbR/view?usp=sharing"
        className="mt-8 flex justify-center  sm:mr-16"
        target="_blank"
        rel="noreferrer"
      ></a>
    </Element>
  );
};
export default SobreMim;
