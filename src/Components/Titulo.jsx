import styled from "styled-components";
import temaCtx from "../Context/context";
import { useContext } from "react";
import {
  BackgroundLineLig,
  PrimaryLig,
  SecondaryLig,
} from "@/style/lightTheme";
import {
  BackgroundLineDark,
  PrimaryDark,
  SecondaryDark,
} from "@/style/darkTheme";

const BarStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 60px;

  .c1 {
    width: 50%;
    height: 2px;
    border-radius: 10px;
    background-color: transparent;
    position: absolute;
  }
  @media (min-width: 640px) {
    .c1 {
      width: 13%;
      height: 2px;
      border-radius: 10px;
      background-color: transparent;
      position: absolute;
    }
  }

  .c1::before {
    content: "";
    position: absolute;
    background-image: ${({ themestate }) =>
      themestate
        ? ` linear-gradient(to right, ${PrimaryLig}, ${SecondaryLig})`
        : `  linear-gradient(to right, ${SecondaryDark}, ${PrimaryDark})`};
    width: 0%;
    height: 100%;
    border-radius: 2px;
    animation: load 3.5s ease-in-out infinite;
  }

  .c2 {
    display: flex;
    justify-content: center;
  }

  @keyframes load {
    50% {
      width: 100%;
    }

    100% {
      right: 0;
      left: unset;
    }
  }
`;

const Titulo = ({ title, subTitle }) => {
  const { themeState } = useContext(temaCtx);

  return (
    <>
      <div>
        <div className="flex justify-center text-[48px] font-medium">
          <h1>{title}</h1>
        </div>

        <BarStyle themestate={themeState}>
          <h1
            className={`p-2 z-10 text-lg font-normal ${
              themeState === false ? BackgroundLineDark : BackgroundLineLig
            }`}
          >
            {" "}
            {subTitle}{" "}
          </h1>
          <div className="c1">
            <div className="c2">
              <div></div>
            </div>
          </div>
        </BarStyle>
      </div>
    </>
  );
};
export default Titulo;
