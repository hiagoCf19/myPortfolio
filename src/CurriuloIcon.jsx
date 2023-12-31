import { useContext } from "react";
import styled from "styled-components";
import temaCtx from "./Context/context";

const CurriculoStyle = styled.div`
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

const CurriculoIcon = ({ content }) => {
  const { themeState } = useContext(temaCtx);
  return <CurriculoStyle themestate={themeState}>{content}</CurriculoStyle>;
};
export default CurriculoIcon;
