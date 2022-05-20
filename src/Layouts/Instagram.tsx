import { FC } from 'react'
import ImageInstagram1 from '../Assets/Images/instagram1.jpg'
import ImageInstagram2 from '../Assets/Images/instagram2.jpg'
import ImageInstagram3 from '../Assets/Images/instagram3.jpg'

const Instagram:FC = () => {
  return (
    <div className="instagram-container">
        <div className="instagram-link">
            <h1>@ShopName</h1>
            <h3>FOLLOW US ON INSTAGRAM</h3>
        </div>
        <div className="instagram-image-container">
            <img src={ImageInstagram1}></img>
            <img src={ImageInstagram2}></img>
            <img src={ImageInstagram3}></img>
        </div>
    </div>
  )
}

export default Instagram