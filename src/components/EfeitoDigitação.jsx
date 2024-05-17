/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import iAtualContext from "../Context/typingContext";

// eslint-disable-next-line react/prop-types
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
  }, [iAtual, text, speed, setiAtual]);

  return <span className="">{textoExibido}</span>;
};

export default TypingEffect;
