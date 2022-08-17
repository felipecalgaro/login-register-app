import { Grid } from "@mui/material"
import { Register } from "./pages/Register"
import { SignIn } from "./pages/SignIn"
import { RecoverPassword } from "./pages/RecoverPassword"

function App() {
  return (
    <Grid height='100vh' container justifyContent='center'>
      <Grid marginTop={4} item xs={12} md={8}>
        <Register />
      </Grid>
    </Grid>
  )
}

export default App
