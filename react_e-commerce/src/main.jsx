import { StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from "react-router-dom";


import React, { lazy, Suspense } from 'react';



// Implementation of lazy loading across page bundles
const Home = lazy(() => import("./components/Home.jsx"));
const ProductDetail = lazy(() => import("./components/ProductDetail.jsx"));
const Cart = lazy(() => import("./components/Cart.jsx"));
const Checkout = lazy(() => import("./components/Checkout.jsx"));
const Error = lazy(() => import("./components/Error.jsx"));





const appRouter = createBrowserRouter([

  {

    path: "/",
    element: <App />,

    children: [

      {

        path: "/",
        element: (
          <Suspense fallback={<div>Loading requested module layer...</div>}>
            <Home />
          </Suspense>
        ),


      },

      {
        path: "/cart",
        element: (
          <Suspense fallback={<div>Loading requested module layer...</div>}>
            <Cart />
          </Suspense>
        ),

      },

      {

        path: "/product/:id",
        element: (
          <Suspense fallback={<div>Loading requested module layer...</div>}>
            <ProductDetail />
          </Suspense>
        ),

      },

      {

        path: "/checkout",
        element: (
          <Suspense fallback={<div>Loading requested module layer...</div>}>
            <Checkout />
          </Suspense>
        ),

      },

    ],

    errorElement: (

      <Suspense fallback={<div>Loading Error Elements...</div>}>
        <Error />
      </Suspense>

    )
  },

])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
)
