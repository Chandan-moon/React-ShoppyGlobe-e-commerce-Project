

import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

import CartItems from "./CartItems";


function Cart() {


    const cartItems = useSelector(item => item.cart.items);


    const totalCost = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);




    return (

        <div className="container cart-page">

            <h2>Your Shopping Cart</h2>

            {cartItems.length === 0 ? (

                <div className="empty-cart">

                    <p>Your cart feels light. Let's add some items!</p>

                    <Link to="/" className="empty-btn">Go Shopping</Link>

                </div>

            ) : (

                <div className="cart-layout">

                    <div className="cart-list">

                        {cartItems.map(item => (
                            <CartItems key={item.id} item={item} />
                        ))}

                    </div>

                    <div className="cart-summary">

                        <h3>Order Summary</h3>

                        <div className="summary-row">
                            <span>Items Subtotal:</span>
                            <span className="total-cost">$
                                <span className="total-cost-number">{totalCost.toFixed(2)}</span>
                            </span>
                        </div>

                        <Link to="/checkout" className="checkout-btn">Proceed to Checkout</Link>

                    </div>

                </div>
            )}

        </div>

    )


}


export default Cart;