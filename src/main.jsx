import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material"
import CssBaseline from "@mui/material/CssBaseline"
import theme from "~/theme.js"
import App from "~/App.jsx"
import "~/index.css"

function Main() {
  return (
    <CssVarsProvider theme={theme}>
      <CssBaseline />
      <App />
    </CssVarsProvider>
  )
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Main />
  </StrictMode>
)
