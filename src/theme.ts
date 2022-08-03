import { createTheme } from '@mui/material/styles'

const theme = createTheme({
    palette: {
        primary: {
            light: '#222222',
            main: '#161616',
            dark: '#0d0d0d',
            contrastText: '#fff'
        },
        secondary: {
            light: '#ff825c',
            main: '#fa5e2f',
            dark: '#df3908',
            contrastText: '#000'
        },
        mode: 'dark'
    },
    typography: {
        fontFamily: [
            '-apple-system',
            'Roboto',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join('')
    }
})

export default theme