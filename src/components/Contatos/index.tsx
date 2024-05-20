import Titulo from "../Titulo";
import { MdSmartphone, MdAlternateEmail } from "react-icons/md";
import ContatosCpn from "./contatos";
import { useState } from "react";
import emailjs from 'emailjs-com';
import { Element } from "react-scroll";
import InputGeneric from "./input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { toast } from "sonner"

const Contatos = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [mensagemEnviada, setMensagemEnviada] = useState(false);
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name === "" || email === "" || message === "") {
      toast.info("Preencha todos os campos!")
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
          toast.success("Mensagem enviada com sucesso");
        },
        (error) => console.log("erro", error)
      );
  };
  setTimeout(() => {
    setMensagemEnviada(false);
  }, 8000);

  return (
    <Element name="contatos" className="sm:pb-44">
      <Titulo title={"Contato"} subTitle={"Vamos conversar"} />
      <div className="flex">
        <div className="flex flex-col-reverse sm:flex-row space-y-5 w-full">
          <div className="sm:w-[300px] flex flex-col gap-4 my-8 sm:ml-0  sm:px-0">
            <ContatosCpn
              icon={<MdSmartphone size={30} color="#9633ff" />}
              title={"Telefone"}
              subtitle={"(31) 9 8203-3698"}
            />
            <ContatosCpn
              icon={<MdAlternateEmail size={30} color="#9633ff" />}
              title={"E-mail"}
              subtitle={"hiagodeveloperfr@gmail.com"}
            />

          </div>
          <div className="sm:w-[400px] flex flex-col">

            <form onSubmit={sendEmail} className="space-y-3">
              <InputGeneric
                label="Nome"
                onchange={(e) => setName(e.target.value)}
                value={name}
                placeholder="Digite seu nome"
              />
              <InputGeneric
                label="E-mail"
                onchange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Digite seu email "
              />
              <div className="grid w-full gap-2">
                <p className="">Mensagem: </p>
                <Textarea placeholder="Escreva sua mensagem..."
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  className="focus-visible:ring-1 focus-visible:ring-primary border-primary min-h-60"

                />
                <Button
                  type="submit"
                  variant={"outline"}
                  className="focus-visible:ring-1 focus-visible:ring-primary mt-3 "
                >{mensagemEnviada === false ? "ENVIAR" : "EMAIL ENVIADO"}</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Element>
  );
};
export default Contatos;
