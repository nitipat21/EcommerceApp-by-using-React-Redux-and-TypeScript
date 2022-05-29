import { FC } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ImageBanner1 from '../Assets/Images/banner1.jpg'
import { shopSliceActions } from '../store/productsSlice';

const Banner1:FC = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const directToProducts = (type:string) => {
    dispatch(shopSliceActions.setFilterType(type));
    navigate('/products');
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }
  
  return (
    <div className="banner1-container">
      <div className="banner1-wrapper">
        <div className="banner1-image">
              <img src={ImageBanner1}></img>
          </div>
          <div className="banner1-info">
              <h1 className='banner1-title'>Lorem ipsum dolor sit amet.</h1>
              <p className='banner1-paragraph'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure molestias laboriosam optio at tenetur quis omnis eos perferendis enim hic.</p>
              <button onClick={()=>directToProducts('All')}>Shop Now</button>
        </div>
      </div>
    </div>
  )
}

export default Banner1