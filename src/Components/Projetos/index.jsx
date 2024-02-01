import Titulo from "../Titulo";

import { CarouselCpn } from "./carousel";
import { CarouselMobile } from "./carouselMob";

const Projetos = () => {
  return (
    <section id="Projetos">
      <Titulo title={"Projetos"} subTitle={"O que eu fiz"} />
      <CarouselCpn />
      <CarouselMobile />
    </section>
  );
};
export default Projetos;
