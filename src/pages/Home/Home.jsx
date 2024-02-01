import { useContext } from "react";
import Contatos from "../../Components/Contatos";
import FooterCpn from "../../Components/Footer";
import Habilidades from "../../Components/Habilidades";
import HeaderCpn from "../../Components/Header/index";

import Projetos from "../../Components/Projetos";

import SobreMim from "../../Components/SobreMim";
import Welcome from "../../Components/Welcome";
import GlobalStyle from "../../style/GlobalStyles";
import temaCtx from "../../Context/context";
import Dark from "../../style/darkTheme";
import Light from "../../style/lightTheme";
import MouseIcon from "@/Components/scroll";

const Home = () => {
  const { themeState } = useContext(temaCtx);
  return (
    <>
      <GlobalStyle />

      {themeState === false ? <Dark /> : <Light />}
      <HeaderCpn />
      <div className="flex flex-col sm:gap-[150px] gap-20 justify-center sm:items-center ">
        <Welcome />
        <MouseIcon />
        <SobreMim />
        <Habilidades />
        <Projetos />
        <Contatos />
        <FooterCpn />
      </div>
    </>
  );
};
export default Home;
