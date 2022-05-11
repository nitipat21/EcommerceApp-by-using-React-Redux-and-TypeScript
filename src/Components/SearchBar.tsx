import { FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { menuSliceActions } from "../store/menuSlice";


const SearchBar = () => {

  const dispatch = useDispatch();

  const displaySearchBar = () => {
    dispatch(menuSliceActions.displaySearchBar());
  }

  return (
    <div className="searchBar-container">
        <div className="searchBar-input">
            <input type='search' placeholder="search" onBlur={displaySearchBar} autoFocus/>
        </div>
        <div className="searchBar-close">
            <FaTimes onClick={displaySearchBar}/>
        </div>
    </div>
  )
}

export default SearchBar