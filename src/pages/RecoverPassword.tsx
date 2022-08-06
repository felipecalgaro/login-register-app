import { EmailOutlined } from "@mui/icons-material";
import { Box, Button, Card, FormControl, Grid, TextField, Typography } from "@mui/material";
import { FormEvent, useEffect, useRef, useState } from "react";

export function RecoverPassword() {
    const [email, setEmail] = useState<string>('')
    const [isEmailIconFocused, setIsEmailIconFocused] = useState(false)

    function handleEmailSubmit(event: FormEvent) {
        event.preventDefault()
        console.log(email)
    }

    return (
        <Card sx={{ borderRadius: '10px', maxHeight: '800px' }}>
            <Box fontFamily='Roboto' sx={{ padding: { xs: 4, sm: 8 } }} display='flex' justifyContent='start' alignContent='center' minHeight='100%' flexDirection='column' gap={10}>
                <Typography fontWeight={500} align="center" variant="h3">Forgot your password?</Typography>
                <FormControl>
                    <Box component='form' onSubmit={handleEmailSubmit} autoComplete="off" display='flex' alignItems='stretch' flexDirection='column' gap={8}>
                        <Box display='flex' justifyContent='space-between' alignItems='end' gap={2}>
                            <Box display='flex' alignItems='end' onClick={() => setIsEmailIconFocused(!isEmailIconFocused)}>
                                <EmailOutlined aria-label="Password" sx={{ fontSize: 24 }} />
                            </Box>
                            <TextField focused={isEmailIconFocused} fullWidth onChange={e => setEmail(e.target.value)} color='secondary' label='Email' variant='standard' />
                        </Box>
                        <Button sx={{ alignSelf: 'center' }} size='large' disableElevation variant="contained" color='secondary' type="submit">Send</Button>
                    </Box>
                </FormControl>
                <Typography textAlign='center' color='GrayText'>A message will be sent to your e-mail to set or reset your new password</Typography>
            </Box>
        </Card>
    )
}