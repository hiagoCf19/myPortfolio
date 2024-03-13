import { createGlobalStyle } from "styled-components";
export const PrimaryDark = "#4a00e0";
export const SecondaryDark = "#8e2de2";
export const GradientDark = "bg-gradient-to-r from-[#8e2de2] to-[#4a00e0]";
export const BorderDark = "border-[#4a00e0]  shadow-[#4a00e0]";
export const BackgroundLineDark = "bg-[#01031b]";
export const CardDark =
  "border-primaryDark bg-[#181818] hover:shadow-xl hover:shadow-primaryDark shadow-primaryDark hover:scale-105  text-[#f5f5f5b2] hover:text-[#f5f5f5] ";
const Dark = createGlobalStyle`
body {
    background: #01031b;
    color: #FFF;
   font-family: "Circular Std";
    margin: 0;
  }
  .headerDark{
    background: #01031b;
    color: #FFF;
   font-family: "Circular Std";
    margin: 0;
  }
`;
export default Dark;
