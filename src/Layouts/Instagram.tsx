import { FC } from 'react'
import ImageInstagram1 from '../Assets/Images/instagram1.jpg'
import ImageInstagram2 from '../Assets/Images/instagram2.jpg'
import ImageInstagram3 from '../Assets/Images/instagram3.jpg'

const Instagram:FC = () => {

  const getToken =async () => {
    const test = await fetch(`https://graph.facebook.com/149503907649373/media`)

    const test2 = await test.json();
    console.log(test2)
  }

  return (
    <div className="instagram-container">
        <div className="instagram-link">
            <h1>@ShopName</h1>
            <h3 onClick={getToken}>FOLLOW US ON INSTAGRAM</h3>
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