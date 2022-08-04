import { createTheme } from '@mui/material/styles'

const theme = createTheme({
    palette: {
        primary: {
            light: '#8736e3',
            main: '#6a27b8',
            dark: '#521e8f',
            contrastText: '#fff'
        },
        secondary: {
            light: '#f5a169',
            main: '#fa802f',
            dark: '#a85a25',
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
        ].join(''),
        button: {
            textTransform: 'none',
        }
    }
})

export default theme