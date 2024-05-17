import Titulo from "../Titulo";
import { BsCalendarCheck } from "react-icons/bs";

const Qualificacao = () => {
  return (
    <>
      <div className="mt-4">
        <Titulo title={"Formação"} subTitle={"A estrada até aqui"} />
      </div>

      <div className="flex justify-center">
        <div className="text-[#f5f5f5] flex py-4 w-[850px] justify-between mt-[-20px]">
          {/* lote1 */}
          <div className=" flex flex-col gap-2">
            <h4 className="text-[20px] font-semibold">História</h4>
            <p className="text-[18px] text-[#a7a7a7]">
              Universidade Federal Fluminense
            </p>
            <span className="flex items-center gap-2 mt- text-#a7a7a7">
              <BsCalendarCheck size={14} color="#a7a7a7" />
              2021 - 2025
            </span>
          </div>
          {/* BARRAS DE DIVISÃO */}
          <div className="flex w-10">
            <p className={`mt-[40px] w-6 h-1 `}></p>
            <div className={` w-1 `}></div>
            <p className={` mt-[170px] w-6 h-1 `}></p>
          </div>
          {/* lote2 */}
          <div>
            <div className="flex flex-col gap-2 mt-40 pl-4 sm:pl-0">
              <h4 className="text-[20px] font-semibold">
                Análise e desenvolvimento de sistemas
              </h4>
              <p className="text-[18px] flex  justify-end text-[#a7a7a7]">
                Faculdade descomplica
              </p>
              <span className="flex items-center gap-2 mt-3 justify-end text-[#a7a7a7]">
                <BsCalendarCheck size={14} color="#a7a7a7" />
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
