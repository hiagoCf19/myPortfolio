import { Element } from "react-scroll";
import Titulo from "../Titulo";
import { CarouselProjects } from "./carousel";


const Projetos = () => {
  return (
    <Element name="projetos">
      <Titulo title={"Projetos"} subTitle={"O que eu fiz"} />
      <CarouselProjects />

    </Element>
  );
};
export default Projetos;
