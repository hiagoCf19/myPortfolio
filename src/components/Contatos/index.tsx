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
      <Titulo title={"Contatos"} subTitle={"Vamos conversar"} />
      <div className="flex">
        <div className="flex flex-col-reverse space-y-5 sm:justify-center sm:items-center  w-full">
          <div className=" flex flex-col gap-4 my-8 sm:hidden ">

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
          <div className="flex flex-col sm:w-[50%] ">

            <form onSubmit={sendEmail} className="space-y-3">
              <div className="sm:flex sm:gap-8 space-y-3 sm:space-y-0">

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
              </div>
              <div className="grid w-full gap-2">
                <p className="">Mensagem: </p>
                <Textarea placeholder="Escreva sua mensagem..."
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  className="focus-visible:ring-1 focus-visible:ring-primary border-primary min-h-60 rounded"

                />
                <div className="w-full flex  justify-center">
                  <Button
                    type="submit"
                    variant={"outline"}
                    className="focus-visible:ring-1 focus-visible:ring-primary mt-3 w-[80%] sm:w-[50%] sm:rounded"
                  >
                    {mensagemEnviada === false ? "ENVIAR" : "EMAIL ENVIADO"}
                  </Button>
                </div>
                <div className=" space-y-4 mt-8 hidden sm:block ">

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
              </div>
            </form>
          </div>
        </div>
      </div>
    </Element>
  );
};
export default Contatos;
