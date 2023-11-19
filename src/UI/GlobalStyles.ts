import { createGlobalStyle } from "styled-components";
import { darkColor, lightColor, primaryFont } from "./variables";

export const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
    font-family: ${primaryFont};
  }
  body {
    font-family: ${primaryFont};
  }

  body::-webkit-scrollbar {
    width: 10px;
  }

  body::-webkit-scrollbar-track {
    background: ${lightColor};
  }

  body::-webkit-scrollbar-thumb {
    background-color: ${darkColor};
    border-radius: 20px;
  }
`;
