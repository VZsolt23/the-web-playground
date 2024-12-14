import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../pages/home'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
])
