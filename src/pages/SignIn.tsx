import { Box, Card, FormControl, Grid, Typography } from "@mui/material";
import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FooterImage from '../assets/sign-in-footer-image.png';
import SideImage from '../assets/sign-in-side-image.png';
import { PasswordInput } from "../components/PasswordInput";
import { SubmitButton } from "../components/SubmitButton";
import { TextInput } from "../components/TextInput";
import { ReturnedUserFromDatabase } from "../types/user";
import { SignInProps } from "../types/pages";
import { ReturnedUserFromAPI } from "../types/user";
import { AnchorLink } from "../components/AnchorLink";

export function SignIn({ setUser }: SignInProps) {
    const [errorWhileFetching, setErrorWhileFetching] = useState<boolean>(false)
    const navigate = useNavigate()

    const [name, setName] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const [screenWidth, setScreenWidth] = useState<number>(screen.width)

    const [isPasswordHidden, setIsPasswordHidden] = useState<boolean>(true)
    const [isNameInputFocused, setIsNameInputFocused] = useState<boolean>(false)

    async function handleSignIn(event: FormEvent) {
        event.preventDefault()

        await fetch('http://localhost:3003/', {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({ name, password }),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }
        })

        const response = await fetch('http://localhost:3003/')
        const data: ReturnedUserFromAPI = await response.json()

        if (data) {
            setUser(data)
            navigate(`/user/${data.id}`)
        } else setErrorWhileFetching(true)
    }

    useEffect(() => {
        window.addEventListener('resize', () => setScreenWidth(screen.width))
    }, [])

    return (
        <Card sx={{ borderRadius: '10px', minHeight: '750px' }}>
            <Grid container justifyContent='space-between'>
                <Grid item xs={12} lg={8}>
                    <Box fontFamily='Roboto' sx={{ padding: { xs: 4, sm: 8 } }} display='flex' justifyContent='start' alignContent='center' minHeight='100%' flexDirection='column' gap={8}>
                        <Typography fontWeight={500} align="center" variant="h3">Welcome back!</Typography>
                        <FormControl>
                            <Box component='form' onSubmit={handleSignIn} autoComplete="off" display='flex' alignItems='stretch' flexDirection='column' gap={8}>
                                <TextInput inputType="name" color="secondary" isInputFocused={isNameInputFocused} setInputValue={setName} setIsInputFocused={setIsNameInputFocused} />
                                <PasswordInput isPasswordHidden={isPasswordHidden} color='secondary' label="Password" setIsPasswordHidden={setIsPasswordHidden} setPassword={setPassword} />
                                <Typography color='error' sx={{ visibility: errorWhileFetching ? 'visible' : 'hidden' }} textAlign='center'>Could not find user with the credentials given. Please try again.</Typography>
                                <SubmitButton text='Sign in' color="secondary" />
                            </Box>
                        </FormControl>
                        <Box display='flex' justifyContent='center' flexWrap='wrap' columnGap={3}>
                            <AnchorLink textColor="secondary" text={['New user?', 'Register now']} paddingStyle='.5rem 1rem 1rem 1rem' navigateTo="/register" />
                            <AnchorLink textColor="secondary" text={['Forgot your password?', 'Recover it']} paddingStyle='.5rem 1rem .5rem 1rem' navigateTo="/recover-password" />
                        </Box>
                    </Box>
                </Grid>
                <Box component={Grid} item xs={12} lg={4}>
                    <Box component='img' width='100%' height='auto' minHeight='100%' src={screenWidth < 1200 ? FooterImage : SideImage} />
                </Box>
            </Grid>
        </Card>
    )
}