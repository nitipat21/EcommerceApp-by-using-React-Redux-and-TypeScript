import { FC } from "react"


const ReviewCard:FC = () => {
  return (
    <div className="reviewCard">
      <div className="reviewCard-text">
        <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, quis possimus quasi nemo beatae vel.</h3>
      </div>
      <div className="reviewCard-author">
          <h3>— <span>Author Name</span></h3>
      </div>
    </div>
  )
}

export default ReviewCard