import { createGlobalStyle } from "styled-components";
import { primaryFont } from "./variables";

export const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
    font-family: ${primaryFont};
  }
  body {
    font-family: ${primaryFont};
  }
`