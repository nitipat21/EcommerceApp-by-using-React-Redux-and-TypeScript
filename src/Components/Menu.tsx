import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
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

  return (
    <div className={ isDisplayMenu ? 'menu-container displayMenu' : 'menu-container'}>
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
    </div>
  )
}

export default Menu