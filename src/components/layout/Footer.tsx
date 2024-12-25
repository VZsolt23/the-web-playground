import { IconButton, Typography, useTheme } from '@mui/material'
import { useTranslation } from 'react-i18next'

import GitHubIcon from '@mui/icons-material/GitHub'

const Footer = () => {
  const theme = useTheme()
  const { t } = useTranslation()

  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        padding: theme.spacing(1, 0),
        marginTop: 'auto',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Typography variant={'subtitle1'}>{t('FooterText', { year: year })} -</Typography>
      <IconButton href={'https://github.com/VZsolt23/the-web-playground'} target={'_blank'}>
        <GitHubIcon />
      </IconButton>
    </footer>
  )
}

export default Footer
