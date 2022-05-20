import { FC } from 'react'
import { FaRegPlusSquare, FaRegMinusSquare, FaTrashAlt } from 'react-icons/fa'
import ImageProduct1 from '../Assets/Images/product1.jpg'

const ItemCartCard:FC = () => {
  return (
    <div className="itemCartCard">
        <div className="itemCart-image">
            <img src={ImageProduct1}></img>
        </div>
        <div className="itemCart-info">
            <div className="itemCart-wrap">
                <div className="itemCart-name">
                    <h6>Chocolate Cake</h6>
                </div>
                <div className="itemCart-remove">
                    <FaTrashAlt/>
                </div>
            </div>
            <div className="itemCart-wrap">
                <div className="itemCart-button">
                    <FaRegMinusSquare/>
                    <h6>1</h6>
                    <FaRegPlusSquare/>
                </div>
                <div className="itemCart-price">
                    <h6>$29.99</h6>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ItemCartCard