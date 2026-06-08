



function CartItems() {



  return (

    <div>

      <div className="cart-card">

        <img src={items.images[0]} alt="" width="200px" height="200px" className="cart-img" />

        <h3 className="cart-title">{items.title}</h3>

        <h2 className="cart-price">$: {items.price}</h2>


      </div>


    </div>

  )


}

export default CartItems;