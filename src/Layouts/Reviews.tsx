import { FC } from 'react'
import { FaQuoteLeft } from 'react-icons/fa'
import ImageReview1 from '../Assets/Images/review1.jpg'
import ReviewCard from '../Components/ReviewCard'

const Reviews:FC = () => {
  return (
    <div className="review-container">
        <div className="review-image">
            <img src={ImageReview1}></img>
        </div>
        <div className="review-wrapper">
            <div className="review-symbol">
                <FaQuoteLeft/>
            </div>
            <div className="review-text-container">
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
            </div>
            <div className="review-pageCount">
                <h1>•••</h1>
            </div>
        </div>
    </div>
  )
}

export default Reviews