

import { useDispatch } from "react-redux"
import { addToCart } from "../store/cartSlice";
import { Link } from "react-router-dom";


function ProductItems({ products }) {


  const dispatch = useDispatch();




  return (

    <div>

      <div className="cart-card">

        <img src={products.images[0]} alt="" width="200px" height="200px" className="cart-img" />

        <h3 className="cart-title">{products.title.slice(0, 35)}</h3>

        <span className="cart-price">$: {products.price}</span>

        <div className="product-footer">

          <button onClick={() => dispatch(addToCart(products))}>Add to Cart</button>

          <Link to={`/product/${products.id}`} className="itemlink">View Details</Link>

        </div>

      </div>

    </div>

  )


}

export default ProductItems