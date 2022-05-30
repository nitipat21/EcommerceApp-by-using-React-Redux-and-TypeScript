import { FC } from "react"

interface iSearchItemCard{
  name:string
  image:string
  price:number
}

const SearchedItemCard:FC<iSearchItemCard> = ({name,image,price}) => {
  return (
    <div className="searchedProductCard">
        <div className="searchedProductCard-image">
          <img src={image}/>
        </div>
        <div className="searchedProductCard-info">
          <h1>{name}</h1>
          <p>${price}</p>
        </div>
    </div>
  )
}

export default SearchedItemCard