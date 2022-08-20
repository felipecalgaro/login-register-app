import { Grid } from "@mui/material"
import { Register } from "./pages/Register"
import { SignIn } from "./pages/SignIn"
import { RecoverPassword } from "./pages/RecoverPassword"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { createContext, useContext, useState } from "react"
import { ReturnedUserFromDatabase } from "./types/user"
import { User } from "./pages/User"

function App() {
  const [user, setUser] = useState<ReturnedUserFromDatabase | null>(null)

  return (
    <Grid height='100vh' container justifyContent='center'>
      <Grid marginTop={4} item xs={12} md={8}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignIn setUser={setUser} user={user} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/recover-password" element={<RecoverPassword />} />
            <Route path="/user/*" element={<User user={user} />} />
            <Route path="*" element='404 not found' />
          </Routes>
        </BrowserRouter>
      </Grid>
    </Grid>
  )

}

// passar user de sibling pro outro

export default App
