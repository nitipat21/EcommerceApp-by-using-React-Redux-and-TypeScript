import { FC } from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { shopSliceActions } from '../store/productsSlice';

const Banner0:FC = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const directToProducts = (type:string) => {
    dispatch(shopSliceActions.setFilterType(type));
    navigate('/products');
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  return (
    <div className="banner0-container" onClick={()=>directToProducts('All')}>
        <h1>Enjoy free shipping on orders of $99.99 or more <FaLongArrowAltRight/></h1>
    </div>
  )
}

export default Banner0