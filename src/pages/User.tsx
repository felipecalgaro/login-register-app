import { Card, Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserPageProps } from "../types/user";

export function User({ user }: UserPageProps) {
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) { // if user reloads the page
      navigate('/')
      return
    }
  })

  return (
    <Grid container height='90%' maxHeight='100vh' maxWidth='100vw' sx={{ backgroundImage: "url('https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1124&q=100')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <Grid container justifyContent='center' alignItems='center' height='90%' maxHeight='100vh'>
        <Card raised sx={{
          px: 8,
          py: 6,
          fontFamily: 'Roboto',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignContent: 'center',
          gap: 2,
          width: '50%',
          backdropFilter: 'blur(14px) saturation(180%)',
          boxShadow: '10px 10px 10px rgba(30,30,30,0.5)'
        }}
        >
          <Typography fontSize={20} variant="h2">ID: {user?.id}</Typography>
          <Typography fontSize={20} variant="h2">Name: {user?.name}</Typography>
          <Typography fontSize={20} variant="h2">Email: {user?.email}</Typography>
          <Typography fontSize={20} variant="h2">Password: {user?.password}</Typography>
          <Typography fontSize={20} variant="h2">Created at: {user?.createdAt?.toString()}</Typography>


        </Card>
      </Grid>
    </Grid>
  )
}