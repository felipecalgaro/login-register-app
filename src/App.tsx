import { Grid } from "@mui/material"
import { Register } from "./pages/Register"
import { SignIn } from "./pages/SignIn"
import { RecoverPassword } from "./pages/RecoverPassword"
import { useEffect, useLayoutEffect, useState } from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Grid height='100vh' container justifyContent='center'>
      <Grid marginTop={4} item xs={12} md={8}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/register" element={<Register />} />
            <Route path="/recover+password" element={<RecoverPassword />} />
            <Route path='*' element={<h1>404</h1>} />
          </Routes>
        </BrowserRouter>
      </Grid>
    </Grid>
  )
}

export default App
