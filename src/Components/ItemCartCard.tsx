import { FC } from 'react'
import { FaRegPlusSquare, FaRegMinusSquare, FaTrashAlt } from 'react-icons/fa'
import { useDispatch } from 'react-redux';
import { iItemCartCard, shopSliceActions } from '../store/productsSlice';

const ItemCartCard:FC<iItemCartCard> = (props) => {

    const dispatch = useDispatch();

    const deleteItemFromCart = () => {
        dispatch(shopSliceActions.deleteItemFromCart(props));
    };

    const clearItemFromCart = () => {
        dispatch(shopSliceActions.clearItemFromCart(props));
    };

    const addItemtoCart = () => {
        dispatch(shopSliceActions.addItemtoCart(props));
    };

    return (
        <div className="itemCartCard">
            <div className="itemCart-image">
                <img src={props.image}></img>
            </div>
            <div className="itemCart-info">
                <div className="itemCart-wrap">
                    <div className="itemCart-name">
                        <h6>{props.name}</h6>
                    </div>
                    <div className="itemCart-remove">
                        <FaTrashAlt onClick={clearItemFromCart}/>
                    </div>
                </div>
                <div className="itemCart-wrap">
                    <div className="itemCart-button">
                        <FaRegMinusSquare onClick={deleteItemFromCart}/>
                        <h6>{props.amount}</h6>
                        <FaRegPlusSquare onClick={addItemtoCart}/>
                    </div>
                    <div className="itemCart-price">
                        <h6>${(props.price*props.amount).toFixed(2)}</h6>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ItemCartCard