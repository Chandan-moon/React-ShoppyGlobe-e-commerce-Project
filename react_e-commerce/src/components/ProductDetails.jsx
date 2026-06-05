
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";



function ProductDetails() {


    const params = useParams();


    const [items, setItems] = useState([]);


    const products = items.filter((item) => item.id == params.id);



    let Api = "https://dummyjson.com/products";




    useEffect(() => {

        async function ApiCall() {

            const response = await fetch(Api)

            const data = await response.json();

            setItems(data.products)


        }

        ApiCall();


    }, [])



    return (

        <div className="ProductDetails">

            {

                products.map((item) => (

                    <div className="cart-card">

                        <img src={item.images[0]} alt="" width="200px" height="200px" className="cart-img" />

                        <h3 className="cart-title">{item.title}</h3>

                        <h2 className="cart-price">$: {item.price}</h2>


                    </div>


                ))

            }

        </div>


    )

}

export default ProductDetails;