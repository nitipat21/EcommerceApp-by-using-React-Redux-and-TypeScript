import ImageIngredient1 from '../Assets/Images/ingredient1.jpg'

const IngredientCard = () => {
  return (
    <div className="ingredientCard">
        <div className="ingredient-button">
            <button>info</button>
        </div>
        <div className="ingredient-image">
            <img src={ImageIngredient1}></img>
        </div>
        {/* <div className="ingredient-info">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, cupiditate.</p>
        </div> */}
    </div>
  )
}

export default IngredientCard