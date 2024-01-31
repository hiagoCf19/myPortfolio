import { useContext } from "react";
import temaCtx from "../../Context/context";
import { GradientDark } from "@/style/darkTheme";
import { Gradientlig } from "@/style/lightTheme";

const NavCpn = ({ ancora, content }) => {
  const { themeState } = useContext(temaCtx);

  return (
    <nav>
      <a
        href={ancora}
        className={`${
          themeState === false
            ? ` hover:text-transparent bg-clip-text ${GradientDark}`
            : `hover:text-transparent bg-clip-text ${Gradientlig} `
        } hidden sm:block`}
      >
        {content}
      </a>
    </nav>
  );
};
export default NavCpn;
