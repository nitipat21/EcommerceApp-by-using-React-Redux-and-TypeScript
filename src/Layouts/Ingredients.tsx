import React from 'react'
import IngredientCard from '../Components/IngredientCard'

const Ingredients = () => {
  return (
    <div className="ingredients-container">
        <div className="ingredientCard-container">
            <IngredientCard/>
            <IngredientCard/>
            <IngredientCard/>
            <IngredientCard/>
            <IngredientCard/>
            <IngredientCard/>
        </div>
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
  )
}

export default Ingredients