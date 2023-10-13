import { useContext } from "react";
import temaCtx from "../../Context/context";

const NavCpn = ({ ancora, content }) => {
  const { themeState } = useContext(temaCtx);

  return (
    <nav>
      <a href={ancora} className={`${themeState === false ? ' hover:text-transparent bg-clip-text bg-gradient-to-r from-[#8e2de2] to-[#4a00e0] ' : 'hover:text-transparent bg-clip-text bg-gradient-to-r from-[#000000] to-[#6c7161] '} hidden sm:block`}>{content}</a>





    </nav>


  )
}
export default NavCpn