
import { createSlice } from "@reduxjs/toolkit"



const cartSlice = createSlice({

    name: 'cart',
    initialState: {

        items: [],

    },

    reducers: {

        addToCart: (state, action) => {

            state.items.unshift(action.payload)

        },

        removeItem: (state, action) => {

            state.items = state.items.filter((book) => book.id !== action.payload);

        },

        clearCart: (state, action) => {

            state.items.length = 0;    // setting state empty   

        }


    }


})


export const { addToCart, removeItem, clearCart } = cartSlice.actions;


export default cartSlice.reducer;