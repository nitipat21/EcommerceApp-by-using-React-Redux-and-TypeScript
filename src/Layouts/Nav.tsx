import { useDispatch } from "react-redux"
import { menuSliceActions } from "../store/menuSlice";
import { FaBars,FaSearch, FaUser,FaShoppingCart } from "react-icons/fa";

 

const Nav = () => {

  const dispatch = useDispatch();

  const toggleMenu = () => {
    dispatch(menuSliceActions.displayMenu());
  }

  const displaySearchBar = () => {
    dispatch(menuSliceActions.displaySearchBar());
  }

  const displayCart = () => {
    dispatch(menuSliceActions.displayCart());
  }

  return (
    <nav>
      <div className="nav-left">
          <FaBars onClick={toggleMenu}/>
          <FaSearch onClick={displaySearchBar}/>
      </div>
      <div className="nav-center">
          <h1>Brand Logo</h1>
      </div>
      <div className="nav-right">
          <FaUser/>
          <FaShoppingCart onClick={displayCart}/>
      </div>
    </nav>
  )
}

export default Nav