import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { menuSliceActions } from "../store/menuSlice";


const PageOverlay:FC = () => {

  const dispatch = useDispatch();

  const isDisplayCart = useSelector((state:RootState)=> state.menu.isDisplayCart);
  const isDisplayMenu = useSelector((state:RootState)=> state.menu.isDisplayMenu);

  const close = () => {
    if (isDisplayCart) {
      dispatch(menuSliceActions.displayCart());

    } else if (isDisplayMenu) {
      dispatch(menuSliceActions.displayMenu());
      
    }
  }

  return (
    <div className={isDisplayCart || isDisplayMenu ? "pageOverlay-container display" : "pageOverlay-container" } onClick={close}></div>
  )
}

export default PageOverlay