import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ImageMainProduct1 from '../Assets/Images/mainProduct1.jpg'
import ImageMainProduct2 from '../Assets/Images/mainProduct2.jpg'
import ImageMainProduct3 from '../Assets/Images/mainProduct3.jpg'
import { shopSliceActions } from '../store/productsSlice'

const MainProducts:FC = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const directToProducts = (type:string) => {
    dispatch(shopSliceActions.setFilterType(type));
    navigate('/products');
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  return (
    <div className="mainProducts-container">
        <div className="mainProductCard">
          <div className="mainProduct-name">
              <h1>Cakes</h1>
          </div>
          <div className="mainProduct-link">
              <a onClick={()=>directToProducts('Cake')}>SHOP NOW</a>
          </div>
          <div className="mainProduct-image">
              <img src={ImageMainProduct1}></img>
          </div>
      </div>
      <div className="mainProductCard">
        <div className="mainProduct-name">
            <h1>Cookies</h1>
        </div>
        <div className="mainProduct-link">
            <a onClick={()=>directToProducts('Cookie')}>SHOP NOW</a>
        </div>
        <div className="mainProduct-image">
            <img src={ImageMainProduct2}></img>
        </div>
      </div>
      <div className="mainProductCard">
        <div className="mainProduct-name">
            <h1>Pies</h1>
        </div>
        <div className="mainProduct-link">
            <a onClick={()=>directToProducts('Pie')}>SHOP NOW</a>
        </div>
        <div className="mainProduct-image">
            <img src={ImageMainProduct3}></img>
        </div>
      </div>
    </div>
  )
}

export default MainProducts