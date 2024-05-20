
import Qualificacao from "./Qualificacao";

import { Element } from "react-scroll";
import Title from "../Titulo";
import ReactTypingEffect from "react-typing-effect";

const SobreMim = () => {
  return (
    <Element
      className="mx-4 sm:mx-0 flex flex-col justify-center "
      name="sobre-mim"
    >
      <Title title="Sobre mim" subTitle="Quem eu sou" />
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
        <div className=" flex flex-col">
          {/* BORDA GRADIENTE */}
          <h3
            className="text-base"
          >
            Atuo como desenvolvedor {" "}
            {/* textos */}
            <ReactTypingEffect
              text={["Front-end", "Back-end", "Full-stack", "Freelancer"]}

              speed={100}
              eraseDelay={1000}
              className=' text-primary'
            />
            {" "}
          </h3>

          <div className=" flex gap-4 sm:flex-row flex-col ">
            <div className={`sm:h-[320px] sm:w-8  w-full h-[4px]  `}></div>

            <p
              className=" text-muted-foreground text-justify"
            >
              Estou atualmente cursando Desenvolvimento de Sistemas. Minha paixão pela tecnologia me levou a explorar o vasto campo do desenvolvimento de software. Após alguns anos estudando a interatividade com o usuário, venho expandindo meus estudos e projetos para englobar o universo Java, especialmente utilizando o framework Spring Boot.<br /> Isso tem impulsionado minha evolução constante no caminho fullstack. Sou dedicado ao aprendizado contínuo e estou sempre me atualizando para acompanhar as novas tecnologias que moldam o futuro do desenvolvimento.
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
