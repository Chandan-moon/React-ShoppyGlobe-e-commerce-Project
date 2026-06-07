

import { useParams } from "react-router-dom";
import useFetch from "../utils/useFetch";
import { useState } from "react";



function ProductDetail() {


    const params = useParams();


    const { data, error, loading } = useFetch();



    const filterProduct = (data.products || []).filter(
        product => product.id == params.id
    );






    return (


        <div className="ProductDetails">

            {

                filterProduct.map((item) => (

                    <div className="cart-card" key={item.id}>

                        <img src={item.images[0]} alt="" width="200px" height="200px" className="cart-img" />

                        <h3 className="cart-title">{item.title}</h3>

                        <h2 className="cart-price">$: {item.price}</h2>


                    </div>


                ))

            }

        </div>

    )


}

export default ProductDetail;