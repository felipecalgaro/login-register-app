import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ColorProps } from "../types/colorProps";

interface AnchorLinkProps {
  textColor: ColorProps
  paddingStyle: string
  text: [string, string]
  navigateTo: '/' | '/register' | '/recover-password'
}

export function AnchorLink({ textColor, paddingStyle, text, navigateTo }: AnchorLinkProps) {
  return (
    <Link style={{ textDecoration: 'none', padding: paddingStyle, textAlign: 'center' }} to={navigateTo}>
      <Typography marginRight={1} color='gray' display='inline'>{text[0]}</Typography>
      <Typography color={textColor} display='inline'>{text[1]}</Typography>
    </Link>
  )
}