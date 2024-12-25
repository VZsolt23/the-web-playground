import { Paper, Typography } from '@mui/material'
import Logo from '../assets/images/green-twp-logo.png'

const AboutPage = () => {
  return (
    <Paper
      sx={{ p: 3, m: 5, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
      elevation={24}
    >
      <Typography variant='h2'>{'The Web Playground'}</Typography>
      <img src={Logo} alt='logo' title='Logo' height={250} />
    </Paper>
  )
}

export default AboutPage
