import { Box, IconButton, Typography, useTheme } from '@mui/material'
import { useTranslation } from 'react-i18next'

import GitHubIcon from '@mui/icons-material/GitHub'
import { useEffect, useState } from 'react'

const Footer = () => {
  const [version, setVersion] = useState<string>('')

  const theme = useTheme()
  const { t } = useTranslation()

  const year = new Date().getFullYear()

  useEffect(() => {
    getVersion()
  }, [])

  const getVersion = async () => {
    const repo = 'VZsolt23/the-web-playground'
    const url = `https://api.github.com/repos/${repo}/tags`
    await fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          const latestTag = data[0].name
          setVersion(latestTag)
        }
      })
      .catch(error => console.error('Error fetching tags:', error))
  }

  return (
    <footer
      style={{
        padding: theme.spacing(0.25, 0),
        width: '100%',
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Box
        display='flex'
        flexDirection='row'
        justifyContent={'space-between'}
        alignItems={'center'}
        alignContent={'center'}
        px={2}
      >
        <IconButton href='https://github.com/VZsolt23/the-web-playground' target='_blank'>
          <GitHubIcon />
        </IconButton>
        <Typography variant='subtitle1' mx={2}>
          {t('FooterText', { year: year })}
        </Typography>
        <Typography variant='subtitle1'>{version || 'v0.0.0'}</Typography>
      </Box>
    </footer>
  )
}

export default Footer
