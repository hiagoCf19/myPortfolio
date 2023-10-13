import { AiFillHtml5 } from 'react-icons/ai'
import { FaCss3Alt, FaReact, FaGitAlt } from 'react-icons/fa'
import { RiJavascriptFill } from 'react-icons/ri'
import { BiLogoTypescript } from 'react-icons/bi'
import { SiTailwindcss, SiStyledcomponents } from 'react-icons/si'
import temaCtx from '../../Context/context'
import { useContext } from 'react'
const Icones = () => {
  const { themeState } = useContext(temaCtx)

  const cards = [
    {
      "nome": "HTML 5",
      "icon": AiFillHtml5
    },
    {
      "nome": "CSS 3",
      "icon": FaCss3Alt
    },
    {
      "nome": "JAVASCRIPT",
      "icon": RiJavascriptFill
    },
    {
      "nome": "REACT",
      "icon": FaReact
    },
    {
      "nome": "TYPESCRIPT",
      "icon": BiLogoTypescript
    },
    {
      "nome": "TAILWIND",
      "icon": SiTailwindcss
    },
    {
      "nome": "STYLED COMPONENTS",
      "icon": SiStyledcomponents
    },



  ]
  return (
    <div className="flex justify-center ">

      <div className="sm:w-[800px] sm:ml-8 ml-3  flex sm:gap-10 gap-8 sm:justify-normal justify-center flex-wrap">
        {cards.map((hab, i) => (
          <div key={i} className={`sm:h-[125px] sm:w-[125px] w-[125px] h-[115px] text-center flex flex-col font-bold rounded-lg shadow-lg  border border-solid ${themeState === false
            ? 'border-[#4a00e0] bg-[#181818] hover:shadow-xl hover:shadow-[#4a00e0] shadow-[#4a00e0] hover:scale-105  text-[#f5f5f5b2] hover:text-[#f5f5f5] '
            : ' border-white bg-[#FFF] hover:shadow-xl hover:shadow-[#000000] shadow-[#000000] hover:scale-105  text-[#000000] '} `}>
            <p className=' flex  justify-center sm:m-4 m-3 text-[18px]'>{hab.nome} </p>
            <div className='flex justify-center'>
              <hab.icon size={50} color={`${themeState === false ? '#4a00e0' : '#000000'}`} />


            </div>

          </div>
        ))}

      </div>


    </div>

  )
}
export default Icones