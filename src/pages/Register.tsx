import { Box, Button, Card, FormControl, Grid, TextField, Typography } from "@mui/material";
import SideImage from '../assets/side-image.jpg';

export function Register() {
    return (
        <Card sx={{ borderRadius: '10px', maxHeight: '800px' }}>
            <Grid container justifyContent='space-between' color="primary">
                <Grid item xs={12} lg={8}>
                    <Box fontFamily='Roboto' sx={{ padding: { xs: 4, sm: 8 } }} display='flex' justifyContent='start' alignContent='center' minHeight='100%' flexDirection='column' gap={4}>
                        <Typography fontWeight={500} align="center" variant="h3">Welcome back!</Typography>
                        <FormControl>
                            <Box component='form' autoComplete="off" display='flex' alignItems='stretch' flexDirection='column' gap={8}>
                                <TextField color='secondary' label='Name' variant='standard' />
                                <TextField color='secondary' label='Email' variant='standard' />
                                <TextField color='secondary' label='Password' variant='standard' />
                                <Button sx={{ alignSelf: 'center' }} size='large' disableElevation variant="contained" color='secondary' type="submit">Register</Button>
                            </Box>
                        </FormControl>
                    </Box>
                </Grid>
                <Box component={Grid} sx={{ display: { xs: 'none', lg: 'block' } }} item lg={4}>
                    <Box component='img' width='100%' minHeight='100%' src={SideImage} />
                </Box>
            </Grid>
        </Card>
    )
}