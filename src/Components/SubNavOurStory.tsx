import ImageIngredients from '../Assets/Images/ingredients.jpg'
import ImageAboutUs from '../Assets/Images/aboutUs.jpg'
import ImageFAQ from '../Assets/Images/FAQ.jpg'

const SubNavOurStory = () => {
  return (
    <div className='subNavOurStory'>
      <div className="subNavOurStory-list">
        <div className="ourStory">
          <div className="ourStory-image">
            <img src={ImageAboutUs}/>
          </div>
          <div className="ourStory-title">
            <h1>About Us</h1>
          </div>
        </div>
        <div className="ourStory">
          <div className="ourStory-image">
            <img src={ImageIngredients}/>
          </div>
          <div className="ourStory-title">
            <h1>Ingredients</h1>
          </div>
        </div>
        <div className="ourStory">
          <div className="ourStory-image">
            <img src={ImageFAQ}/>
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