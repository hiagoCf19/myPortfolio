import { useContext } from "react";
import ToggleTheme from "./Theme";
import NavCpn from "./navegationsCpn";
import temaCtx from "../../Context/context";

const HeaderCpn = () => {
  const { themeState } = useContext(temaCtx);

  return (
    <>
      <section>
        <header className={`sm:w-full border-gradient fixed z-20 ${themeState === false ? 'headerDark' : 'headerLight'}`}>
          <nav className="flex justify-between sm:p-6 py-6 px-4 sm:px-[10.5rem] items-center">
            <h1 className={`text-[1.5rem] font-bold ${themeState === false ? 'text-[#f5f5f5]' : 'text-[#312f2f]'}`}>Hiago Ferreira</h1>
            <div className="flex items-center gap-8 text-[20px]">
              <NavCpn ancora={'#sobre-mim'} content={'Sobre mim'} />
              <NavCpn ancora={'#Habilidades'} content={'Habilidades'} />
              <NavCpn ancora={'#Projetos'} content={'Projetos'} />
              <NavCpn ancora={'#Contatos'} content={'Contatos'} />
              <div>
                <ToggleTheme />
              </div>
            </div>
          </nav>
          <div className={`sm:w-ful w-[200%] h-[2px] ${themeState === false ? 'bg-gradient-to-r from-[#8e2de2] to-[#4a00e0]' : 'bg-gradient-to-r from-[#000000] to-[#6c7161]'}`} />
        </header>
      </section>
      <div className="h-[64px]"></div>
    </>
  );
};

export default HeaderCpn;
