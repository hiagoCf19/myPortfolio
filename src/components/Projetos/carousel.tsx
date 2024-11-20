import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { projetos } from "@/mocks/projetos";
import { MdOutlineIncompleteCircle } from "react-icons/md";
import { CiServer } from "react-icons/ci";
import { MdOutlineDesignServices } from "react-icons/md";

import { FaCode } from "react-icons/fa6";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import Progress from "./_components/progress";
import { BiMobile } from "react-icons/bi";

export const CarouselProjectsMobile = () => {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>(
    {}
  );
  const toggleReadMore = (index: number) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  const [api, setApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrentSlide(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrentSlide(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  type StackType = "Back-end" | "Front-end" | "Mobile" | string;

  const getStackStyle = (stack: StackType): string => {
    const stackStyles: Record<string, string> = {
      "Back-end": "bg-[#3363ff2b] text-blue-600",
      "Front-end": "bg-[#36ff332b] text-green-500",
      Mobile: "bg-[#fffc332b] text-yellow-500",
    };

    return stackStyles[stack] || "bg-[#9633ff2b] text-primary";
  };

  const getStackIcon = (stack: StackType): JSX.Element => {
    const stackIcons: Record<string, JSX.Element> = {
      "Front-end": <MdOutlineDesignServices />,
      "Back-end": <CiServer size={20} />,
      Mobile: <BiMobile />,
    };

    return stackIcons[stack] || <FaCode size={20} />;
  };

  return (
    <div className="relative overflow-hidden">
      <Carousel
        setApi={setApi}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent>
          {projetos.map((p, index) => (
            <CarouselItem
              key={p.nome}
              className="space-y-4 sm:flex sm:gap-8 h-min"
            >
              <div className="sm:flex-1 items-center justify-center flex">
                <img
                  className={`h-[200px] md:h-[380px] lg:aspect-auto rounded-lg lg:flex-1 ${
                    p.stack === "Mobile" && "min-h-[400px] max-w-[200px]"
                  }`}
                  src={p.foto}
                  alt={p.nome}
                />
              </div>
              <div className="sm:flex-1">
                <div className=" flex flex-col gap-3">
                  <h1 className="text-3xl lg:text-4xl font-semibold">
                    {p.nome}
                  </h1>
                  <p className="text-base lg:text-xl">{p.subtitle}</p>

                  <span
                    className={`text-muted-foreground text-sm lg:text-lg ${
                      !expandedItems[index] && "line-clamp-4"
                    }`}
                  >
                    {p.descricao}
                  </span>
                  <Button
                    variant={"link"}
                    className="underline text-start w-full p-0 md:justify-start"
                    onClick={() => toggleReadMore(index)}
                  >
                    {!expandedItems[index] ? "Ler mais" : "Ler menos"}
                  </Button>

                  <div className="flex gap-4 flex-col sm:flex-row sm:gap-52">
                    <div className="flex flex-col  gap-2 sm:gap-4">
                      <p className="text-sm font-medium flex items-center gap-2">
                        <FaCode className="text-muted-foreground" size={20} />
                        Tipo de projeto
                      </p>
                      <div
                        className={`rounded-full w-max px-2 py-1   ${getStackStyle(
                          p.stack
                        )}`}
                      >
                        <span className="opacity-100 text-sm font-medium flex items-center gap-2">
                          {getStackIcon(p.stack)}
                          {p.stack}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2  sm:gap-4">
                      <p className="text-sm font-medium flex items-center gap-2">
                        <MdOutlineIncompleteCircle
                          className="text-muted-foreground"
                          size={20}
                        />
                        Tecnologias utilizadas
                      </p>
                      <div className="flex space-x-4 mt-2">
                        {p.tecs.map((Icon, i) => (
                          <Icon key={i} size={24} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-4 flex justify-center sm:justify-start">
                  <Button
                    variant={"outline"}
                    className="border border-primary hover:bg-background hover:text-primary"
                    size={"lg"}
                    asChild
                  >
                    <a href={p.link} target="_blank">
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
        <div className="flex justify-center md:mt-12 mt-4">
          {projetos.map((_, i) => (
            <Progress activated={i + 1 === currentSlide} key={i} />
          ))}
        </div>
      </Carousel>
    </div>
  );
};
