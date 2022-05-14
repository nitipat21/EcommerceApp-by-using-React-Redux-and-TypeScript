import { FaInfoCircle } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import ImageIngredient1 from '../Assets/Images/ingredient1.jpg'
import { menuSliceActions } from '../store/menuSlice'

const IngredientCard = () => {

  const dispatch = useDispatch();

  const displayIngredientInfo = () => {
    dispatch(menuSliceActions.displayIngredientInfo());
  }

  return (
    <div className="ingredientCard">
        <div className="ingredient-button">
          <FaInfoCircle onClick={displayIngredientInfo}/>
        </div>
        <div className="ingredient-image">
            <img src={ImageIngredient1}></img>
        </div>
    </div>
  )
}

export default IngredientCard