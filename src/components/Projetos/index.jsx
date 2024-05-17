import { Element } from "react-scroll";
import Titulo from "../Titulo";

import { CarouselCpn } from "./carousel";
import { CarouselMobile } from "./carouselMob";

const Projetos = () => {
  return (
    <Element name="projetos">
      <Titulo title={"Projetos"} subTitle={"O que eu fiz"} />
      <CarouselCpn />
      <CarouselMobile />
    </Element>
  );
};
export default Projetos;
