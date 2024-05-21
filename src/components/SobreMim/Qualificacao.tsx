
import { BsCalendarCheck } from "react-icons/bs";
import Title from "../Titulo";

const Qualificacao = () => {
  return (
    <>
      <div className=" mt-2">
        <Title title="Formação" subTitle="Resumo acadêmico" />
      </div>
      <div className="flex justify-center">
        <div className="text-[#f5f5f5] flex py-4 justify-between -mt-6">
          {/* lote1 */}
          <div className=" flex flex-1 flex-col gap-2">
            <h4 className="text-xl font-medium">História</h4>
            <p className="text-sm sm:text-base text-muted-foreground">
              Universidade Federal Fluminense
            </p>
            <span className="flex items-center gap-2">
              <BsCalendarCheck size={18} color="#9633ff" />
              <span className="text-muted-foreground text-sm">2021 - 2025</span>
            </span>
          </div>
          {/* BARRAS DE DIVISÃO */}
          <div className="bg-primary mx-4 w-1" />

          {/* lote2 */}

          <div className="flex flex-1 flex-col gap-2 mt-40 sm:pl-0">
            <h4 className="text-xl font-medium">
              Desenvolvimento de sistemas
            </h4>
            <p className="text-sm sm:text-base flex text-muted-foreground">
              Faculdade descomplica
            </p>
            <span className="flex items-center justify-end gap-2 mt-3 text-[#a7a7a7]">
              <span className="flex items-center gap-2">
                <BsCalendarCheck size={18} color="#9633ff" />
                <span className="text-muted-foreground text-sm">2023 - 2025</span>
              </span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Qualificacao;
