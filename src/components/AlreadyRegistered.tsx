import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ColorProps } from "../types/colorProps";

interface AlreadyRegisteredProps {
  color: ColorProps
}

export function AlreadyRegistered({ color }: AlreadyRegisteredProps) {
  return (
    <Link style={{ textDecoration: 'none', padding: '.5rem 1rem .5rem 1rem', textAlign: 'center' }} to='/'>
      <Typography marginRight={1} color='gray' display='inline'>Already registered?</Typography>
      <Typography color={color} display='inline'>Sign in</Typography>
    </Link>
  )
}