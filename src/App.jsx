import Button from "@mui/material/Button"
import { AccessAlarm, ThreeDRotation } from "@mui/icons-material"
import { useColorScheme } from "@mui/material/styles"
import SelectCustomOption from "./selectMode"

function App() {
  const { mode, setMode } = useColorScheme()
  if (!mode) {
    return null
  }
  const handleChangeMode = (event) => {
    setMode(event.target.value)
  }
  return (
    <>
      <SelectCustomOption mode={mode} handleChangeMode={handleChangeMode} />
    </>
  )
}

export default App
