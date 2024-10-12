// import React from "react"
import SelectOpen from "~/components/SelectOpen"
import { Box, useColorScheme } from "@mui/material"

const AppBar = () => {
  const { mode, setMode } = useColorScheme()
  if (!mode) {
    return null
  }
  const handleChangeMode = (event) => {
    setMode(event.target.value)
  }
  return (
    <Box
      sx={{
        backgroundColor: "primary.light",
        width: "100%",
        height: (theme) => theme.trello.appBarHeight,
        display: "flex",
        alignItems: "center",
      }}
    >
      <SelectOpen mode={mode} handleChangeMode={handleChangeMode} />
    </Box>
  )
}

export default AppBar
