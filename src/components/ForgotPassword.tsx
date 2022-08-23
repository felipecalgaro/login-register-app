import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export function ForgotPassword() {
  return (
    <Link style={{ textDecoration: 'none', padding: '.5rem 1rem .5rem 1rem' }} to='/recover-password'>
      <Typography marginRight={1} color='gray' display='inline'>Forgot your password?</Typography>
      <Typography color='secondary' display='inline'>Recover it</Typography>
    </Link>
  )
}