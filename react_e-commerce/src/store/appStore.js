

import { configureStore } from "@reduxjs/toolkit"

import cartReducer from "./cartSlice.js"
import productReducer from "./productSlice.js"




export const appStore = configureStore({


    reducer: {

        cart: cartReducer,
        product: productReducer,

    }


})

