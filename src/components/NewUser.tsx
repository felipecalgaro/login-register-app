import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ColorProps } from "../types/colorProps";

interface ForgotPasswordProps {
  color: ColorProps
}

export function NewUser({ color }: ForgotPasswordProps) {
  return (
    <Link style={{ textDecoration: 'none', padding: '.5rem 1rem 1rem 1rem', width: '65%', textAlign: 'center' }} to='/register'>
      <Typography marginRight={1} color='gray' display='inline'>New user?</Typography>
      <Typography color={color} display='inline'>Register now</Typography>
    </Link>
  )
}