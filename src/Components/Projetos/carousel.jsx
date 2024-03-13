import temaCtx from "@/Context/context";
import CurriculoIcon from "@/CurriuloIcon";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { trabalhos } from "@/mocks/projetos";
import { GradientDark } from "@/style/darkTheme";
import { Gradientlig } from "@/style/lightTheme";
import Autoplay from "embla-carousel-autoplay";
import { useContext } from "react";

export const CarouselCpn = () => {
  const { themeState } = useContext(temaCtx);

  const projetos = trabalhos;
  return (
    <div className="w-full flex justify-center items-center overflow-auto ">
      <div
        className={`w-[70%]  p-10 px-16  border border-solid shadow-lg  rounded-xl mx-2 overflow-hidden hidden sm:block mb-20 ${
          themeState === false
            ? " border-primaryDark shadow-primaryDark"
            : "border-secondaryLig  shadow-secondaryLig"
        }`}
      >
        <Carousel
          plugins={[
            Autoplay({
              delay: 7000,
            }),
          ]}
        >
          <CarouselContent>
            {projetos.map((projeto, i) => (
              <CarouselItem key={i} className={" "}>
                <div className=" flex  gap-4 w-full items-center">
                  <img
                    src={projeto.foto}
                    className=" flex justify-center items-center w-full h-[300px] mt-12  p-4   rounded-[20px]"
                  />
                  <div className="flex w-full flex-col gap-10 py-5">
                    <h2 className="text-center font-semibold text-[24px]">
                      {projeto.nome}
                    </h2>
                    <div className="flex gap-5 justify-center items-center">
                      <div
                        className={` w-4 h-[80%] hidden sm:block ${
                          themeState === false ? GradientDark : Gradientlig
                        } `}
                      ></div>
                      <div className="flex flex-col px-2">
                        <p className=" text-justify  leading-normal px-2 mb-6 w-[90%]">
                          {projeto.descricao}
                        </p>
                        <a href={projeto.link} target="_blank" rel="noreferrer">
                          <CurriculoIcon content={"VER PROJETO"} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};
