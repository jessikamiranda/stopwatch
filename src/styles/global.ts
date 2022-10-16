import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    height: 100vh;
    width: 100vw;
    background-color: #1F243E;
    -webkit-tap-highlight-color: transparent;
  }

  body {
    font-family: "Bai Jamjuree", sans-serif;
    color: #C9CEE5;
    overflow: hidden;

    
  }
`;
