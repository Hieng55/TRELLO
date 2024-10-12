import * as React from "react"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import PropTypes from "prop-types"
import LightModeIcon from "@mui/icons-material/LightMode"
import DarkModeIcon from "@mui/icons-material/DarkMode"
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness"
import { Box } from "@mui/material"
export default function SelectOpen({ mode, handleChangeMode }) {
  const [open, setOpen] = React.useState(false)

  const handleClose = () => {
    setOpen(false)
  }
  const handleOpen = () => {
    setOpen(true)
  }
  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 150 }}>
        <InputLabel id="demo-controlled-open-select-label">Mode</InputLabel>
        <Select
          sx={{ height: 50 }}
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={mode}
          label="Mode"
          onChange={handleChangeMode}
        >
          <MenuItem value="light">
            <Box display="flex" alignItems="center" gap={1}>
              <LightModeIcon fontSize="small" /> <p>Light</p>
            </Box>
          </MenuItem>
          <MenuItem value="dark">
            <Box display="flex" alignItems="center" gap={1}>
              <DarkModeIcon fontSize="small" />
              <p>Dark</p>
            </Box>
          </MenuItem>
          <MenuItem value="system">
            <Box display="flex" alignItems="center" gap={1}>
              <SettingsBrightnessIcon fontSize="small" />
              <p>System</p>
            </Box>
          </MenuItem>
        </Select>
      </FormControl>
    </>
  )
}
SelectOpen.propTypes = {
  mode: PropTypes.string.isRequired,
  handleChangeMode: PropTypes.func,
}
