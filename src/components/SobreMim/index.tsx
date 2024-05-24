
import Qualificacao from "./Qualificacao";
import { GoPaperclip } from "react-icons/go";
import { Element } from "react-scroll";
import Title from "../Titulo";
import ReactTypingEffect from "react-typing-effect";
import { Button } from "../ui/button";

const SobreMim = () => {
  return (
    <Element
      className=" sm:mx-0 flex flex-col justify-center  lg:items-center  "
      name="sobre-mim"
    >
      <Title title="Sobre mim" subTitle="Quem eu sou" />
      <div className="flex lg:justify-center gap-8 lg:items-center lg:px-8">
        {/* MINHA FOTO */}
        <div className=" items-center justify-center hidden sm:block mt-12 sm:flex-1">
          <div className="flex items-center justify-end">
            <img
              src="/publicimgs/eu2.jpeg"
              alt="minha foto"
              className="hidden w-[400px] h-[400px] aspect-square sm:block  " />
          </div>
        </div>
        {/* CONTAINER DO TEXTO SOBRE MIM */}
        <div className=" flex flex-col sm:flex-1 lg:justify-end ">

          <h3
            className="text-base sm:text-xl font-medium"
          >
            <span className="">Atuo como desenvolvedor {" "}</span>
            {/* textos */}
            <ReactTypingEffect
              text={["Front-end.", "Back-end.", "Full-stack.", "Freelancer."]}

              speed={100}
              eraseDelay={1000}
              className=' text-primary'
            />
            {" "}
          </h3>

          <div className=" flex gap-4 sm:flex-row flex-col ">
            <div className="hidden sm:block h-[300px] w-2 bg-primary"></div>

            <div
              className=" text-muted-foreground sm:mt-3 flex flex-col gap-5 text-justify"
            >
              Estou atualmente cursando Desenvolvimento de Sistemas. Minha paixão pela tecnologia me levou a explorar o vasto campo do desenvolvimento de software. Após alguns anos estudando a interatividade com o usuário, venho expandindo meus estudos e projetos para englobar o universo Java, especialmente utilizando o framework Spring Boot.<br /> Isso tem impulsionado minha evolução constante no caminho fullstack. Sou dedicado ao aprendizado contínuo e estou sempre me atualizando para acompanhar as novas tecnologias que moldam o futuro do desenvolvimento.

              <div className="flex sm:block justify-center items-center w-full ">

                <Button type="button" variant={"outline"} size={"sm"} className="w-min flex items-center gap-4" asChild>
                  <a href="https://drive.google.com/file/d/1nIDpEnkABZGPW7QLY5j5FbqdG9aT3PVR/view?usp=sharing">
                    <GoPaperclip size={18} target="_blank" />
                    Ver currículo</a>

                </Button>

              </div>

            </div>

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
