import { FC } from 'react'
import { FaQuoteLeft } from 'react-icons/fa'
import ImageReview1 from '../Assets/Images/review1.jpg'
import ReviewCard from '../Components/ReviewCard'

const Reviews:FC = () => {

    const reviewCardLength = document.querySelector('.review-text-container')?.childElementCount;

    const dotsElement = Array.apply(null, Array(reviewCardLength)).map(function (value, index) {
         return <div className='dot' key={index}></div>
    })

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
                    <ReviewCard />
                </div>
                <div className="review-pageCount">
                    {dotsElement}
                </div>
            </div>
        </div>
    )
}

export default Reviews