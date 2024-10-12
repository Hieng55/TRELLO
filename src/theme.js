import { cyan, deepOrange, orange, teal } from "@mui/material/colors"
import { experimental_extendTheme as extendTheme } from "@mui/material/styles"

const theme = extendTheme({
  colorSchemes: {
    light: {
      primary: teal,
      secondary: teal,
    },
    dark: {
      primary: teal,
      secondary: teal,
    },
  },
})

export default theme
