

import { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';

import { clearCart } from '../store/cartSlice';




function Checkout() {


    const cartItems = useSelector(state => state.cart.items);

    const totalCost = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    const dispatch = useDispatch();

    const navigate = useNavigate();


    const [formData, setFormData] = useState({ name: '', email: '', address: '' });



    function handleInputChange(e) {

        setFormData({ ...formData, [e.target.name]: e.target.value })

    }



    function handlePlaceOrder(e) {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.address) {

            alert("Please fill in all remaining fields before finalizing checkout.")

            return;

        }

        alert("Order placed successfully!")

        dispatch(clearCart());   // Empty the cart

        navigate('/'); // Automatic home redirection

    }


    if (cartItems.length === 0) {

        return <div className="container status-message">No active item structures found ready for custom tracking.</div>

    }




    return (

        <div className="container">

            <h2>Checkout Details</h2>

            <div className="checkout-grid">

                <form onSubmit={handlePlaceOrder} className="checkout-form">

                    <h3>Shipping Information</h3>

                    <div className="form-group">

                        <label>Full Name</label>
                        <input type="text" name="name" required value={formData.name} onChange={handleInputChange} />

                    </div>

                    <div className="form-group">

                        <label>Email Address</label>
                        <input type="email" name="email" required value={formData.email} onChange={handleInputChange} />

                    </div>

                    <div className="form-group">

                        <label>Delivery Address</label>
                        <textarea name="address" required rows="3" value={formData.address} onChange={handleInputChange}></textarea>

                    </div>


                    <button type="submit" className="place-order-btn">Place Order</button>


                </form>



                <div className="order-review">

                    <h3>Review Your Items</h3>

                    <div className="review-items-list">

                        {cartItems.map(item => (

                            <div key={item.id} className="review-item">

                                <span>{item.title} (x{item.quantity})</span>
                                <span>${(item.price * item.quantity).toFixed(2)}</span>

                            </div>


                        ))}

                    </div>

                    <hr />

                    <div className="review-total">

                        <strong>Total Amount:</strong>
                        <strong>${totalCost.toFixed(2)}</strong>

                    </div>

                </div>

            </div>



        </div>

    )



}



export default Checkout;