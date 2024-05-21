import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { projetos } from "@/mocks/projetos";
import { MdOutlineIncompleteCircle } from "react-icons/md";
import { CiServer } from "react-icons/ci";
import { MdOutlineDesignServices } from "react-icons/md";
import { TbArrowsDoubleSwNe } from "react-icons/tb";


import { FaCode } from "react-icons/fa6";
import Autoplay from 'embla-carousel-autoplay'
import { Button } from "../ui/button";


export const CarouselProjectsMobile = () => {

  return (
    <div className="relative overflow-hidden">
      <Carousel plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}>
        <CarouselContent>
          {projetos.map((p) => (

            <CarouselItem key={p.nome} className="space-y-4 sm:flex sm:gap-8">
              <div className="sm:flex-1">
                <img className="aspect-square sm:aspect-auto rounded-lg lg:flex-1" src={p.foto} alt={p.nome} />
              </div>
              <div className="sm:flex-1">
                <div className=" flex flex-col gap-3">

                  <h1 className="text-3xl lg:text-4xl font-semibold">{p.nome}</h1>
                  <p className="text-base lg:text-xl">{p.subtitle}</p>

                  <span className="text-muted-foreground text-sm lg:text-lg">
                    {p.descricao}
                  </span>

                  <div className="flex gap-4 flex-col sm:flex-row sm:gap-52">
                    <div className="flex flex-col  gap-2 sm:gap-4">
                      <p className="text-sm font-medium flex items-center gap-2">
                        <FaCode className="text-muted-foreground" size={20} />
                        Tipo de projeto
                      </p>
                      <div className={`rounded-full w-max px-2 py-px   ${p.stack === "Back-end" ? "bg-[#3363ff2b] text-blue-600" : p.stack === "Front-end" ? 'bg-[#36ff332b] text-green-500' : 'bg-[#9633ff2b] text-primary'}`}>
                        <span className="opacity-100 text-sm font-medium flex items-center gap-2">
                          {
                            p.stack === "Front-end"
                              ? <MdOutlineDesignServices />
                              : p.stack === "Back-end" ? <CiServer size={20} />
                                : <TbArrowsDoubleSwNe />

                          }
                          {p.stack}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2  sm:gap-4">
                      <p className="text-sm font-medium flex items-center gap-2">
                        <MdOutlineIncompleteCircle className="text-muted-foreground" size={20} />
                        Tecnologias utilizadas
                      </p>
                      <div className="flex space-x-4">
                        {p.tecs.map((Icon, i) => (
                          <Icon key={i} size={24} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-4 flex justify-center sm:justify-start">
                  <Button variant={"outline"} className="border border-primary hover:bg-background hover:text-primary" size={"lg"} asChild>
                    <a href={p.link}>
                      Ver projeto
                    </a>
                  </Button>
                </div>
              </div>
            </CarouselItem>

          ))}

        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

    </div>
  );
};
