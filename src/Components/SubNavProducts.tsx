import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import ImageBestSeller1 from '../Assets/Images/bestSeller1.jpg'
import ImageMainProduct1 from '../Assets/Images/mainProduct1.jpg'
import ImageMainProduct2 from '../Assets/Images/mainProduct2.jpg'
import ImageMainProduct3 from '../Assets/Images/mainProduct3.jpg'
import { shopSliceActions } from '../store/productsSlice'

const SubNavProducts:FC = () => {

  const dispatch = useDispatch();

  return (
    <div className='subNavProducts'>
      <div className="subNavProducts-product">
        <div className="product">
          <div className="product-image">
            <img src={ImageBestSeller1}></img>
          </div>
          <div className="product-name">
            <Link to='/products' onClick={()=>dispatch(shopSliceActions.setFilterType('BestSeller'))}>Best Sellers</Link>
          </div>
        </div>
        <div className="product">
          <div className="product-image">
            <img src={ImageMainProduct1}></img>
          </div>
          <div className="product-name">
            <Link to='/products' onClick={()=>dispatch(shopSliceActions.setFilterType('Cake'))}>Cakes</Link>
          </div>
        </div>
        <div className="product">
          <div className="product-image">
            <img src={ImageMainProduct2}></img>
          </div>
          <div className="product-name">
            <Link to='/products' onClick={()=>dispatch(shopSliceActions.setFilterType('Cookie'))}>Cookies</Link>
          </div>
        </div>
        <div className="product">
          <div className="product-image">
            <img src={ImageMainProduct3}></img>
          </div>
          <div className="product-name">
            <Link to='/products' onClick={()=>dispatch(shopSliceActions.setFilterType('Pie'))}>Pies</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubNavProducts