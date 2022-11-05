import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * { 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
  }

  body {
    background: ${({theme}) => theme["base-background"]};
    color: ${({theme}) => theme["base-text"]};
    -webkit-font-smoothing: antialiased;

    .container {
      max-width: 864px;  
      margin-inline: auto;
      margin-bottom: 2rem;
    }
  }

  body, input, textarea, button {
    font: 400 1rem 'Nunito', sans-serif
  }
`