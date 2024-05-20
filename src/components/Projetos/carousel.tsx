import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { projetos } from "@/mocks/projetos";

import Autoplay from 'embla-carousel-autoplay'
import { Button } from "../ui/button";


export const CarouselProjects = () => {

  return (
    <div className="relative overflow-hidden">
      <Carousel plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}>
        <CarouselContent>
          {projetos.map((p) => (

            <CarouselItem key={p.nome} className="space-y-4">
              <img className="aspect-square rounded-lg" src={p.foto} alt="1" />
              <div className=" flex flex-col gap-3">
                <div className="">
                  <h1 className="text-3xl font-semibold">{p.nome}</h1>
                  <p className="text-base">{p.subtitle}</p>
                </div>
                <span className="text-muted-foreground text-sm">
                  {p.descricao}
                </span>

                <p className="text-sm font-medium">Tipo de projeto</p>
                <div className={`rounded-full w-max px-4 py-px   ${p.stack === "Back-end" ? "bg-[#3363ff2b] text-blue-600" : p.stack === "Front-end" ? 'bg-[#36ff332b] text-green-500' : 'bg-[#9633ff2b] text-primary'}`}>
                  <span className="opacity-100 text-sm font-medium ">{p.stack}</span>
                </div>
                <p className="text-sm font-medium">Tecnologias utilizadas</p>
                <div className="flex space-x-4">
                  {p.tecs.map((Icon, i) => (
                    <Icon key={i} size={28} />
                  ))}
                </div>
              </div>
              <div className="pt-4 flex justify-center">
                <Button variant={"outline"} className="border border-primary hover:bg-background hover:text-primary" size={"lg"} asChild>
                  <a href={p.link}>
                    Ver projeto
                  </a>
                </Button>
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
