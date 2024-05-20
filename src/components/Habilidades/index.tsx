import { Element } from "react-scroll";
import Titulo from "../Titulo";
import Icons from "./icons";


const Habilidades = () => {
  return (
    <Element
      className="sm:mx-6 flex flex-col justify-center"
      name="habilidades"
    >

      <Titulo title={"Habilidades"} subTitle={"O que eu sei"} />

      <Icons />


    </Element>
  );
};
export default Habilidades;
