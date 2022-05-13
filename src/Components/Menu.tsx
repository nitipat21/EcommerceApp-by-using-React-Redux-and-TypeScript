import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { FaCaretDown, FaCaretUp, FaFacebookSquare, FaTimes, FaInstagramSquare, FaTwitterSquare, FaPinterest, FaPinterestSquare } from "react-icons/fa";
import SubMenuProducts from './SubMenuProducts';
import SubMenuOurStory from './SubMenuOurStory';
import { menuSliceActions } from '../store/menuSlice';



const Menu = () => {

  const dispatch = useDispatch();
  
  const isDisplayMenu = useSelector((state:RootState) => state.shop.isDisplayMenu);
  const isDisplayProducts = useSelector((state:RootState) => state.shop.isDisplayProducts);
  const isDisplayOurStory = useSelector((state:RootState) => state.shop.isDisplayOurStory);

  const displayProducts = () => {
    dispatch(menuSliceActions.displayProducts())
  }

  const displayOurStory = () => {
    dispatch(menuSliceActions.displayOurStory())
  }

  const displayMenu = () => {
    dispatch(menuSliceActions.displayMenu());
  }

  return (
    <div className={ isDisplayMenu ? 'menu-container displayMenu' : 'menu-container'}>
      <FaTimes onClick={displayMenu}/>
      <div className="menu-wrapper">
        <ul>
            <li>
              <h3 onClick={displayProducts}>Products <span>{isDisplayProducts ? <FaCaretUp/>:<FaCaretDown/>}</span></h3>
              {isDisplayProducts && <SubMenuProducts/>}
            </li>
            <li>
              <h3 onClick={displayOurStory}>Our Story<span>{isDisplayOurStory ? <FaCaretUp/>:<FaCaretDown/>}</span></h3>
              {isDisplayOurStory && <SubMenuOurStory/>}
            </li>
            <li>
              <h3>Blog</h3>
            </li>
            <li>
              <h3>Contact Us</h3>
            </li>
        </ul>
        <div className="socialMediaLink-container">
          <FaFacebookSquare/>
          <FaInstagramSquare/>
          <FaTwitterSquare/>
          <FaPinterestSquare/>
        </div>
      </div>
    </div>
  )
}

export default Menu