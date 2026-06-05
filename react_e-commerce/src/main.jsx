import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Error from './components/Error.jsx';



const appRouter = createBrowserRouter([

  {
   
    path: "/",
    element: <App />, 

   children: [

     

   ], 

    errorElement: <Error />
  },

])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
)
