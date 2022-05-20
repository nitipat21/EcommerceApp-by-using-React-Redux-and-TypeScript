import { FC } from 'react'
import ImageMainProduct1 from '../Assets/Images/mainProduct1.jpg'
import ImageMainProduct2 from '../Assets/Images/mainProduct2.jpg'
import ImageMainProduct3 from '../Assets/Images/mainProduct3.jpg'

const MainProducts:FC = () => {
  return (
    <div className="mainProducts-container">
        <div className="mainProductCard">
          <div className="mainProduct-name">
              <h1>Cakes</h1>
          </div>
          <div className="mainProduct-link">
              <a>SHOP NOW</a>
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
            <a>SHOP NOW</a>
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
            <a>SHOP NOW</a>
        </div>
        <div className="mainProduct-image">
            <img src={ImageMainProduct3}></img>
        </div>
      </div>
    </div>
  )
}

export default MainProducts