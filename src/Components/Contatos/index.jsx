import Titulo from "../Titulo";
import { MdSmartphone, MdAlternateEmail } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
import ContatosCpn from "./contatos";
import styled from "styled-components";
import { useContext, useState } from "react";
import emailjs from "@emailjs/browser";
import temaCtx from "../../Context/context";

const InputStyle = styled.input`
  font-style: italic;
  font-weight: 500;
  font-size: 1rem;
  color: ${({ themestate }) => (themestate ? " rgb(28,28,30)" : "#FFF")};
  background-color: ${({ themestate }) =>
    themestate ? " #FFF " : "rgb(28,28,30); "};
  box-shadow: ${({ themestate }) =>
    themestate ? " 0 0 12px #000000, 0 0 0 " : " 0 0 12px #4a00e0, 0 0 0 "};
  -webkit-box-shadow: ${({ themestate }) =>
    themestate ? " 0 0 12px #000000, 0 0 0" : " 0 0 12px #4a00e0, 0 0 0"};

  border-radius: 6px;
  border: none;
  outline: none;
  padding: 12px;
  width: 300px;
  transition: 0.4s;

  @media (min-width: 640px) {
    max-width: 190px;
    padding: 0.5vw;
    font-style: normal;
  }

  &:hover {
    box-shadow: ${({ themestate }) =>
      themestate ? "  0 0 0 2px #6c7161" : " 0 0 0 2px #8d2de287"};
  }

  &:focus {
    box-shadow: ${({ themestate }) =>
      themestate ? "  0 0 0 2px #000" : " 0 0 0 2px #4a00e0"};
  }
`;
const TextAreaStyle = styled.textarea`
  font-weight: 500;
  font-size: 1rem;
  color: ${({ themestate }) => (themestate ? " rgb(28,28,30)" : " #FFF ")};
  background-color: ${({ themestate }) =>
    themestate ? " #FFF " : "rgb(28,28,30); "};
  box-shadow: ${({ themestate }) =>
    themestate ? " 0 0 12px #000000, 0 0 0" : " 0 0 12px #4a00e0, 0 0 0"};

  border-radius: 6px;
  border: none;
  outline: none;
  padding: 10px;
  height: 200px;
  width: 300px;

  transition: 0.4s;
  resize: none;
  @media (min-width: 640px) {
    width: 400px;
    height: 120px;
    padding: 0.5vw;
  }
  &:hover {
    box-shadow: ${({ themestate }) =>
      themestate ? "  0 0 0 2px #6c7161" : " 0 0 0 2px #8d2de287"};
  }

  &:focus {
    box-shadow: ${({ themestate }) =>
      themestate ? "  0 0 0 .15vw #000" : " 0 0 0 .15 #4a00e0"};
  }
`;
const SubmitStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  text-decoration: none;
  position: relative;
  border: none;
  font-size: 14px;
  font-weight: 600;
  font-family: inherit;
  color: #fff;
  width: 8em;
  height: 2.3em;
  line-height: 2em;
  text-align: center;
  background: ${({ themestate }) =>
    themestate
      ? "linear-gradient(90deg,#000000,#000000,#6c7161,#000000f3)"
      : " linear-gradient(90deg,#4a00e0,#8e2de2,#bda0ec,#4a00e0);"};
  background-size: 300%;
  border-radius: 8px;
  z-index: 1;

  &:hover {
    animation: ani 8s linear infinite;
    border: none;
  }

  @keyframes ani {
    0% {
      background-position: 0%;
    }

    100% {
      background-position: 400%;
    }
  }

  &:before {
    content: "";
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    z-index: -1;
    background: ${({ themestate }) =>
      themestate
        ? "linear-gradient(90deg,#000000,#6c7161,#6c7161,#000000f3)"
        : " linear-gradient(90deg,#4a00e0,#8e2de2,#bda0ec,#4a00e0);"};
    background-size: 400%;
    border-radius: 8px;
    transition: 1s;
  }

  &:hover::before {
    filter: blur(20px);
  }
  &:active {
    background: ${({ themestate }) =>
      themestate
        ? "linear-gradient(90deg,#000000,#6c7161,#6c7161,#000000f3)"
        : " linear-gradient(32deg,#ea7fd6,#f441a5,#d0d0d0,#031bf4);"};
  }
`;

const Contatos = () => {
  const { themeState } = useContext(temaCtx);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [mensagemEnviada, setMensagemEnviada] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || message === "") {
      alert("preencha todos os campos");
      return;
    }
    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };
    emailjs
      .send(
        "service_7e3f2ml",
        "template_cjtbz7r",
        templateParams,
        "S0oRhtVBnuiDASR8N"
      )
      .then(
        (response) => {
          setMensagemEnviada(true);
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => console.log("erro", error)
      );
  };
  setTimeout(() => {
    setMensagemEnviada(false);
  }, 8000);
  return (
    <section id="Contatos">
      <Titulo title={"Contatos"} subTitle={"entre em contato"} />

      <div className="flex justify-center items-center">
        <div className="w-[800px] flex flex-col-reverse sm:flex-row">
          <div className="sm:w-[300px] flex flex-col gap-8 my-8 sm:ml-0 mx-12 sm:px-0">
            <ContatosCpn
              icon={
                <MdSmartphone
                  size={30}
                  color={`${themeState === false ? "#4a00e0" : "#000000"}`}
                />
              }
              title={"Telefone"}
              subtitle={"(31) 9 8203-3698"}
            />
            <ContatosCpn
              icon={
                <MdAlternateEmail
                  size={30}
                  color={`${themeState === false ? "#4a00e0" : "#000000"}`}
                />
              }
              title={"E-mail"}
              subtitle={"hiagoferreira@id.uff.br"}
            />
            <ContatosCpn
              icon={
                <HiLocationMarker
                  color={`${themeState === false ? "#4a00e0" : "#000000"}`}
                  size={30}
                />
              }
              title={"Localização"}
              subtitle={"Brasil - RJ - Niterói"}
            />
          </div>
          <div className="sm:w-[400px] flex flex-col gap-8 p-2">
            <form onSubmit={sendEmail}>
              {/* nome e email */}
              <div className="flex sm:gap-4 gap-6 flex-col sm:flex-row justify-center sm:justify-normal items-center sm:items-start">
                {/* NOME */}
                <div className="flex-1 flex-col flex gap-3">
                  <label htmlFor="nome"> Nome:</label>
                  <InputStyle
                    themestate={themeState}
                    type="text"
                    placeholder="Digite seu nome"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                </div>
                {/* EMAIL */}
                <div className="flex-1 flex flex-col gap-3">
                  <label htmlFor="email"> E-mail:</label>
                  <InputStyle
                    themestate={themeState}
                    type="text"
                    placeholder="Digite seu e-mail"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
              </div>
              {/* Escreva sua mensagem */}
              <div className=" sm:w-[410px] flex flex-col gap-4 ">
                <label
                  htmlFor="mensagem"
                  className="ml-10 sm:ml-0 mt-4 sm:mt-4"
                >
                  {" "}
                  Escreva sua mensagem:
                </label>
                <div className="flex sm:justify-normal justify-center sm:items-start items-center">
                  <TextAreaStyle
                    themestate={themeState}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Escreva sua mensagem..."
                    value={message}
                  />
                </div>

                <div className="flex justify-center ">
                  <SubmitStyle themestate={themeState}>
                    <input
                      type="submit"
                      value={
                        mensagemEnviada === false ? "ENVIAR" : "EMAIL ENVIADO"
                      }
                    />
                  </SubmitStyle>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contatos;
