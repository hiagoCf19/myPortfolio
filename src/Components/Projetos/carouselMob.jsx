import temaCtx from "@/Context/context";
import { trabalhos } from "@/mocks/projetos";
import { useContext } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CurriculoIcon from "@/CurriuloIcon";

export const CarouselMobile = () => {
  const { themeState } = useContext(temaCtx);
  const projetos = trabalhos;
  return (
    <div
      className={` sm:hidden mx-3 border border-solid shadow-lg rounded-[10px] h-full   ${
        themeState === false
          ? "border-primaryDark  shadow-primaryDark"
          : "border-secondaryLig  shadow-secondaryLig"
      }`}
    >
      <div className="overflow-hidden">
        <Carousel>
          <CarouselContent>
            {projetos.map((projeto, i) => (
              <CarouselItem key={i}>
                <div className="flex flex-col gap-5 p-3">
                  <img src={projeto.foto} className="rounded-[6px] " alt="" />
                  <div className=" flex flex-col gap-3 px-2">
                    <h2 className="text-[22px] font-bold text-center">
                      {projeto.nome}
                    </h2>
                    <p className="leading-loose text-justify text-[18px]">
                      {projeto.descricao}
                    </p>
                  </div>
                  <a
                    href={projeto.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex justify-center"
                  >
                    <CurriculoIcon content={"VER PROJETO"} />
                  </a>
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
