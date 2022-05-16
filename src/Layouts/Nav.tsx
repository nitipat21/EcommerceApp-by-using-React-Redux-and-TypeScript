import { useDispatch, useSelector } from "react-redux"
import { menuSliceActions } from "../store/menuSlice";
import { FaBars,FaSearch, FaUser,FaShoppingCart } from "react-icons/fa";
import { RootState } from "../store";
import { useEffect } from "react";
import SubMenuProducts from "../Components/SubMenuProducts";
import SubMenuOurStory from "../Components/SubMenuOurStory";

 

const Nav = () => {

  const dispatch = useDispatch();

  const toggleMenu = () => {
    dispatch(menuSliceActions.displayMenu());
  };

  const displaySearchBar = () => {
    dispatch(menuSliceActions.displaySearchBar());
  };

  const displayCart = () => {
    dispatch(menuSliceActions.displayCart());
  };

  const hideSideMenu = (boolean:boolean) => {
    dispatch(menuSliceActions.hideSideMenu(boolean));
  };

  const displayNavProducts = () => {
    dispatch(menuSliceActions.displayNavProducts(true));
  }

  const hideNavProducts = () => {
    dispatch(menuSliceActions.displayNavProducts(false));
  }

  const setWindowWidth = () => {
    dispatch(menuSliceActions.setWindowWidth(window.innerWidth));
  };

  const isMouseOverProducts = useSelector((state:RootState) => state.shop.isMouseOverProducts);
 
  const isHideSideMenu = useSelector((state:RootState) => state.shop.isHideSideMenu);

  const windowWidth = useSelector((state:RootState) => state.shop.windowWidth);

  useEffect(()=>{
    window.addEventListener('resize',setWindowWidth)

    return () => window.removeEventListener('resize',setWindowWidth);
  },[])

  useEffect(()=>{
    if (windowWidth >= 1024) {
      hideSideMenu(true);
    } else {
      hideSideMenu(false);
    }

  },[windowWidth]);

  return (
    <nav>
      <div className="nav-wrapper">
          <div className="nav-left">
            {isHideSideMenu ?
              <div className="navLink-wrapper">
                <a href="" onMouseOver={displayNavProducts}>Products</a>
                <a href="">Our Story</a>
              </div>
              :
              <>
                <FaBars onClick={toggleMenu}/>
                <FaSearch onClick={displaySearchBar}/>
              </>
            }
          </div>
        <div className="nav-center">
            <h1>Brand Logo</h1>
        </div>
        <div className="nav-right">
            {isHideSideMenu && 
              <div className="navLink-wrapper">
                <a href="">Blog</a>
                <a href="">Contact Us</a>
              </div>
            }
            {isHideSideMenu && <FaSearch onClick={displaySearchBar}/>}
            <FaUser/>
            <FaShoppingCart onClick={displayCart}/>
        </div>
      </div>
      {isMouseOverProducts && 
        <div className="subMenu-wrapper" onMouseOut={hideNavProducts}>
          <SubMenuProducts/>
        </div>
      }
    </nav>
  )
}

export default Nav