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
    background-color: ${({ theme }) => theme.color.whisper};
    font-family: "Poppins", sans-serif;
    color: ${({ theme }) => theme.color.black};
  }
  ul {
    margin: 0;
    padding: 0;
  }
`

export default GlobalStyle;