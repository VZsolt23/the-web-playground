import { createTheme, Theme } from '@mui/material'

export const theme = createTheme({
  typography: {
    fontFamily: '"Consolas", cursive, sans-serif',
  },
  colorSchemes: {
    dark: true,
  },
})

export const getTheme = (mode: 'light' | 'dark' | 'system'): Theme => {
  const resolvedMode =
    mode === 'system' ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') : mode

  return createTheme({
    typography: {
      fontFamily: '"Consolas", cursive, sans-serif',
    },
    colorSchemes: {
      dark: true,
    },
    palette: {
      mode: resolvedMode,
      primary: {
        main: '#3ee221',
      },
      background: {
        default: resolvedMode === 'dark' ? '#303030' : '#cdcdcd',
        paper: resolvedMode === 'dark' ? '#303030' : '#cdcdcd',
      },
      text: {
        primary: resolvedMode === 'dark' ? '#3ee221' : '#000000',
        secondary: resolvedMode === 'dark' ? '#207d0e' : '#707070',
        disabled: resolvedMode === 'dark' ? '#1f4c17' : '#a0a0a0',
      },
    },
  })
}
