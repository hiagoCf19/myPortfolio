import { createGlobalStyle } from "styled-components";
export const backgroundLig = "#e4e5f1";
export const PrimaryLig = "#01013b";
export const SecondaryLig = "#5B7DB1";
export const Gradientlig = "bg-gradient-to-r from-primaryLig to-secondaryLig";
export const BackgroundLineLig = "bg-[#e4e5f1]";
export const CardLig =
  "border-secondaryLig bg-[#FFF] hover:shadow-xl hover:shadow-secondaryLig shadow-secondaryLig hover:scale-105 text-secondaryLig  ";

const Light = createGlobalStyle`
  body {
    background: ${backgroundLig};
    color: ${PrimaryLig};
    font-family: 'Play', sans-serif;
    margin: 0;
  }
  .headerLight{
    background: ${backgroundLig};
    color: #000;
    font-family: 'Play', sans-serif;
    margin: 0;
  }
`;
export default Light;
