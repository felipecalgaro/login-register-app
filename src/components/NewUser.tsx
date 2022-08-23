import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export function NewUser() {
  return (
    <Link style={{ textDecoration: 'none', padding: '.5rem 1rem 1rem 1rem', width: '65%', textAlign: 'center' }} to='/register'>
      <Typography marginRight={1} color='gray' display='inline'>New user?</Typography>
      <Typography color='secondary' display='inline'>Register now</Typography>
    </Link>
  )
}