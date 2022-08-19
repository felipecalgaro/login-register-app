import { Box, Button, Card, FormControl, Grid, TextField, Typography } from "@mui/material";
import { FormEvent, useEffect, useState } from "react";
import FooterImage from '../assets/sign-in-footer-image.png';
import SideImage from '../assets/sign-in-side-image.png';
import { PasswordInput } from "../components/PasswordInput";
import { SubmitButton } from "../components/SubmitButton";
import { TextInput } from "../components/TextInput";
import { ReturnedUserFromDatabase } from "../types/User";


export function SignIn() {
    const [name, setName] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const [screenWidth, setScreenWidth] = useState<number>(screen.width)

    const [isPasswordHidden, setIsPasswordHidden] = useState<boolean>(true)
    const [isNameInputFocused, setIsNameInputFocused] = useState<boolean>(false)

    const [inputMatches, setInputMatches] = useState<boolean | undefined>(undefined)

    const [userData, setUserData] = useState<ReturnedUserFromDatabase | null>(null)

    async function handleSignIn(event: FormEvent) {
        event.preventDefault()
        const userData = {
            name,
            password
        }
        fetch('http://localhost:3003/', {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(userData),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }
        }).then(() => {
            fetch('http://localhost:3003/')
                .then(res => res.json())
                .then(data => setUserData(data))
        })
    }

    useEffect(() => {
        console.log(userData)
    }, [userData])

    useEffect(() => {
        window.addEventListener('resize', () => setScreenWidth(screen.width))
    }, [])

    return (
        <Card sx={{ borderRadius: '10px', maxHeight: '800px' }}>
            <Grid container justifyContent='space-between'>
                <Grid item xs={12} lg={8}>
                    <Box fontFamily='Roboto' sx={{ padding: { xs: 4, sm: 8 } }} display='flex' justifyContent='start' alignContent='center' minHeight='100%' flexDirection='column' gap={8}>
                        <Typography fontWeight={500} align="center" variant="h3">Welcome back!</Typography>
                        <FormControl>
                            <Box component='form' onSubmit={handleSignIn} autoComplete="off" display='flex' alignItems='stretch' flexDirection='column' gap={8}>
                                <TextInput inputType="name" color="secondary" isInputFocused={isNameInputFocused} setInputValue={setName} setIsInputFocused={setIsNameInputFocused} />
                                <PasswordInput isPasswordHidden={isPasswordHidden} color='secondary' label="Password" setIsPasswordHidden={setIsPasswordHidden} setPassword={setPassword} />
                                <Typography color='error' sx={{ visibility: (!inputMatches && inputMatches !== undefined) ? 'visible' : 'hidden' }} textAlign='center'>Could not find user with the credentials given. Please try again.</Typography>
                                <SubmitButton text='Sign in' color="secondary" />
                            </Box>
                        </FormControl>
                    </Box>
                </Grid>
                <Box component={Grid} item xs={12} lg={4}>
                    <Box component='img' width='100%' minHeight='100%' src={screenWidth < 1200 ? FooterImage : SideImage} />
                </Box>
            </Grid>
        </Card>
    )
}