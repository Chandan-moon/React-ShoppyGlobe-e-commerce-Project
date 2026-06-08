

import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux"
import { setSearchQuery } from "../store/productSlice";






function Header() {



    const cartItems = useSelector(data => data.cart.items);

    const dispatch = useDispatch();

    const searchQuery = useSelector(data => data.product.searchQuery)






    return (

        <div className="header">

            <h2>🛍️ ShoppyGlobe</h2>

            <input type="text" placeholder=" Search products"

                value={searchQuery}
                onChange={(e) => dispatch(setSearchQuery(e.target.value))}

                className="header-input" />



            <nav className="nav-menu">

                <Link to="/" className="cart-home">Home</Link>

                <Link to="/cart" className="carticon">
                    🛒Cart <span className="cartbadge">{cartItems.length}</span>
                </Link>


            </nav>

        </div>


    )

}

export default Header;







