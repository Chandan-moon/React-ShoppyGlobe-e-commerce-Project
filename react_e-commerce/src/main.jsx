import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from './components/Error.jsx';
import ProductList from './components/ProductList.jsx';

import Home from './components/Home.jsx';

import ProductDetail from './components/ProductDetail.jsx';
import Cart from './components/Cart.jsx';
import Checkout from './components/CheckOut.jsx';



const appRouter = createBrowserRouter([

  {

    path: "/",
    element: <App />,

    children: [

      {

        path: "/",
        element: <Home />


      },

      {
        path: "/cart",
        element: <Cart />

      },

      {

        path: "/product/:id",
        element: <ProductDetail />

      },

      {

        path: "/checkout",
        element: <Checkout />

      },

    ],

    errorElement: <Error />
  },

])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
)
