import { Element } from "react-scroll";
import Titulo from "../Titulo";
import { CarouselProjectsMobile } from "./carousel";

const Projetos = () => {
  return (
    <Element name="projetos">
      <Titulo title={"Projetos"} subTitle={"O que eu fiz"} />
      <CarouselProjectsMobile />
    </Element>
  );
};
export default Projetos;
