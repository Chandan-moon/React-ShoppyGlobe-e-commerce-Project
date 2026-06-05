import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Error from './components/Error.jsx';
import ProductList from './components/ProductList.jsx';
import ProductDetails from './components/ProductDetails.jsx';



const appRouter = createBrowserRouter([

  {
   
    path: "/",
    element: <App />, 

   children: [

    {
     path: "/",
     element: <ProductList />

    },

    {

      path: "/products/:id",
      element: <ProductDetails />

    }
     


   ], 

    errorElement: <Error />
  },

])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
)
