import { FC, useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { RootState } from "../store";
import { menuSliceActions } from "../store/menuSlice";
import ItemCartCard from "./ItemCartCard";


const Cart:FC = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const displayCart = () => {
    dispatch(menuSliceActions.displayCart());
  }

  const directToLoginPage = () => {
    dispatch(menuSliceActions.displayCart());
    setTimeout(()=>navigate('/account/login'),0);
  }

  const isDisplayCart = useSelector((state:RootState)=> state.menu.isDisplayCart);
  const accountData = useSelector((state:RootState) => state.auth.accountData);
  
  const itemCartCardElement = accountData?.cart.map(product => {
    return  <ItemCartCard   name={product.name}
                            price={product.price}
                            image={product.image}
                            amount={product.amount}
                            id={product.id}
                            key={product.id}
            />
  });

  const [subTotal,setSubTotal] = useState<number>(0);
  const [totalAmount,setTotalAmount] = useState<number>(0);

  useEffect(()=>{
    if (accountData) {
      if (accountData?.cart.length! < 1) {
        if(isDisplayCart) {
          displayCart();
          setSubTotal(0.00);
          setTotalAmount(0);
        }
      } else {
        setSubTotal(accountData?.cart.reduce((subTotal,currentProduct) => subTotal + (currentProduct.price*currentProduct.amount), 0)!);
        setTotalAmount(accountData?.cart.reduce((totalAmount,currentProduct) => totalAmount + currentProduct.amount, 0)!);
      }
    }
  },[accountData?.cart])

  return (
    <div className={isDisplayCart ? 'cart displayCart' : 'cart'}>
      <div className="cart-title">
        <h3>Your Cart <span>({totalAmount})</span></h3>
        <FaTimes onClick={displayCart}/>
      </div>
      <div className="freeShipping">
        <h5>{subTotal > 99.99 ? 'Congrats! You get free shipping!' : `You're only $${(99.99 - subTotal).toFixed(2)} away from free shipping!`}</h5>
        <div className="freeShippingBar">
          <meter min={0} max={99.99} low={33.33} high={66.66} optimum={99.99} value={subTotal}></meter>
        </div>
      </div>
      <div className="itemCartCard-Container">
        { accountData ? itemCartCardElement : <button onClick={directToLoginPage}>Please Login</button>}
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
          <h3>${subTotal.toFixed(2)}</h3>
        </div>
      </div>
      <div className="checkout">
        <button>Check out</button>
      </div>
    </div>
  )
}

export default Cart