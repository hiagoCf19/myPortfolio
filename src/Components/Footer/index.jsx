import { useContext } from "react";
import temaCtx from "../../Context/context";

const FooterCpn = () => {
  const { themeState } = useContext(temaCtx);
  return (
    <footer className="w-full">
      <div
        className={` h-[2px] ${
          themeState === false
            ? "bg-gradient-to-r from-[#8e2de2] to-[#4a00e0]"
            : "bg-gradient-to-r from-[#000000] to-[#6c7161]"
        } bg-white`}
      ></div>
      <div className="flex justify-center p-6 text-[18px]">
        Hiago C. Ferreira &#9400;
      </div>
    </footer>
  );
};
export default FooterCpn;
