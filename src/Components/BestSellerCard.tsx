import { FC } from 'react'
import { FaStar } from 'react-icons/fa'

interface iBestSellerCard {
    name:string
    price:number
    rating:number
    id:number
    image:string
}

const BestSellerCard:FC<iBestSellerCard> = ({name,price,rating,image,id}) => {
    
  return (
    <div className="bestSellerCard">
        <div className="bestSeller-tag">
            <h3>BEST SELLER</h3>
        </div>
        <div className="bestSeller-image">
            <img src={image}></img>
        </div>
        <div className="quickAdd-button">
            <button>QUICK ADD</button>
        </div>
        <div className="bestSeller-name">
            <h1>{name}</h1>
        </div>
        <div className="bestSeller-rating">
            <h3><FaStar/> {rating}</h3>
        </div>
        <div className="bestSeller-price">
            <h3>${price}</h3>
        </div>
    </div>
  )
}

export default BestSellerCard