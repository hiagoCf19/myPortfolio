import { useContext } from "react";
import styled from "styled-components";
import temaCtx from "../Context/context";
import { PrimaryLig } from "@/style/lightTheme";
import { PrimaryDark, SecondaryDark } from "@/style/darkTheme";

const ScrollStyle = styled.button`
  width: 30px;
  height: 50px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;

  box-shadow: ${({ themestate }) =>
    themestate
      ? `0px 0px 12px ${PrimaryLig}`
      : `0px 0px 10px ${SecondaryDark}`};
  position: relative;

  div {
    width: 5px;
    height: 10px;
    border-radius: 10px;
    background-color: ${({ themestate }) =>
      themestate ? PrimaryLig : PrimaryDark};
    box-shadow: ${({ themestate }) =>
      themestate
        ? `0px 0px 12px ${PrimaryLig}`
        : `0px 0px 10px ${SecondaryDark}`};
    animation: scroll_4013 2s linear infinite;
    transform: translateY(40%);
  }

  &::after {
    content: "scroll";
    font-family: "Play", sans-serif;
    position: absolute;
    top: 140%;
    color: ${({ themestate }) => (themestate ? PrimaryLig : PrimaryDark)};
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }

  @keyframes scroll_4013 {
    0% {
      transform: translateY(40%);
    }

    50% {
      transform: translateY(90%);
    }
  }
`;
const MouseIcon = () => {
  const { themeState } = useContext(temaCtx);
  return (
    <div className="flex justify-center sm:mt-[-180px] mt-10">
      <ScrollStyle themestate={themeState}>
        <div> </div>
      </ScrollStyle>
    </div>
  );
};
export default MouseIcon;
