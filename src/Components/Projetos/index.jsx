import Titulo from "../Titulo";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import CurriculoIcon from "../../CurriuloIcon";
import { useContext, useState } from "react";
import temaCtx from "../../Context/context";

const Projetos = () => {
  const { themeState } = useContext(temaCtx);
  const [projetoExibido, setProjetoExibido] = useState(0);
  const projetos = [
    {
      nome: "HRest",
      foto: "/publicimgs/printP1.png",
      descricao:
        " O projeto visa simplificar o processo de pedidos em restaurantes, oferecendo aos clientes a opção de fazer pedidos online, eliminando a necessidade de ligar para o atendimento telefônico e permitindo que os pedidos sejam enviados diretamente para o WhatsApp da empresa.",
      link: "https://h-rest-react.vercel.app/",
    },
    {
      nome: "Guia do Bleach",
      foto: "/publicimgs/guia-bleach.png",
      descricao:
        " Este foi um dos meus primeiros projetos. Desenvolvido com HTML e CSS ele tem o objetivo de servir como uma referencia para novos fãs da série Bleach. O projeto visa trazer um breve resumo da história das temporadas da série animada.",
      link: "https://bleach-guia.vercel.app/",
    },
  ];
  const projeto = projetos[projetoExibido];
  const next = () => {
    if (projetoExibido > 0) {
      setProjetoExibido(projetoExibido - 1);
    }
  };
  const back = () => {
    if (projetoExibido < projetos.length - 1) {
      setProjetoExibido(projetoExibido + 1);
    }
  };

  return (
    <section className="pt-28" id="Projetos">
      <Titulo title={"Projetos"} subTitle={"O que eu fiz"} />
      <div className="flex justify-center sm:h-[380px]">
        {/* tela dos projetos */}
        <div
          className={`border border-solid shadow-lg sm:w-[950px] rounded-xl flex justify-center sm:justify-normal  sm:flex-row gap-4 overflow-x-hidden h-auto p-2 sm:p-0 mt-[-55px] overflow-y-hidden ${
            themeState === false
              ? "border-[#4a00e0]  shadow-[#4a00e0]"
              : "border-[#FFFFFF]  shadow-[#000000]"
          }`}
        >
          {/* CARD DO PROJETO */}
          <div className=" w-[350px] sm:auto sm:flex sm:w-[900px] sm:items-center sm:gap-2 sm:ml-4 ">
            <MdOutlineArrowBackIos
              size={50}
              color={`${themeState === false ? "#4a00e0" : "#000000"}`}
              className="animaL hidden sm:block"
              onClick={next}
            />
            <div className=" sm:w-[900px] sm:h-[400px] flex gap-4 flex-col sm:flex-row sm:py-6 ">
              {/* FOTO DO PROJETO */}

              <div className="flex gap-4 flex-col sm:flex-row">
                <div className=" flex items-center justify-center ">
                  <img
                    src={projeto.foto}
                    alt="Foto do projeto"
                    className="sm:w-[600px] sm:h-[350px] w-[350px] sm:rounded-2xl rounded-lg"
                  />
                </div>
                <div className=" flex flex-col gap-6   sm:w-[300px]">
                  <h1 className="text-center font-semibold text-[20px] sm:text-[24px]">
                    {" "}
                    {projeto.nome}
                  </h1>
                  <div className="flex items-start gap-3 sm:w-[300px] sm:mt-6">
                    <div
                      className={` w-4 h-[80%] hidden sm:block ${
                        themeState === false
                          ? "bg-gradient-to-t from-[#8e2de2] to-[#4a00e0]"
                          : "bg-gradient-to-t from-[#000000] to-[#6c7161]"
                      } `}
                    ></div>
                    <div className="flex flex-col items-center mb-8 sm:mb-0">
                      <p className="text-[18px] text-justify leading-normal sm:leading-none px-2 mb-4 sm:mb-6">
                        {projeto.descricao}
                      </p>
                      <div className="flex items-center gap-14">
                        <MdOutlineArrowBackIos
                          size={30}
                          color={`${
                            themeState === false ? "#4a00e0" : "#000000"
                          }`}
                          className="animaL sm:hidden"
                          onClick={next}
                        />
                        <CurriculoIcon
                          content={"VER PROJETO"}
                          link={projeto.link}
                        />
                        <MdOutlineArrowForwardIos
                          size={30}
                          color={`${
                            themeState === false ? "#4a00e0" : "#000000"
                          }`}
                          className="animaR sm:hidden "
                          onClick={back}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <MdOutlineArrowForwardIos
              size={50}
              color={`${themeState === false ? "#4a00e0" : "#000000"}`}
              className="animaR hidden sm:block"
              onClick={back}
            />
          </div>
        </div>
      </div>
      {/* CIRCULOS PARA INDICAR NAVEGAÇÃO LATERAL */}
      <div className="flex py-6 justify-center items-center gap-2">
        {projetos.map((not, i) => (
          <div key={i}>
            {projetoExibido === i ? (
              <div
                className={`h-3 w-3 rounded-full ${
                  themeState === false
                    ? "bg-gradient-to-t from-[#8e2de2] to-[#4a00e0]"
                    : "bg-gradient-to-t from-[#000000] to-[#6c7161]"
                }`}
              ></div>
            ) : (
              <div className="h-2 w-2 bg-[#a7a7a75c] rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
export default Projetos;
