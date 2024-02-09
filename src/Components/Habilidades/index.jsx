import { Element } from "react-scroll";
import Titulo from "../Titulo";
import Icones from "./iconesSkilss";

const Habilidades = () => {
  return (
    <Element
      className="sm:mx-6 flex flex-col justify-center py-20"
      name="habilidades"
    >
      <div>
        <Titulo title={"Habilidades"} subTitle={"O que eu sei"} />
      </div>
      <Icones />
    </Element>
  );
};
export default Habilidades;
