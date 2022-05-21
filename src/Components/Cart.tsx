import { FC, useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store";
import { menuSliceActions } from "../store/menuSlice";
import ItemCartCard from "./ItemCartCard";


const Cart:FC = () => {

  const dispatch = useDispatch();

  const displayCart = () => {
    dispatch(menuSliceActions.displayCart());
  }

  const cartArray = useSelector((state:RootState) => state.shop.cartArray);
  const isDisplayCart = useSelector((state:RootState)=> state.menu.isDisplayCart);
  
  const itemCartCardElement = cartArray.map(product => {
    return  <ItemCartCard   name={product.name}
                            price={product.price}
                            image={product.image}
                            amount={product.amount}
                            id={product.id}
                            key={product.id}
            />
  });

  const [subtotal,setSubTotal] = useState<number>(0);

  useEffect(()=>{
    if (cartArray.length < 1){
      displayCart();
      setSubTotal(0.00);
    } else {
      setSubTotal(cartArray.reduce((total,currentProduct) => total + (currentProduct.price*currentProduct.amount), 0));
    }

  },[cartArray])

  return (
    <div className={isDisplayCart ? 'cart displayCart' : 'cart'}>
      <div className="cart-title">
        <h3>Your Cart <span>(0.00)</span></h3>
        <FaTimes onClick={displayCart}/>
      </div>
      <div className="freeShipping">
        <h5>You're only $<span>15</span> away from free shipping!</h5>
        <div className="freeShippingBar">
          <meter></meter>
        </div>
      </div>
      <div className="itemCartCard-Container">
        {itemCartCardElement}
      </div>
      <div className="applyCoupon">
        <input type='text' placeholder="Discount code or gift card"/>
        <button>Apply</button>
      </div>
      <div className="subtotal">
        <div className="subtotal-title">
          <h3>Subtotal</h3>
        </div>
        <div className="subtotal-amount">
          <h3>${subtotal.toFixed(2)}</h3>
        </div>
      </div>
      <div className="checkout">
        <button>Check out</button>
      </div>
    </div>
  )
}

export default Cart