import ImageIngredients from '../Assets/Images/ingredients.jpg'
import ImageAboutUs from '../Assets/Images/aboutUs.jpg'
import ImageFAQ from '../Assets/Images/FAQ.jpg'
import { FC } from 'react'
import { Link } from 'react-router-dom'

const SubNavOurStory:FC = () => {
  return (
    <div className='subNavOurStory'>
      <div className="subNavOurStory-list">
        <div className="ourStory">
          <div className="ourStory-image">
            <img src={ImageAboutUs}/>
          </div>
          <div className="ourStory-title">
            <Link to='/aboutUs'>About Us</Link>
          </div>
        </div>
        <div className="ourStory">
          <div className="ourStory-image">
            <img src={ImageIngredients}/>
          </div>
          <div className="ourStory-title">
            <Link to='/ingredients'>Ingredients</Link>
          </div>
        </div>
        <div className="ourStory">
          <div className="ourStory-image">
            <img src={ImageFAQ}/>
          </div>
          <div className="ourStory-title">
            <Link to='FAQ'>FAQ</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubNavOurStory