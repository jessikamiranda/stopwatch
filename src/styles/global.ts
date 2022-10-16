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
    background-color: #1F243E;
  }

  body {
    font-family: "Bai Jamjuree", sans-serif;
    color: #C9CEE5;
    overflow: hidden;

    
  }
`;
