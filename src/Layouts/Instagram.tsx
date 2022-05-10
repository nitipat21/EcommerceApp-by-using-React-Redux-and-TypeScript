import ImageInstagram1 from '../Assets/Images/instagram1.jpg'

const Instagram = () => {
  return (
    <div className="instagram-container">
        <div className="instagram-image-container">
            <img src={ImageInstagram1}></img>
        </div>
        <div className="instagram-link">
            <h1>@ShopName</h1>
            <h3>FOLLOW US ON INSTAGRAM</h3>
        </div>
    </div>
  )
}

export default Instagram