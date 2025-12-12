import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
    html {
    box-sizing: border-box;
  }

  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }

  body {
  
    margin: auto;
    background-color: #eee;
    font-family: "Poppins", sans-serif;
  }
`

export default GlobalStyle;