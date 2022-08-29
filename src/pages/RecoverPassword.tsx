import { Box, Card, FormControl, Typography } from "@mui/material";
import { FormEvent, useState } from "react";
import { AnchorLink } from "../components/AnchorLink";
import { SubmitButton } from "../components/SubmitButton";
import { TextInput } from "../components/TextInput";

export function RecoverPassword() {
    const [email, setEmail] = useState<string>('')
    const [isEmailInputFocused, setIsEmailInputFocused] = useState<boolean>(false)

    function handleEmailSubmit(event: FormEvent) {
        event.preventDefault()
        console.log(email)
    }

    return (
        <Card sx={{ borderRadius: '10px', maxHeight: '900px', mx: { xs: 0, lg: '8rem' } }}>
            <Box fontFamily='Roboto' sx={{ padding: { xs: 4, sm: 8 } }} display='flex' justifyContent='start' alignContent='center' minHeight='100%' flexDirection='column' gap={10}>
                <Typography fontWeight={500} align="center" sx={{ fontSize: 40 }}>Forgot your password?</Typography>
                <FormControl>
                    <Box component='form' onSubmit={handleEmailSubmit} autoComplete="off" display='flex' alignItems='stretch' flexDirection='column' gap={8}>
                        <TextInput inputType='email' color='secondary' setInputValue={setEmail} isInputFocused={isEmailInputFocused} setIsInputFocused={setIsEmailInputFocused} />
                        <SubmitButton color='secondary' text='Send' />
                    </Box>
                </FormControl>
                <Typography textAlign='center' color='GrayText'>A message will be sent to your e-mail to set or reset your new password</Typography>
                <Box display='flex' justifyContent='center' flexWrap='wrap' columnGap={3}>
                    <AnchorLink textColor="secondary" text={['Already registered?', 'Sign in']} paddingStyle='.5rem 1rem .5rem 1rem' navigateTo="/" />
                    <AnchorLink textColor="secondary" text={['New user?', 'Register now']} paddingStyle='.5rem 1rem 1rem 1rem' navigateTo="/register" />
                </Box>
            </Box>
        </Card>
    )
}