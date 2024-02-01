import { useContext } from "react";
import ToggleTheme from "./Theme";
import NavCpn from "./navegationsCpn";
import temaCtx from "../../Context/context";
import { GradientDark } from "@/style/darkTheme";

const HeaderCpn = () => {
  const { themeState } = useContext(temaCtx);

  return (
    <>
      <section>
        <header
          className={`w-full border-gradient fixed z-20 flex flex-col justify-center ${
            themeState === false ? "headerDark" : "headerLight"
          }`}
        >
          <nav className="flex justify-between sm:p-6 py-6 px-4 items-center ">
            <h1 className={` sm:w-[150px]  text-[1.3rem] font-bold `}>
              Hiago Ferreira
            </h1>
            <div className="flex items-center sm:gap-8 text-[20px]">
              <NavCpn ancora={"#sobre-mim"} content={"Sobre mim"} />
              <NavCpn ancora={"#Habilidades"} content={"Habilidades"} />
              <NavCpn ancora={"#Projetos"} content={"Projetos"} />
              <NavCpn ancora={"#Contatos"} content={"Contatos"} />
              <div>
                <ToggleTheme />
              </div>
            </div>
          </nav>
          <div
            className={`sm:w-full w-[200%] h-[2px] ${
              themeState === false ? GradientDark : "bg-secondaryLig"
            }`}
          />
        </header>
      </section>
      <div className="h-[64px]"></div>
    </>
  );
};

export default HeaderCpn;
