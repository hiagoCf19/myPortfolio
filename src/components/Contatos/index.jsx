import Titulo from "../Titulo";
import { MdSmartphone, MdAlternateEmail } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
import ContatosCpn from "./contatos";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Element } from "react-scroll";

const Contatos = () => {
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
        () => {
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
    <Element name="contatos" className="sm:pb-44">
      <Titulo title={"Contatos"} subTitle={"entre em contato"} />

      <div className="flex justify-center items-center">
        <div className="flex flex-col-reverse sm:flex-row">
          <div className="sm:w-[300px] flex flex-col gap-8 my-8 sm:ml-0  sm:px-0">
            <ContatosCpn
              icon={<MdSmartphone size={30} />}
              title={"Telefone"}
              subtitle={"(31) 9 8203-3698"}
            />
            <ContatosCpn
              icon={<MdAlternateEmail size={30} />}
              title={"E-mail"}
              subtitle={"hiagodeveloperfr@gmail.com"}
            />
            <ContatosCpn
              icon={<HiLocationMarker size={30} />}
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
                  <input
                    type="text"
                    placeholder="Digite seu nome"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                </div>
                {/* EMAIL */}
                <div className="flex-1 flex flex-col gap-3">
                  <label htmlFor="email"> E-mail:</label>
                  <iput
                    type="text"
                    placeholder="Digite seu e-mail"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
              </div>
              {/* Escreva sua mensagem */}
              <div className=" sm:w-[410px] flex flex-col gap-4 ">
                <label htmlFor="mensagem" className=" mt-4 sm:mt-4">
                  {" "}
                  Escreva sua mensagem:
                </label>
                <div className="flex sm:justify-normal justify-center sm:items-start items-center">
                  <textarea
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Escreva sua mensagem..."
                    value={message}
                  />
                </div>

                <div className="flex justify-center ">
                  <input
                    type="submit"
                    value={
                      mensagemEnviada === false ? "ENVIAR" : "EMAIL ENVIADO"
                    }
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Element>
  );
};
export default Contatos;
