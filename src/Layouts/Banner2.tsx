import { FC } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ImageBanner2 from '../Assets/Images/banner2.jpg'
import { shopSliceActions } from '../store/productsSlice';

const Banner2:FC = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const directToProducts = (type:string) => {
    dispatch(shopSliceActions.setFilterType(type));
    navigate('/products');
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  return (
    <div className="banner2-container">
      <div className="banner2-wrapper">
        <div className="banner2-image">
            <img src={ImageBanner2}></img>
        </div>
        <div className="banner2-info">
            <p className='banner2-paragraph'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure molestias laboriosam optio at tenetur quis omnis eos perferendis enim hic.</p>
            <button onClick={()=>directToProducts('All')}>Shop Now</button>
        </div>
      </div>
    </div>
  )
}

export default Banner2