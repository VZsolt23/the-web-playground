import { Link } from 'react-router-dom'
import { Box, useTheme } from '@mui/material'

// TODO: better approach with localization
const links = [
  { label: 'Memory Game', path: '/memory-game' },
  { label: 'Coming soon...', path: '/' },
  { label: 'About', path: '/about' },
]

const HomePage = () => {
  const theme = useTheme()

  return (
    <Box
      display='flex'
      flexDirection={'column'}
      height='90vh'
      justifyContent='center'
      alignItems='center'
      alignContent='center'
    >
      {links.map((l, idx) => (
        <Link key={idx} className={'menu-link'} to={l.path} style={{ color: theme.palette.text.primary }}>
          {l.label}
        </Link>
      ))}
    </Box>
  )
}

export default HomePage
