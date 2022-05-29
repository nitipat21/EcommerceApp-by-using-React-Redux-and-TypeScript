import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import ImageBestSeller1 from '../Assets/Images/bestSeller1.jpg'
import ImageMainProduct1 from '../Assets/Images/mainProduct1.jpg'
import ImageMainProduct2 from '../Assets/Images/mainProduct2.jpg'
import ImageMainProduct3 from '../Assets/Images/mainProduct3.jpg'
import { shopSliceActions } from '../store/productsSlice'

const SubNavProducts:FC = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const directToProducts = (type:string) => {
    dispatch(shopSliceActions.setFilterType(type));
    navigate('/products');
  }

  return (
    <div className='subNavProducts'>
      <div className="subNavProducts-product">
        <div className="product">
          <div className="product-image">
            <img src={ImageBestSeller1}></img>
          </div>
          <div className="product-name">
            <a onClick={()=>directToProducts('BestSeller')}>Best Sellers</a>
          </div>
        </div>
        <div className="product">
          <div className="product-image">
            <img src={ImageMainProduct1}></img>
          </div>
          <div className="product-name">
            <a onClick={()=>directToProducts('Cake')}>Cakes</a>
          </div>
        </div>
        <div className="product">
          <div className="product-image">
            <img src={ImageMainProduct2}></img>
          </div>
          <div className="product-name">
            <a onClick={()=>directToProducts('Cookie')}>Cookies</a>
          </div>
        </div>
        <div className="product">
          <div className="product-image">
            <img src={ImageMainProduct3}></img>
          </div>
          <div className="product-name">
            <a onClick={()=>directToProducts('Pie')}>Pies</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubNavProducts