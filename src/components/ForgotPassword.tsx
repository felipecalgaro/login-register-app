import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ColorProps } from "../types/colorProps";

interface ForgotPasswordProps {
  color: ColorProps
}

export function ForgotPassword({ color }: ForgotPasswordProps) {
  return (
    <Link style={{ textDecoration: 'none', padding: '.5rem 1rem .5rem 1rem' }} to='/recover-password'>
      <Typography marginRight={1} color='gray' display='inline'>Forgot your password?</Typography>
      <Typography color={color} display='inline'>Recover it</Typography>
    </Link>
  )
}