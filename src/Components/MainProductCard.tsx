import ImageProduct1 from '../Assets/Images/product1.jpg'

const MainProductCard = () => {

  return (
    <div className="mainProductCard">
        <div className="mainProduct-name">
            <h1>Cakes</h1>
        </div>
        <div className="mainProduct-link">
            <a>SHOP NOW</a>
        </div>
        <div className="mainProduct-image">
            <img src={ImageProduct1}></img>
        </div>
    </div>
  )
}

export default MainProductCard