import Titulo from "../Titulo"
import Icones from "./iconesSkilss"

const Habilidades = () => {
  return (
    <>
      <section className="mx-6 sm:mx-[10.5rem]  pt-28" id="Habilidades">
        <div>
          <Titulo title={'Habilidades'} subTitle={'O que eu sei'} />
        </div>
        <Icones />
      </section >
    </>

  )
}
export default Habilidades