import ImageIngredient1 from '../Assets/Images/ingredient1.jpg'

const SubNavOurStory = () => {
  return (
    <div className='subNavOurStory'>
      <div className="subNavOurStory-list">
        <div className="ourStory">
          <div className="ourStory-image">
            <img src={ImageIngredient1}/>
          </div>
          <div className="ourStory-title">
            <h1>About Us</h1>
          </div>
        </div>
        <div className="ourStory">
          <div className="ourStory-image">
            <img src={ImageIngredient1}/>
          </div>
          <div className="ourStory-title">
            <h1>Ingredients</h1>
          </div>
        </div>
        <div className="ourStory">
          <div className="ourStory-image">
            <img src={ImageIngredient1}/>
          </div>
          <div className="ourStory-title">
            <h1>FAQ</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubNavOurStory