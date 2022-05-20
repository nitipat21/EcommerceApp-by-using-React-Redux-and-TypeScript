import { FaInfoCircle } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { menuSliceActions } from '../store/menuSlice'
import ImageIngredient1 from '../Assets/Images/ingredient1.jpg'
import ImageIngredient2 from '../Assets/Images/ingredient2.jpg'
import ImageIngredient3 from '../Assets/Images/ingredient3.jpg'
import ImageIngredient4 from '../Assets/Images/ingredient4.jpg'
import ImageIngredient5 from '../Assets/Images/ingredient5.jpg'
import ImageIngredient6 from '../Assets/Images/ingredient6.jpg'
import { FC } from 'react'

const IngredientCard:FC = () => {

  const dispatch = useDispatch();

  const displayIngredientInfo = () => {
    dispatch(menuSliceActions.displayIngredientInfo());
  }

  return (
    <div className="ingredientCard-container">
      <div className="ingredientCard">
          <div className="ingredient-button">
            <FaInfoCircle onClick={displayIngredientInfo}/>
          </div>
          <div className="ingredient-image">
              <img src={ImageIngredient1}></img>
          </div>
      </div>
      <div className="ingredientCard">
          <div className="ingredient-button">
            <FaInfoCircle onClick={displayIngredientInfo}/>
          </div>
          <div className="ingredient-image">
              <img src={ImageIngredient2}></img>
          </div>
      </div>
      <div className="ingredientCard">
          <div className="ingredient-button">
            <FaInfoCircle onClick={displayIngredientInfo}/>
          </div>
          <div className="ingredient-image">
              <img src={ImageIngredient3}></img>
          </div>
      </div>
      <div className="ingredientCard">
          <div className="ingredient-button">
            <FaInfoCircle onClick={displayIngredientInfo}/>
          </div>
          <div className="ingredient-image">
              <img src={ImageIngredient4}></img>
          </div>
      </div>
      <div className="ingredientCard">
          <div className="ingredient-button">
            <FaInfoCircle onClick={displayIngredientInfo}/>
          </div>
          <div className="ingredient-image">
              <img src={ImageIngredient5}></img>
          </div>
      </div>
      <div className="ingredientCard">
          <div className="ingredient-button">
            <FaInfoCircle onClick={displayIngredientInfo}/>
          </div>
          <div className="ingredient-image">
              <img src={ImageIngredient6}></img>
          </div>
      </div>
    </div>
  )
}

export default IngredientCard