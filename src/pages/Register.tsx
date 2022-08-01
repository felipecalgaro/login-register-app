import { Button, Card, FormControl, TextField } from "@mui/material";

export function Register() {
    return (
        <Card style={{ borderRadius: '10px' }}>
            <h1 style={{ fontFamily: 'Roboto, sans-serif' }}>Welcome back!</h1>
            <FormControl>
                <TextField color='secondary' label='teste' variant='filled' />
                <Button variant="contained" color='secondary' type="submit">Register</Button>
            </FormControl>
        </Card>
    )
}