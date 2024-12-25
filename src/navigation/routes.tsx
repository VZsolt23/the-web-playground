import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../pages/Home.tsx'
import AboutPage from '../pages/About.tsx'
import MainLayout from '../layouts/MainLayout.tsx'
import MemoryGamePage from '../pages/MemoryGame.tsx'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    // TODO: errorElement: <Error />
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/memory-game',
        element: <MemoryGamePage />,
      },
    ],
  },
])
