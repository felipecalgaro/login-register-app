import { createTheme } from '@mui/material'

const theme = createTheme({
    palette: {
        primary: {
            light: '#222222',
            main: '#161616',
            dark: '#0d0d0d',
            contrastText: '#fff'
        },
        secondary: {
            light: '#fa5e2f',
            main: '#df3908',
            dark: '#ad2d07',
            contrastText: '#000'
        }
    }
})

export default theme