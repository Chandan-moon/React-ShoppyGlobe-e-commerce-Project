import { useEffect, useState } from "react";

import Cart from "./Cart";
import { Link } from "react-router-dom";


function ProductList() {


    let Api = "https://dummyjson.com/products";


    const [items, setItems] = useState([]);




    useEffect(() => {

        async function ApiCall() {

            const response = await fetch(Api)

            const data = await response.json();

            setItems(data.products)


        }

        ApiCall();


    }, [])




    return (

        <div className="productList">


            {

                items.map((item) => {

                    return (

                       <Link to={`/products/${item.id}`} key={item.id} className="link-line">
          
                         <Cart key={item.id} productDetails={item} />

                       </Link>

                    )

                })

            }


        </div>


    )


}

export default ProductList;
