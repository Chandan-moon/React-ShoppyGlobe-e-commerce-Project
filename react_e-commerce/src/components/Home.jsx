

import { useEffect, useState } from "react";
import useFetch from "../utils/useFetch";
import { Link } from "react-router-dom";
import ProductItems from "./ProductItems";




function Home() {


    const { data: products, error, loading } = useFetch();



    if (loading) return <div className="status-message">Loading online marketplace items...</div>;


    if (error) return <div className="status-message error">Error: {error}</div>;




    return (


        <div className="productList">

            {products.products.map((item) => (

                 <ProductItems key={item.id} products={item} />

            ))

            }


        </div>

    )


}

export default Home;

