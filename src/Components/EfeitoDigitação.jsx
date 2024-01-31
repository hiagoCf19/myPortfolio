import { useContext, useEffect, useState } from "react";
import iAtualContext from "../Context/typingContext";

const TypingEffect = ({ text, speed }) => {
  const [textoExibido, setTextoExibido] = useState("");
  const { iAtual, setiAtual } = useContext(iAtualContext);

  useEffect(() => {
    const tempoDeEscrita = setInterval(() => {
      if (iAtual < text.length) {
        setTextoExibido(text.substring(0, iAtual + 1));
        setiAtual(iAtual + 1);
      } else {
        clearInterval(tempoDeEscrita);
      }
    }, speed);

    return () => {
      clearInterval(tempoDeEscrita);
    };
  }, [iAtual, text, speed]);

  return <span>{textoExibido}</span>;
};

export default TypingEffect;
