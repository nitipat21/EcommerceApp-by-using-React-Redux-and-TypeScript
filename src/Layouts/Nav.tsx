import { useDispatch, useSelector } from "react-redux"
import { menuSliceActions } from "../store/menuSlice";
import { FaBars,FaSearch, FaUser,FaShoppingCart } from "react-icons/fa";
import { RootState } from "../store";
import { FC, useEffect } from "react";
import SubNavProducts from "../Components/SubNavProducts";
import SubNavOurStory from "../Components/SubNavOurStory";
import { Link } from "react-router-dom";

 

const Nav:FC = () => {

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
    dispatch(menuSliceActions.displayNavOurStory(false));
    dispatch(menuSliceActions.displayNavProducts(true));
  };

  const hideNavProducts = () => {
    dispatch(menuSliceActions.displayNavProducts(false));
  };

  const displayNavOurStory = () => {
    dispatch(menuSliceActions.displayNavProducts(false));
    dispatch(menuSliceActions.displayNavOurStory(true));
  }

  const hideNavOurStory = () => {
    dispatch(menuSliceActions.displayNavOurStory(false));
  }

  const setWindowWidth = () => {
    dispatch(menuSliceActions.setWindowWidth(window.innerWidth));
  };

  const isMouseOverProducts = useSelector((state:RootState) => state.menu.isMouseOverProducts);

  const isMouseOverOurStory = useSelector((state:RootState) => state.menu.isMouseOverOurStory);
 
  const isHideSideMenu = useSelector((state:RootState) => state.menu.isHideSideMenu);

  const windowWidth = useSelector((state:RootState) => state.menu.windowWidth);

  const accountData = useSelector((state:RootState) => state.auth.accountData);

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
    <nav className={isMouseOverProducts || isMouseOverOurStory ? 'displaySubNav' : ''}>
      <div className="nav-wrapper">
          <div className="nav-left">
            {isHideSideMenu ?
              <div className="navLink-wrapper">
                <a onMouseOver={displayNavProducts} onClick={displayNavProducts} className={isMouseOverProducts ? 'nav-active' : ''}>Products</a>
                <a onMouseOver={displayNavOurStory} onClick={displayNavOurStory} className={isMouseOverOurStory ? 'nav-active' : ''}>Our Story</a>
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
                <a className="blog">Blog</a>
                <a className="contactUs">Contact Us</a>
              </div>
            }
            {isHideSideMenu && <FaSearch onClick={displaySearchBar}/>}
            <Link to={accountData ? '/account' : '/account/login'}><FaUser/></Link>
            <FaShoppingCart onClick={displayCart}/>
        </div>
      </div>
      {isMouseOverProducts && 
        <div className="subMenu-wrapper" onMouseLeave={hideNavProducts}>
          <SubNavProducts/>
        </div>
      }
      {isMouseOverOurStory && 
        <div className="subMenu-wrapper" onMouseLeave={hideNavOurStory}>
          <SubNavOurStory/>
        </div>
      }
    </nav>
  )
}

export default Nav