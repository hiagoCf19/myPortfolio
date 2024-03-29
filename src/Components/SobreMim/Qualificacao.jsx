import { useContext } from "react";
import temaCtx from "../../Context/context";
import Titulo from "../Titulo";
import { BsCalendarCheck } from "react-icons/bs";
import { GradientDark } from "@/style/darkTheme";
import { Gradientlig } from "@/style/lightTheme";
const Qualificacao = () => {
  const { themeState } = useContext(temaCtx);
  return (
    <>
      <div className="mt-4">
        <Titulo title={"Formação"} subTitle={"A estrada até aqui"} />
      </div>

      <div className="flex justify-center">
        <div
          className={`${
            themeState === false ? "text-[#f5f5f5]" : "text-[#]"
          } flex py-4 w-[850px] justify-between mt-[-20px]`}
        >
          {/* lote1 */}
          <div className=" flex flex-col gap-2">
            <h4 className="text-[20px] font-semibold">História</h4>
            <p
              className={`text-[18px] ${
                themeState === false ? "text-[#a7a7a7]" : "text-[#000000cb]"
              }`}
            >
              Universidade Federal Fluminense
            </p>
            <span
              className={`flex items-center gap-2 mt-3 ${
                themeState === false ? "text-[#a7a7a7]" : "text-[#000000cb]"
              }`}
            >
              <BsCalendarCheck
                size={14}
                color={`${themeState === false ? "#a7a7a7" : "#000000"}`}
              />
              2021 - 2025
            </span>
          </div>
          {/* BARRAS DE DIVISÃO */}
          <div className="flex w-10">
            <p
              className={`mt-[40px] w-6 h-1 ${
                themeState === false ? GradientDark : Gradientlig
              } `}
            ></p>
            <div
              className={` w-1 ${
                themeState === false ? GradientDark : Gradientlig
              } `}
            ></div>
            <p
              className={` mt-[170px] w-6 h-1 ${
                themeState === false ? GradientDark : Gradientlig
              }`}
            ></p>
          </div>
          {/* lote2 */}
          <div>
            <div className="flex flex-col gap-2 mt-40 pl-4 sm:pl-0">
              <h4 className="text-[20px] font-semibold">
                Análise e desenvolvimento de sistemas
              </h4>
              <p
                className={`text-[18px] flex  justify-end ${
                  themeState === false ? "text-[#a7a7a7]" : "text-[#000000]"
                }`}
              >
                Faculdade descomplica
              </p>
              <span
                className={`flex items-center gap-2 mt-3 justify-end ${
                  themeState === false ? "text-[#a7a7a7]" : "text-[#000000]"
                } `}
              >
                <BsCalendarCheck
                  size={14}
                  color={`${themeState === false ? "#a7a7a7" : "#000000"}`}
                />
                2023 - 2025
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Qualificacao;
