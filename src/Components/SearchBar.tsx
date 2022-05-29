import { FC, useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { menuSliceActions } from "../store/menuSlice";
import { shopSliceActions } from "../store/productsSlice";
import SubSearchBar from "./SubSearchBar";


const SearchBar:FC = () => {

  const dispatch = useDispatch();

  const [keyword,setKeyword] = useState<string>('');

  const productsArray = useSelector((state:RootState) => state.shop.productsArray);

  const displaySearchBar = () => {
    dispatch(menuSliceActions.displaySearchBar());
  };

  const searchProducts = () => {
    if (keyword) {
      const newArray = productsArray.filter(product => product.name.toLowerCase().includes(keyword.toLowerCase()));

      dispatch(shopSliceActions.setSearchedProducts([...newArray]));
    } else {
      dispatch(shopSliceActions.setSearchedProducts([]));
    }
  };

  useEffect(()=>{
    searchProducts();
  },[keyword])

  return (
    <div className="searchBar-container">
        <div className="searchBar-input">
            <input  type='search' placeholder="search products" 
                    value={keyword} onChange={(event)=>setKeyword(event.target.value)} 
                    onBlur={()=>console.log('blur')} autoFocus
            />
        </div>
        <div className="searchBar-close">
            <FaTimes onClick={displaySearchBar}/>
        </div>
        <SubSearchBar/>
    </div>
  )
}

export default SearchBar