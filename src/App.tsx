import { Grid } from "@mui/material"
import { SignIn } from "./pages/SignIn"

function App() {
  return (
    <Grid height='100vh' container justifyContent='center'>
      <Grid marginTop={4} item xs={12} md={8}>
        <SignIn />
      </Grid>
    </Grid>
  )
}

export default App
