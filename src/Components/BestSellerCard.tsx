import { FC } from 'react'
import { FaStar } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { menuSliceActions } from '../store/menuSlice'
import { iProductCard, shopSliceActions } from '../store/productsSlice'


const BestSellerCard:FC<iProductCard> = (props) => {

    const dispatch = useDispatch();

    const addItemtoCart = () => {
        dispatch(shopSliceActions.addItemtoCart(props));
        dispatch(menuSliceActions.displayCart());
    }
    
  return (
    <div className="bestSellerCard">
        <div className="bestSeller-tag">
            <h3>BEST SELLER</h3>
        </div>
        <div className="bestSeller-image">
            <img src={props.image}></img>
        </div>
        <div className="quickAdd-button">
            <button onClick={addItemtoCart}>QUICK ADD</button>
        </div>
        <div className="bestSeller-name">
            <h1>{props.name}</h1>
        </div>
        <div className="bestSeller-rating">
            <h3><FaStar/> {props.rating}</h3>
        </div>
        <div className="bestSeller-price">
            <h3>${props.price}</h3>
        </div>
    </div>
  )
}

export default BestSellerCard