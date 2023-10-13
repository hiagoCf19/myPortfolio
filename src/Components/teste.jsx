import Titulo from "../Titulo"
import Typing from 'react-typing-effect'
const SobreMim = () => {


  return (
    <section className="mx-6 sm:mx-[10.5rem] h-[100vh] pt-28" id="sobre-mim">
      <div>
        <Titulo title={'Sobre mim'} subTitle={'Quem eu sou ?'} />
      </div>
      <div className="flex justify-center items">
        <div className="flex justify-center sm:p-8 mt-[-50px] sm:mt-0 sm:w-[800px]">
          { /* FOTO */}
          <div className="w-[200px] items-center justify-center hidden sm:block"> Foto</div>

          <div className="flex flex-col sm:gap-8 w-full  ">
            <div className="h-[50px] flex items-center font-medium text-xl">
              <h1 className="text-[#f1f1f1]">
                <span> Eu sou </span>
                <span className="font-bold text-[#4a00e0]">
                  <Typing speed={100} text={[' Desenvolvedor Front-end', 'Freelancer']} />
                </span>

              </h1>
            </div>
            <div className=" flex gap-4 flex-col sm:flex-row ">
              {/* BARRA GRADIENTE */}
              <div className="sm:h-min-max sm:w-8 bg-gradient-to-r from-[#8e2de2] to-[#4a00e0] w-full h-[4px]"></div>

              <p className="flex sm:leading-normal leading-loose text-justify text-[18px] text-[#f1f1f1]">
                &nbsp;  Atualmente estou cursando Análise e Desenvolvimento de Sistemas, também estou no fim da minha graduação em História pela Universidade Federal Fluminense. <br /> &nbsp; Minha paixão pela tecnologia me levou a explorar o vasto campo do desenvolvimento web, e nos últimos tempos, tenho concentrado meus esforços no universo do React, uma biblioteca JavaScript que me encanta com sua versatilidade e capacidade de criar experiências interativas incríveis.
                Estou sempre em busca de aprendizado e constantemente me atualizando para abraçar as novas tecnologias que moldarão o futuro do desenvolvimento front-end.
              </p>





            </div>
          </div>
        </div>
      </div>






    </section >
  )
}
export default SobreMim