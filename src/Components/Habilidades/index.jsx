import Titulo from "../Titulo";
import Icones from "./iconesSkilss";

const Habilidades = () => {
  return (
    <>
      <section
        className="sm:mx-6 flex flex-col justify-center pt-28"
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
