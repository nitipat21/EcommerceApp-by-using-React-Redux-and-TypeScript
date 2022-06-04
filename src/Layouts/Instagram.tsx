import { FC } from 'react'
import ImageInstagram1 from '../Assets/Images/instagram1.jpg'
import ImageInstagram2 from '../Assets/Images/instagram2.jpg'
import ImageInstagram3 from '../Assets/Images/instagram3.jpg'

const Instagram:FC = () => {



  const getMedia = async () => {
    const data = await fetch(`https://graph.facebook.com/v14.0/17841453247591019?fields=media&access_token=`);

    const instagramPage = await data.json();

    const instagramMediaArray = instagramPage.media.data;
    
    const unsolvedPromises = instagramMediaArray.map(async (mediaData:any) => {
      const data = await fetch(`https://graph.facebook.com/v14.0/${mediaData.id}?fields=media_url&access_token=`);

      return data.json();
    })

    console.log(unsolvedPromises);

    const result = await Promise.all([unsolvedPromises]);

    console.log(result);
    
  }

  return (
    <div className="instagram-container">
        <div className="instagram-link">
            <h1>@ShopName</h1>
            <h3 onClick={getMedia}>FOLLOW US ON INSTAGRAM</h3>
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