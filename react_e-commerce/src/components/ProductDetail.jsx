

import { Link, useParams } from "react-router-dom";
import useFetch from "../utils/useFetch";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";




function ProductDetail() {


    const params = useParams();

    const dispatch = useDispatch()


    const { data, error, loading } = useFetch();



    const filterProduct = (data.products || []).filter(
        product => product.id == params.id
    );



    if (loading) return <div className="status-message">Loading product profile...</div>;
    if (error) return <div className="status-message error">Error: {error}</div>;
    if (!data) return <div className="status-message">No product information found.</div>;





    return (


        <div className="ProductDetails">

            <Link to="/" className="back-link">← Back to Products</Link>

            {

                filterProduct.map((item) => (

                    <div className="cart-card2" key={item.id}>

                        <div className="img-container">

                            <img src={item.images[0]} alt="" width="200px" height="200px" className="cart-img2" />

                        </div>

                        <div className="text-container">


                            <h3 className="cart-title2">{item.title}</h3>

                            <p className="cart-category"> Category: <span className="span-category">{item.category}</span></p>

                            <p className=""> {item.description}</p>

                            <h2 className="cart-price2">$: {item.price}</h2>

                            <button onClick={() => dispatch(addToCart(item))} className="product-btn">Add to Cart</button>


                        </div>


                    </div>


                ))

            }

        </div>

    )


}

export default ProductDetail;