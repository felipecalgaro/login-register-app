import { Box, Card, FormControl, Grid, Typography } from "@mui/material";
import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FooterImage from '../assets/register-footer-image.jpg';
import SideImage from '../assets/register-side-image.jpg';
import { TextInput } from "../components/TextInput";
import { PasswordInput } from "../components/PasswordInput";
import { SubmitButton } from "../components/SubmitButton";
import { RegisterProps } from "../types/pages";
import { ReturnedUserFromAPI } from "../types/user";
import { AnchorLink } from "../components/AnchorLink";

export function Register({ setUser }: RegisterProps) {
	const [name, setName] = useState<string>('')
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [confirmPassword, setConfirmPassword] = useState<string>('')

	const [screenWidth, setScreenWidth] = useState<number>(screen.width)

	const [isPasswordHidden, setIsPasswordHidden] = useState<boolean>(true)
	const [isConfirmPasswordHidden, setIsConfirmPasswordHidden] = useState<boolean>(true)
	const [isEmailInputFocused, setIsEmailInputFocused] = useState<boolean>(false)
	const [isNameInputFocused, setIsNameInputFocused] = useState<boolean>(false)

	const [errorWhileFetching, setErrorWhileFetching] = useState<boolean>(false)
	const navigate = useNavigate()

	async function handleRegister(event: FormEvent) {
		event.preventDefault()
		if (confirmPassword !== password) return

		await fetch('http://localhost:3003/register', {
			method: 'POST',
			mode: 'cors',
			body: JSON.stringify({ name, password, email }),
			headers: {
				'Content-Type': 'application/json; charset=UTF-8'
			}
		})

		const response = await fetch('http://localhost:3003/register')
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
		<Card sx={{ borderRadius: '10px', minHeight: '720px' }}>
			<Grid container justifyContent='space-between'>
				<Grid item xs={12} lg={8}>
					<Box fontFamily='Roboto' sx={{ padding: { xs: 4, sm: 8 } }} display='flex' justifyContent='start' alignContent='center' minHeight='100%' flexDirection='column' gap={8}>
						<Typography fontWeight={500} align="center" variant="h3">Create your account</Typography>
						<FormControl>
							<Box component='form' onSubmit={handleRegister} autoComplete="off" display='flex' alignItems='stretch' flexDirection='column' gap={6}>
								<TextInput inputType="name" color='primary' setInputValue={setName} isInputFocused={isNameInputFocused} setIsInputFocused={setIsNameInputFocused} />
								<TextInput inputType="email" color='primary' setInputValue={setEmail} isInputFocused={isEmailInputFocused} setIsInputFocused={setIsEmailInputFocused} />
								<PasswordInput isPasswordHidden={isPasswordHidden} setIsPasswordHidden={setIsPasswordHidden} color='primary' label="Password" setPassword={setPassword} />
								<PasswordInput isPasswordHidden={isConfirmPasswordHidden} setIsPasswordHidden={setIsConfirmPasswordHidden} color='primary' label="Confirm password" setPassword={setConfirmPassword} />
								<Typography color='error' sx={{ visibility: (confirmPassword !== password && confirmPassword && password) ? 'visible' : 'hidden' }} textAlign='center'>Passwords given do not match. Please try again.</Typography>
								<Typography color='error' sx={{ visibility: errorWhileFetching ? 'visible' : 'hidden' }} textAlign='center'>Could not create user. Please try again.</Typography>
								<SubmitButton color='primary' text='Register' />
							</Box>
						</FormControl>
						<Box display='flex' justifyContent='center' flexWrap='wrap' columnGap={3}>
							<AnchorLink textColor="primary" text={['Already registered?', 'Sign in']} paddingStyle='.5rem 1rem .5rem 1rem' navigateTo="/" />
							<AnchorLink textColor="primary" text={['Forgot your password?', 'Recover it']} paddingStyle='.5rem 1rem .5rem 1rem' navigateTo="/recover-password" />
						</Box>
					</Box>
				</Grid>
				<Box component={Grid} item xs={12} lg={4}>
					<Box component='img' width='100%' minHeight='100%' src={screenWidth < 1200 ? FooterImage : SideImage} />
				</Box>
			</Grid>
		</Card>
	)
}