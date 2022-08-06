import { RemoveRedEyeOutlined, VisibilityOffOutlined } from "@mui/icons-material"
import { Box, TextField } from "@mui/material"
import { ColorProps } from "../types/colorProps"

interface PasswordInputProps {
    color: ColorProps
    setPassword: (email: string) => void
    isPasswordHidden: boolean
    setIsPasswordHidden: (isPasswordHidden: boolean) => void
    label: string
}

export function PasswordInput({
    color,
    setPassword,
    isPasswordHidden,
    setIsPasswordHidden,
    label
}: PasswordInputProps) {

    const onHoverIconSX = {
        "&:hover": {
            cursor: "pointer",
        },
    };

    return (
        <Box display='flex' justifyContent='space-between' alignItems='end' gap={2}>
            <Box display='flex' alignItems='end' onClick={() => setIsPasswordHidden(!isPasswordHidden)} sx={onHoverIconSX}>
                {isPasswordHidden ? <VisibilityOffOutlined aria-label={label} sx={{ fontSize: 24 }} /> : <RemoveRedEyeOutlined aria-label={label} sx={{ fontSize: 24 }} />}
            </Box>
            <TextField type={isPasswordHidden ? 'password' : 'text'} onChange={e => setPassword(e.target.value)} color={color} label={label} variant='standard' fullWidth />
        </Box>
    )
}