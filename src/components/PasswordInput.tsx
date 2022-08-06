import { RemoveRedEyeOutlined, VisibilityOffOutlined } from "@mui/icons-material"
import { Box, TextField } from "@mui/material"
import { ColorProps } from "../types/colorProps"

interface EmailInputProps {
    color: ColorProps
    setPassword: (email: string) => void
    isPasswordHidden: boolean
    setIsPasswordHidden: (isPasswordHidden: boolean) => void
}

export function PasswordInput({
    color,
    setPassword,
    isPasswordHidden,
    setIsPasswordHidden
}: EmailInputProps) {

    const onHoverIconSX = {
        "&:hover": {
            cursor: "pointer",
        },
    };

    return (
        <Box display='flex' justifyContent='space-between' alignItems='end' gap={2}>
            <Box display='flex' alignItems='end' onClick={() => setIsPasswordHidden(!isPasswordHidden)} sx={onHoverIconSX}>
                {isPasswordHidden ? <VisibilityOffOutlined aria-label="Password" sx={{ fontSize: 24 }} /> : <RemoveRedEyeOutlined aria-label="Password" sx={{ fontSize: 24 }} />}
            </Box>
            <TextField type={isPasswordHidden ? 'password' : 'text'} onChange={e => setPassword(e.target.value)} color={color} label='Password' variant='standard' fullWidth />
        </Box>
    )
}