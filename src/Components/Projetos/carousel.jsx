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
import Autoplay from "embla-carousel-autoplay";
import { useContext } from "react";

export const CarouselCpn = () => {
  const { themeState } = useContext(temaCtx);

  const projetos = trabalhos;
  return (
    <div className="sm:w-full flex justify-center items-center sm:overflow-auto overflow-hidden ">
      <div
        className={`sm:w-[60%] w-[95%] sm:p-10 sm:px-16  border border-solid shadow-lg  rounded-xl mx-2 overflow-hidden hidden sm:block mb-20 ${
          themeState === false
            ? "border-[#4a00e0]  shadow-[#4a00e0]"
            : "border-[#FFFFFF]  shadow-[#000000]"
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
                <div className=" h-full flex flex-col sm:flex-row gap-4 w-full">
                  <img
                    src={projeto.foto}
                    alt=""
                    className=" flex justify-center items-center sm:w-[50%] p-4 w-[92%] sm:h-[400px] h-[300px] rounded-[8px]"
                  />
                  <div className="flex w-full flex-col gap-10 py-5">
                    <h2 className="text-center font-semibold text-[20px] sm:text-[24px]">
                      {projeto.nome}
                    </h2>
                    <div className="flex gap-5 justify-center items-center">
                      <div
                        className={` w-4 h-[80%] hidden sm:block ${
                          themeState === false
                            ? "bg-gradient-to-t from-[#8e2de2] to-[#4a00e0]"
                            : "bg-gradient-to-t from-[#000000] to-[#6c7161]"
                        } `}
                      ></div>
                      <div className="flex flex-col px-2">
                        <p className="text-[18px] text-justify leading-normal sm:leading-8 px-2 mb-4 sm:mb-6 w-[90%]">
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
