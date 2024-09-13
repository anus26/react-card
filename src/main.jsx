import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout.jsx'
import Home from './Pages/Home.jsx'
import Contact from './Pages/Contact.jsx'
import Product from './Pages/Product.jsx'
import Service from './Pages/Service.jsx'
import SingleStudent from './Pages/SingleStudent.jsx'



const router =createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:'',
        element:<Home/>
      },
      {
        path:'contact',
        element:<Contact/>
      },
      {
        path:'product',
        element:<Product/>
      },
      {
        path:'service',
        element:<Service/>
      },
      {

        path:'singleStudent/:id',
        element:<SingleStudent/>
      },
      {
        path:'*',
        element:<h1>Not found!</h1>
      }
    ]
  }
])









createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>

  </RouterProvider>
    
)