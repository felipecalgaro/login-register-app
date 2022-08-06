import { EmailOutlined, PersonOutlineOutlined } from "@mui/icons-material"
import { Box, TextField } from "@mui/material"
import { ColorProps } from "../types/colorProps"

interface InputProps {
    inputType: 'email' | 'name'
    color: ColorProps
    setInputValue: (inputValue: string) => void
    isInputFocused: boolean
    setIsInputFocused: (isInputFocused: boolean) => void
}

export function TextInput({
    inputType,
    color,
    setInputValue,
    isInputFocused,
    setIsInputFocused
}: InputProps) {

    return (
        <Box display='flex' justifyContent='space-between' alignItems='end' gap={2}>
            {inputType === 'email' ? (
                <>
                    <Box display='flex' alignItems='end' onClick={() => setIsInputFocused(!isInputFocused)}>
                        <EmailOutlined aria-label="Email" sx={{ fontSize: 24 }} />
                    </Box>
                    <TextField type='email' onClick={() => setIsInputFocused(true)} focused={isInputFocused} fullWidth onChange={e => setInputValue(e.target.value)} color={color} label='Email' variant='standard' />
                </>
            ) : (
                <>
                    <Box display='flex' alignItems='end' onClick={() => setIsInputFocused(!isInputFocused)}>
                        <PersonOutlineOutlined aria-label="Name" sx={{ fontSize: 24 }} />
                    </Box>
                    <TextField type='text' onClick={() => setIsInputFocused(true)} focused={isInputFocused} fullWidth onChange={e => setInputValue(e.target.value)} color={color} label='Name' variant='standard' />
                </>
            )}
        </Box>
    )
}