import { useState } from "react";



function Cart(props) {

    //console.log(props)



return (


    <div className="cart-card">

        <img src={props.productDetails.images[0]} alt="" width="200px" height="200px" className="cart-img"/>

        <h3 className="cart-title">{props.productDetails.title}</h3>

        <h2 className="cart-price">$: {props.productDetails.price}</h2>


    </div>

)


}


export default Cart;