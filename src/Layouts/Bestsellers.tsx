import BestSellerCard from '../Components/BestSellerCard'

const Bestsellers = () => {
  return (
    <div className="bestSellers-container">
        <div className="bestSellers-title">
            <h1>Shop Our Bestsellers</h1>
        </div>
        <div className="bestSellerCard-container">
            <BestSellerCard/>
        </div>
        <div className="pageCount">
            <h1>•••</h1>
        </div>
    </div>
  )
}

export default Bestsellers