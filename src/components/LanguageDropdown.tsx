import * as React from 'react'
import { ReactElement, useState } from 'react'
import { Box, IconButton, MenuItem } from '@mui/material'
import TranslateIcon from '@mui/icons-material/Translate'
import Menu from '@mui/material/Menu'
import { useTranslation } from 'react-i18next'
import { IconButtonOwnProps } from '@mui/material/IconButton'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import Flag from 'react-world-flags'

type Language = {
  name: string
  code: string
  icon: ReactElement
}

const languages: Language[] = [
  { name: 'Magyar', code: 'hu', icon: <Flag code='hu' height={16} /> },
  { name: 'English', code: 'en', icon: <Flag code='gb' height={16} /> },
  { name: 'Deutsch', code: 'de', icon: <Flag code='de' height={16} /> },
  { name: 'Français', code: 'fr', icon: <Flag code='fr' height={16} /> },
  { name: 'Español', code: 'es', icon: <Flag code='es' height={16} /> },
  { name: '日本語', code: 'ja', icon: <Flag code='jp' height={16} /> },
]

const LanguageDropdown = (props: IconButtonOwnProps) => {
  const { i18n } = useTranslation()

  const [language, setLanguage] = useState<string>(i18n.language)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang)
    i18n.changeLanguage(lang).then(() => console.info('Language changed successfully.')) // TODO: snackbar
  }

  return (
    <React.Fragment>
      <IconButton onClick={handleClick} disableRipple size='small' aria-haspopup='true'>
        <TranslateIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id='language-menu'
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        aria-controls={open ? 'language-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        {...props}
        slotProps={{
          paper: {
            variant: 'outlined',
            elevation: 0,
            sx: {
              my: '4px',
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {languages.map((lang, idx) => (
          <MenuItem key={idx} selected={language === lang.code} onClick={() => handleLanguageChange(lang.code)}>
            <Box marginRight={1} display='flex' alignItems='center'>
              {lang.icon}
            </Box>
            {lang.name}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  )
}

export default LanguageDropdown
