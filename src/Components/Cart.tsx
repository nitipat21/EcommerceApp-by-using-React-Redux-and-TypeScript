import { FaTimes } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store";
import { menuSliceActions } from "../store/menuSlice";
import ItemCartCard from "./ItemCartCard";


const Cart = () => {

  const dispatch = useDispatch();

  const displayCart = () => {
    dispatch(menuSliceActions.displayCart());
  }

  const isDisplayCart = useSelector((state:RootState)=> state.shop.isDisplayCart);

  return (
    <div className={isDisplayCart ? 'cart displayCart' : 'cart'}>
      <div className="cart-title">
        <h3>Your Cart <span>(0)</span></h3>
        <FaTimes onClick={displayCart}/>
      </div>
      <div className="freeShipping">
        <h5>You're only $<span>15</span> away from free shipping!</h5>
        <div className="freeShippingBar">
          <meter></meter>
        </div>
      </div>
      <div className="itemCartCard-Container">
        <ItemCartCard/>
        <ItemCartCard/>
        <ItemCartCard/>
        <ItemCartCard/>
        <ItemCartCard/>
        <ItemCartCard/>
        <ItemCartCard/>
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
          <h3>$29.99</h3>
        </div>
      </div>
      <div className="checkout">
        <button>Check out</button>
      </div>
    </div>
  )
}

export default Cart