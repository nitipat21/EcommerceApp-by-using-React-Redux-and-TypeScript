import BestSellerCard from '../Components/BestSellerCard'

const Bestsellers = () => {
  return (
    <div className="bestSellers-container">
        <div className="bestSellers-title">
            <h1>Shop Our Bestsellers</h1>
        </div>
        <div className="bestSellerCard-container">
            <BestSellerCard/>
            <BestSellerCard/>
            <BestSellerCard/>
        </div>
    </div>
  )
}

export default Bestsellers