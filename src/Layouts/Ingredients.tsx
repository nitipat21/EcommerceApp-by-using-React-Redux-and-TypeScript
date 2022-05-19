import { useSelector } from 'react-redux'
import IngredientContainer from '../Components/IngredientContainer'
import IngredientInfo from '../Components/IngredientInfo';
import { RootState } from '../store'

const Ingredients = () => {

    const isDisplayIngredientInfo = useSelector((state:RootState)=> state.shop.isDisplayIngredientInfo);

  return (
    <div className="ingredients-container">
        <div className="wrapper">
            {isDisplayIngredientInfo ? <IngredientInfo/> : ''}
            <IngredientContainer/>
            <div className="ingredients-wrapper">
                <div className="ingredients-header">
                    <h1>Because ingredients matter.</h1>
                </div>
                <div className="ingredients-paragraph">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, quibusdam ullam! Tempora blanditiis quo recusandae.</p>
                </div>
                <div className="ingredients-link">
                    <a href="">Learn more about our ingredients</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Ingredients