import { FC } from "react"
import { useSelector } from "react-redux";
import { RootState } from "../store";

interface iReviewCard {
  productName:string;
  review:string;
  author:string;
  docId:string;
  index:number;
}

const ReviewCard:FC<iReviewCard> = ({productName, review, author, index}) => {

  const activeReviewPage = useSelector((state:RootState) => state.shop.activeReviewPage);

  return (
    <div className={index === activeReviewPage ? "reviewCard active-card" : "reviewCard"}>
      <div className="reviewCard-productName">
        <h3>Review on {productName}</h3>
      </div>
      <div className="reviewCard-text">
        <h3>{review}</h3>
      </div>
      <div className="reviewCard-author">
          <h3>— <span>{author}</span></h3>
      </div>
    </div>
  )
}

export default ReviewCard