import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './Pages/Home'
import TeamSelectionPage from './Pages/TeamSelectionPage'

function App() {
  
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/predict",
    element: <TeamSelectionPage />,
  }
])
  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
