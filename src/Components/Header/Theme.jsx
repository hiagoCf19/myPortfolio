import { useContext } from "react";
import styled from "styled-components";
import temaCtx from "../../Context/context";
import { PrimaryLig, SecondaryLig } from "@/style/lightTheme";
import { PrimaryDark } from "@/style/darkTheme";
const LabelTheme = styled.label`
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: 3.5em;
  height: 2em;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: transparent;
    border: ${({ themestate }) =>
      themestate
        ? `1px solid ${SecondaryLig};`
        : ` 1px solid ${PrimaryDark}; `};
    transition: 0.4s;
    border-radius: 30px;
  }
  span:before {
    position: absolute;
    content: "";
    height: 1.4em;
    width: 1.4em;
    border-radius: 20px;
    left: 0.3em;
    bottom: 0.3em;
    background-color: transparent;
    box-shadow: inset 2px -2px 0 1.8px #fff;

    transition: 0.4s;
    animation: anima1 0.3s linear;
  }
  @keyframes anima1 {
    0% {
      transform: translateX(1.5em);
    }

    80% {
      transform: translateX(-0.3em);
    }

    100% {
      transform: translateX(0em);
    }
  }
  input:checked + span:before {
    background-color: ${SecondaryLig};
    box-shadow: none;
    transform: translateX(1.5em);
    animation: anima 0.3s linear;
  }

  @keyframes anima {
    0% {
      transform: translateX(0px);
    }

    80% {
      transform: translateX(1.6em);
    }

    100% {
      transform: translateX(1.4em);
    }
  }
`;
const ToggleTheme = () => {
  const { themeState, setthemeState } = useContext(temaCtx);
  const observaMarcacao = (e) => {
    setthemeState(e.target.checked);
  };
  return (
    <>
      <LabelTheme themestate={themeState}>
        <input
          type="checkbox"
          checked={themeState}
          onChange={observaMarcacao}
        />
        <span></span>
      </LabelTheme>
    </>
  );
};
export default ToggleTheme;
