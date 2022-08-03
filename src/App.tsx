import { Grid } from "@mui/material"
import { Register } from "./pages/Register"

function App() {
  return (
    <Grid height='100vh' container justifyContent='center' color="primary">
      <Grid marginTop={4} item xs={12} md={8}>
        <Register />
      </Grid>
    </Grid>
  )
}

export default App
