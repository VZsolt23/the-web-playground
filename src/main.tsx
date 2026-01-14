import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { routes } from './navigation/routes.tsx'

import './i18n.js'
import { SnackbarProvider } from 'notistack'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SnackbarProvider maxSnack={1}>
      <RouterProvider router={routes} />
    </SnackbarProvider>
  </StrictMode>,
)
