import ImageBestSeller1 from '../Assets/Images/bestSeller1.jpg'

const BestSellerCard = () => {
  return (
    <div className="bestSellerCard">
        <div className="bestSeller-tag">
            <h3>BEST SELLER</h3>
        </div>
        <div className="bestSeller-image">
            <img src={ImageBestSeller1}></img>
        </div>
        <div className="quickAdd-button">
            <button>QUICK ADD</button>
        </div>
        <div className="bestSeller-name">
            <h1>Crunchy Cookies</h1>
        </div>
        <div className="bestSeller-rating">
            <h3>4.7</h3>
        </div>
        <div className="bestSeller-price">
            <h3>$14.99</h3>
        </div>
    </div>
  )
}

export default BestSellerCard