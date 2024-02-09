import { useContext } from "react";
import temaCtx from "../../Context/context";
import { GradientDark } from "@/style/darkTheme";
import { Gradientlig } from "@/style/lightTheme";
import { Link } from "react-scroll";
// eslint-disable-next-line react/prop-types
const NavCpn = ({ to, content }) => {
  const { themeState } = useContext(temaCtx);

  return (
    <nav>
      <Link
        to={to}
        spy={true}
        smooth={true}
        duration={500}
        offset={-150}
        activeClass="ativo"
        className={`${
          themeState === false
            ? ` hover:text-transparent bg-clip-text ${GradientDark}`
            : `hover:text-transparent bg-clip-text ${Gradientlig} `
        } hidden sm:block cursor-pointer`}
      >
        {content}
      </Link>
    </nav>
  );
};
export default NavCpn;
