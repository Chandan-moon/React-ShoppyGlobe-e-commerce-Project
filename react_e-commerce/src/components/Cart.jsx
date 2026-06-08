import { useState } from "react";
import { useSelector } from "react-redux";

import CartItems from "./CartItems";


function Cart() {


    const cartItems = useSelector(item => item.cart.items);

    console.log("check", cartItems);

    const [items, setItems] = useState([])

    // console.log("check2 ", items);


    // if (cartItems.length > 0) {

    //     setItems(cartItems)
    // }


    return (

        <div>

            {
                cartItems.map(item => (

                    <CartItems key={item.id} items={item} />

               ))
            }


        </div>

    )


}


export default Cart;