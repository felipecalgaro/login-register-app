import { Grid } from "@mui/material"
import { Register } from "./pages/Register"

function App() {
  return (
    <Grid container justifyContent='center' spacing={2} color="primary">
      <Grid item xs={12} md={8}>
        <Register />
      </Grid>
    </Grid>
  )
}

export default App
