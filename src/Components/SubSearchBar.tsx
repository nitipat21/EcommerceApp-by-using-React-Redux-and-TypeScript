import { FC } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../store"
import SearchedProductCard from "./SearchedProductCard"


const SubSearchBar:FC = () => {

    const searchedProductArray = useSelector((state:RootState) => state.shop.searchedProductArray)

    const searchedProductCardElement = searchedProductArray.map(product => {
        return <SearchedProductCard
                 name={product.name}
                 price={product.price}
                 image={product.image}
                 key={product.id}/>
    })
    
    return (
        <div className="subSearchBar">
            <div className="searchedProductCard-container">
                {searchedProductCardElement}
            </div>
        </div>
    )
}

export default SubSearchBar