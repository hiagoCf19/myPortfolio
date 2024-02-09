import { useContext } from "react";
import temaCtx from "../../Context/context";

// eslint-disable-next-line react/prop-types
const ContatosCpn = ({ icon, title, subtitle }) => {
  const { themeState } = useContext(temaCtx);
  return (
    <div className="flex gap-5 items-center">
      {icon}

      <div className="flex flex-col">
        <p className="font-bold text-lg">{title}</p>
        <span
          className={`${
            themeState === false ? "text-[#a7a7a7c7]" : "text-[#000000]"
          } text-[16px]`}
        >
          {subtitle}
        </span>
      </div>
    </div>
  );
};

export default ContatosCpn;
