import Titulo from "../Titulo";
import Icones from "./iconesSkilss";

const Habilidades = () => {
  return (
    <>
      <section
        className="sm:mx-6 flex flex-col justify-center"
        id="Habilidades"
      >
        <div>
          <Titulo title={"Habilidades"} subTitle={"O que eu sei"} />
        </div>
        <Icones />
      </section>
    </>
  );
};
export default Habilidades;
