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
import ScroolCpn from "../../Components/Welcome/ScrollComponent";
const Home = () => {
  const { themeState } = useContext(temaCtx);
  return (
    <>
      <GlobalStyle />

      {themeState === false ? <Dark /> : <Light />}
      <HeaderCpn />
      <div className="sm:flex flex-col sm:gap-[100px] justify-center items-center ">
        <Welcome />
        <ScroolCpn />
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
