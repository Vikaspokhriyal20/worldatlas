import React from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Country from './pages/Country'
import ErrorPage from './pages/ErrorPage'
import AppLayout from './components/layout/AppLayout'
import CountryDetails from './components/layout/CountryDetails'
import Faq from './pages/Faq'



const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout/>,
      errorElement:<ErrorPage/>,
      children: [
        {
          path: '/',
          element: <Home />,
        },

        {
          path: 'about',
          element: <About />,
        },

        {
          path: 'contact',
          element: <Contact />,
        },

        {
          path: 'faq',
          element: <Faq/>,
        },

        {
          path: 'country',
          element: <Country />,
        },
        {
          path: 'country/:id',
          element: <CountryDetails/>,
        }
      ]
    }

  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
