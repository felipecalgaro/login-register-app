import { Box, Button, Card, FormControl, Grid, TextField, Typography } from "@mui/material";
import { FormEvent, useEffect, useState } from "react";
import FooterImage from '../assets/footer-image.jpg';
import SideImage from '../assets/side-image.jpg';


export function Register() {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const [screenWidth, setScreenWidth] = useState<number>(screen.width)

    function handleRegister(event: FormEvent) {
        event.preventDefault()
        console.log(name, email, password);
    }

    useEffect(() => {
        window.addEventListener('resize', () => setScreenWidth(screen.width))
    }, [])

    return (
        <Card sx={{ borderRadius: '10px', maxHeight: '800px' }}>
            <Grid container justifyContent='space-between' color="primary">
                <Grid item xs={12} lg={8}>
                    <Box fontFamily='Roboto' sx={{ padding: { xs: 4, sm: 8 } }} display='flex' justifyContent='start' alignContent='center' minHeight='100%' flexDirection='column' gap={4}>
                        <Typography fontWeight={500} align="center" variant="h3">Welcome back!</Typography>
                        <FormControl>
                            <Box component='form' onSubmit={handleRegister} autoComplete="off" display='flex' alignItems='stretch' flexDirection='column' gap={8}>
                                <TextField onChange={e => setName(e.target.value)} color='secondary' label='Name' variant='standard' />
                                <TextField onChange={e => setEmail(e.target.value)} color='secondary' label='Email' variant='standard' />
                                <TextField onChange={e => setPassword(e.target.value)} color='secondary' label='Password' variant='standard' />
                                <Button sx={{ alignSelf: 'center' }} size='large' disableElevation variant="contained" color='secondary' type="submit">Register</Button>
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