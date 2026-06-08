

import { useEffect } from "react";
import useFetch from "../utils/useFetch";
import { Link } from "react-router-dom";
import ProductItems from "./ProductItems";
import { useSelector } from "react-redux";




function Home() {


    const { data: products, error, loading } = useFetch();


    const searchQuery = useSelector(data => data.product.searchQuery);

    
    //filter products via Redux search state string match
    const filteredProducts = (products.products || []).filter(product => product.title.toLowerCase().includes(searchQuery.toLowerCase()));
    
    
    
    if (loading) return <div className="status-message">Loading online marketplace items...</div>;
    
    
    if (error) return <div className="status-message error">Error: {error}</div>;





    return (


        <div>

            <h2 className="home-header">Explore the Products</h2>

          <div>

            {filteredProducts.length === 0 ? (

                <h3>No products match your current search.</h3>

            ) : (

                <div className="product-grid">
                    {filteredProducts.map(item => (
                        <ProductItems key={item.id} products={item} />
                    ))}
                </div>

            )}

            </div>


        </div>

    )


}



export default Home;

