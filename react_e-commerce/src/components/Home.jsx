

import { useEffect, useState } from "react";
import useFetch from "../utils/useFetch";
import { Link } from "react-router-dom";




function Home() {


    const { data: products, error, loading } = useFetch();



    if (loading) return <div className="status-message">Loading online marketplace items...</div>;


    if (error) return <div className="status-message error">Error: {error}</div>;




    return (


        <div className="productList">

            {products.products.map((item) => (

                <Link to={`/product/${item.id}`} key={item.id} className="link-line">

                    <div className="cart-card" key={item.id}>

                        <img src={item.images[0]} alt="" width="200px" height="200px" className="cart-img" />

                        <h3 className="cart-title">{item.title}</h3>

                        <h2 className="cart-price">$: {item.price}</h2>


                    </div>

                </Link>

            ))

            }


        </div>

    )


}

export default Home;

