import { FC, useEffect, useState } from 'react'
import { FaQuoteLeft } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import ImageReview1 from '../Assets/Images/review1.jpg'
import ReviewCard from '../Components/ReviewCard'
import { RootState } from '../store'
import { shopSliceActions } from '../store/productsSlice'

const Reviews:FC = () => {

    const dispatch = useDispatch();

    const [autoSlide,setAutoSlide] = useState<boolean>(true);

    const activeReviewPage = useSelector((state:RootState) => state.shop.activeReviewPage);

    const reviewsArray = useSelector((state:RootState) => state.shop.reviewsArray);

    const selectReviewPage = (index:number) => {
        dispatch(shopSliceActions.setActiveReviewPage(index));
        setAutoSlide(false);
    }

    const reviewsCardElement = reviewsArray.map((review, index) => {
        return  <ReviewCard
                review={review.review}
                author={review.author}
                productName={review.productName}
                docId={review.id}
                index={index}
                key={index}
                />
    })

    const dotsElement = Array.apply(null, Array(reviewsArray.length)).map(function (value, index) {

        return  <div 
                    className={activeReviewPage === index ? 'active-dot' : 'dot'} 
                    key={index} 
                    onClick={()=>selectReviewPage(index)}
                    style={{cursor:'pointer'}}>
                </div>
    })

    useEffect(()=>{

        if(autoSlide) {
            setTimeout(()=>{
                if (activeReviewPage >= (reviewsArray.length - 1)) {
                    dispatch(shopSliceActions.setActiveReviewPage(0));
                } else {
                    dispatch(shopSliceActions.setActiveReviewPage(activeReviewPage + 1));
                }
            },5000); 
        }

    },[[],[activeReviewPage]])

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
                    {reviewsCardElement}
                </div>
                <div className="review-pageCount">
                    {dotsElement}
                </div>
            </div>
        </div>
    )
}

export default Reviews