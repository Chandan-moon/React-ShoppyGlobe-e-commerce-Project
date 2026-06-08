
import { createSlice } from "@reduxjs/toolkit"



const cartSlice = createSlice({

    name: 'cart',
    initialState: {

        items: [],

    },

    reducers: {

        addToCart: (state, action) => {

            // state.items.unshift(action.payload)

            const existingItem = state.items.find(item => item.id === action.payload.id);

            if (existingItem) {

                existingItem.quantity += 1; // Increase quantity if already in cart

            }
            else {

                state.items.push({ ...action.payload, quantity: 1 });
            }

        },

        removeItem: (state, action) => {

            state.items = state.items.filter((book) => book.id !== action.payload);

        },

        updateQuantity: (state, action) => {

            const { id, quantity } = action.payload;

            const item = state.items.find(item => item.id === id);

            if (item && quantity >= 1) {

                item.quantity = quantity;

            }
        },

        clearCart: (state, action) => {

            state.items.length = 0;    // setting state empty   

        }


    }


})


export const { addToCart, removeItem, updateQuantity, clearCart } = cartSlice.actions;


export default cartSlice.reducer;