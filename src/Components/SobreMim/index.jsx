import Titulo from "../Titulo"
import Typing from 'react-typing-effect'
import CurriculoIcon from "../../CurriuloIcon"
import Qualificacao from "./Qualificacao"
import temaCtx from "../../Context/context"
import { useContext } from "react"


const SobreMim = () => {

  const { themeState } = useContext(temaCtx)
  return (
    <section className="mx-4 sm:mx-[10.5rem]  pt-28 " id="sobre-mim">
      <div>
        <Titulo title={'Sobre mim'} subTitle={'Quem eu sou ?'} />
      </div>
      <div className="flex sm:justify-center gap-8  items-center sm:px-8">
        {  /* MINHA FOTO */}
        <div className=" items-center justify-center hidden sm:block mt-12">
          <div className="flex items-center justify-center">
            <img src="/publicimgs/eu2.jpeg" alt="minha foto" className="h-[320px] w-[280px] rounded-lg" />
          </div>
        </div>
        {/* CONTAINER DO TEXTO SOBRE MIM */}
        <div className="w-[500px] flex flex-col gap-8">
          {/* BORDA GRADIENTE */}
          <h3 className={`font-bold ${themeState === false ? 'text-[#4a00e0]' : 'text-[#6c7161]'} text-[20px]`}>
            {/* textos */}
            <span className={`font-bold ${themeState === false ? 'text-[#ffffff]' : 'text-[#000000]'}`}> Eu sou </span>
            <Typing speed={100} typingDelay={500} text={[' Desenvolvedor Front-end', 'Freelancer']} eraseDelay={500} cursor='|' />
          </h3>

          <div className=" flex gap-4 sm:flex-row flex-col ">


            <div className={`sm:h-[320px] sm:w-8 ${themeState === false ? 'bg-gradient-to-t from-[#8e2de2] to-[#4a00e0]' : 'bg-gradient-to-t from-[#000000] to-[#6c7161]'}  w-full h-[4px]`}></div>


            <p className={`flex sm:leading-normal leading-loose text-justify text-[18px] ${themeState === false ? 'text-[#ffffff]' : 'text-[#000000]'}`}>
              &nbsp; Atualmente estou cursando Análise e Desenvolvimento de Sistemas, também estou no fim da minha graduação em História pela Universidade Federal Fluminense. <br /> &nbsp; Minha paixão pela tecnologia me levou a explorar o vasto campo do desenvolvimento web, e nos últimos tempos, tenho concentrado meus esforços no universo do React, uma biblioteca JavaScript que me encanta com sua versatilidade e capacidade de criar experiências interativas incríveis.
              Estou sempre em busca de aprendizado e constantemente me atualizando para abraçar as novas tecnologias que moldarão o futuro do desenvolvimento web.
            </p>
          </div>
        </div>
      </div>

      <Qualificacao />
      <a
        href="https://drive.google.com/file/d/1z1yE76W2oDQxJxU5mOs_3lKrAgjOgV8l/view?usp=drive_link" className="mt-8 flex justify-center  sm:mr-16"
        target="_blank"
      >
        <CurriculoIcon content={'CURRÍCULO'} />
      </a>
    </section >
  )
}
export default SobreMim