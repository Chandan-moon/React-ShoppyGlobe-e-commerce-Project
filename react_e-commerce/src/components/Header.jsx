

import { Link } from "react-router-dom";


function Header() {


    return (

        <div className="header">

            <h2>🛍️ ShoppyGlobe</h2>

            <input type="text" placeholder=" Search products" className="header-input" />

            <div className="header-nav">

             <Link to="/">
             <li>Home</li>    
             </Link>   
                
             <Link to="/cartDetails">
             <li>Cart</li>    
             </Link>   
                

              


            </div>


        </div>


    )

}

export default Header;




