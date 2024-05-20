import React from 'react';

const RecipeCard = ({ recipe, openModal }) => {
  const handleClick = () => {
    openModal(recipe);
  };

  return (
    <div className="box" onClick={handleClick}>
      <img className="box-img" src={recipe.strMealThumb} alt={recipe.strMeal} />
      <h2>{recipe.strMeal}</h2>
      <p>{recipe.strInstructions}</p>
    </div>
  );
};

export default RecipeCard;
