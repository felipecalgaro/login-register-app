import { Grid } from "@mui/material"
import { Register } from "./pages/Register"
import { SignIn } from "./pages/SignIn"
import { RecoverPassword } from "./pages/RecoverPassword"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from "react"
import { User } from "./pages/User"
import { ReturnedUserFromAPI } from "./types/user";

function App() {
  const [user, setUser] = useState<ReturnedUserFromAPI | null>(null)

  return (
    <Grid height='100vh' container justifyContent='center'>
      <Grid marginTop={4} item xs={12} md={8}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignIn setUser={setUser} />} />
            <Route path="/register" element={<Register setUser={setUser} />} />
            <Route path="/recover-password" element={<RecoverPassword />} />
            <Route path="/user/*" element={<User user={user} />} />
            <Route path="*" element='404 not found' />
          </Routes>
        </BrowserRouter>
      </Grid>
    </Grid>
  )

}

export default App
