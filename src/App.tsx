import { ThemeProvider } from "styled-components";
import { BrowserRouter } from 'react-router-dom'
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./themes/defaultTheme";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
            <Router />
          <GlobalStyle />
        </BrowserRouter>
    </ThemeProvider>
  )
}
