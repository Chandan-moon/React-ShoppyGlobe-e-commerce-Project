import { useDispatch } from "react-redux";

import { updateQuantity, removeItem } from "../store/cartSlice";


function CartItems({ item }) {


  const dispatch = useDispatch();


  const handleQuantityChange = (newQty) => {

    if (newQty >= 1) {

      dispatch(updateQuantity({ id: item.id, quantity: newQty }));

    }

  }




  return (

    <div className="cart-item">

      <img src={item.thumbnail} alt={item.title} className="cart-item-img" />

      <div>

        <h4>{item.title}</h4>
        <span className="item-total">${item.price} </span><span>{'(each)'}</span>

      </div>

      <div className="cart-item-qty">

        <button onClick={() => handleQuantityChange(item.quantity - 1)}>-</button>
        <span>{" "}</span><span>{item.quantity}</span><span>{" "}</span>
        <button onClick={() => handleQuantityChange(item.quantity + 1)}>+</button>

      </div>

      <div>

        <p className="item-total">${(item.price * item.quantity).toFixed(2)}</p>

        <button
          onClick={() => dispatch(removeItem(item.id))}
        >
          Remove
        </button>


      </div>


    </div>

  )


}



export default CartItems;