import { Calculate, RemoveRedEyeOutlined, VisibilityOffOutlined } from "@mui/icons-material";
import { Box, Button, Card, FormControl, Grid, TextField, Typography } from "@mui/material";
import { FormEvent, useEffect, useState } from "react";
import FooterImage from '../assets/sign-in-footer-image.png';
import SideImage from '../assets/sign-in-side-image.png';


export function SignIn() {
    const [name, setName] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const [screenWidth, setScreenWidth] = useState<number>(screen.width)

    const [isPasswordHidden, setIsPasswordHidden] = useState<boolean>(true)

    const [inputMatches, setInputMatches] = useState<boolean | undefined>(undefined)

    function handleSignIn(event: FormEvent) {
        event.preventDefault()
        console.log(name, password);
    }

    useEffect(() => {
        window.addEventListener('resize', () => setScreenWidth(screen.width))
    }, [])

    const onHoverIconSX = {
        "&:hover": {
            cursor: "pointer",
        },
    };

    return (
        <Card sx={{ borderRadius: '10px', maxHeight: '800px' }}>
            <Grid container justifyContent='space-between'>
                <Grid item xs={12} lg={8}>
                    <Box fontFamily='Roboto' sx={{ padding: { xs: 4, sm: 8 } }} display='flex' justifyContent='start' alignContent='center' minHeight='100%' flexDirection='column' gap={8}>
                        <Typography fontWeight={500} align="center" variant="h3">Welcome back!</Typography>
                        <FormControl>
                            <Box component='form' onSubmit={handleSignIn} autoComplete="off" display='flex' alignItems='stretch' flexDirection='column' gap={8}>
                                <TextField onChange={e => setName(e.target.value)} color='secondary' label='Name' variant='standard' sx={{ ml: 5 }} />
                                <Box display='flex' justifyContent='space-between' alignItems='end' gap={2}>
                                    <Box display='flex' alignItems='end' onClick={() => setIsPasswordHidden(!isPasswordHidden)} sx={onHoverIconSX}>
                                        {isPasswordHidden ? <VisibilityOffOutlined aria-label="Password" sx={{ fontSize: 24 }} /> : <RemoveRedEyeOutlined aria-label="Password" sx={{ fontSize: 24 }} />}
                                    </Box>
                                    <TextField type={isPasswordHidden ? 'password' : 'text'} onChange={e => setPassword(e.target.value)} color='secondary' label='Password' variant='standard' fullWidth />
                                </Box>
                                <Button sx={{ alignSelf: 'center' }} size='large' disableElevation variant="contained" color='secondary' type="submit">Sign in</Button>
                            </Box>
                            {(!inputMatches && inputMatches !== undefined) && (<Typography color='error' textAlign='center' marginTop={6}>Could not find user with the credentials given. Please try again.</Typography>)}
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