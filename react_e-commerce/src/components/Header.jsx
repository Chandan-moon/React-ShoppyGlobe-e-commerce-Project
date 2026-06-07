

import { Link } from "react-router-dom";


function Header() {


    return (

        <div className="header">

            <h2>🛍️ ShoppyGlobe</h2>

            <input type="text" placeholder=" Search products" className="header-input" />

            <nav className="nav-menu">

                <Link to="/">Home</Link>

                <Link to="/cart" className="cart-icon">
                    🛒 Cart <span className="cart-badge">{}</span>
                </Link>

            </nav>

        </div>


    )

}

export default Header;







