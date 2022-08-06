import { Button } from "@mui/material"
import { ColorProps } from "../types/colorProps"

interface SubmitButtonProps {
    text: string
    color: ColorProps
}

export function SubmitButton({ text, color }: SubmitButtonProps) {
    return <Button sx={{ alignSelf: 'center' }} size='large' disableElevation variant="contained" color={color} type="submit">{text}</Button>
}