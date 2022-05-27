import { FC } from 'react'
import ImageBestSeller1 from '../Assets/Images/bestSeller1.jpg'
import ImageMainProduct1 from '../Assets/Images/mainProduct1.jpg'
import ImageMainProduct2 from '../Assets/Images/mainProduct2.jpg'
import ImageMainProduct3 from '../Assets/Images/mainProduct3.jpg'

const SubNavProducts:FC = () => {

  return (
    <div className='subNavProducts'>
      <div className="subNavProducts-product">
        <div className="product">
          <div className="product-image">
            <img src={ImageBestSeller1}></img>
          </div>
          <div className="product-name">
            <h1>Best Sellers</h1>
          </div>
        </div>
        <div className="product">
          <div className="product-image">
            <img src={ImageMainProduct1}></img>
          </div>
          <div className="product-name">
            <h1>Cakes</h1>
          </div>
        </div>
        <div className="product">
          <div className="product-image">
            <img src={ImageMainProduct2}></img>
          </div>
          <div className="product-name">
            <h1>Cookies</h1>
          </div>
        </div>
        <div className="product">
          <div className="product-image">
            <img src={ImageMainProduct3}></img>
          </div>
          <div className="product-name">
            <h1>Pies</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubNavProducts