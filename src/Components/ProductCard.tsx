import { FC } from 'react'
import { FaStar } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { authSliceActions } from '../store/authSlice'
import { menuSliceActions } from '../store/menuSlice'
import { iProductCard } from '../store/productsSlice'


const ProductCard:FC<iProductCard> = (props) => {

    const dispatch = useDispatch();

    const addItemtoCart = () => {
        dispatch(authSliceActions.addItemtoCart(props));
        dispatch(menuSliceActions.displayCart());
    };
    
  return (
    <div className="productCard">
        {props.isBestSeller && <div className="product-tag"><h3>BEST SELLER</h3></div>}
        <div className="product-image">
            <img src={props.image}></img>
        </div>
        <div className="quickAdd-button">
            <button onClick={addItemtoCart}>QUICK ADD</button>
        </div>
        <div className="product-name">
            <h1>{props.name}</h1>
        </div>
        <div className="product-rating">
            <h3><FaStar/> {props.rating}</h3>
        </div>
        <div className="product-price">
            <h3>${props.price}</h3>
        </div>
    </div>
  )
}

export default ProductCard