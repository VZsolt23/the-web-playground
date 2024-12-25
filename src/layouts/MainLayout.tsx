import { CssBaseline, ThemeProvider } from '@mui/material'
import Header from '../components/layout/Header.tsx'
import Footer from '../components/layout/Footer.tsx'
import { Outlet } from 'react-router-dom'

import '../index.css'
import { theme } from '../theme/theme.ts'

const MainLayout = () => {
  return (
    <ThemeProvider theme={theme} defaultMode={'dark'}>
      <CssBaseline />
      <Header />
      <Outlet />
      <Footer />
    </ThemeProvider>
  )
}

export default MainLayout
