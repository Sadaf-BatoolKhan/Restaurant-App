import React from "react";
// import { Rating } from "react-simple-star-rating";
import { StarRating } from "star-ratings-react";
import { useState } from "react";
import RandomSelection from "./favrtRecipies";
import { useEffect } from "react";

function Modal({ recipe, setShowModal, favrtRecipie, setFavrtRecipe }) {
  const [rating3, setRating3] = useState(0);

  const [recipeId, setRecipeId] = useState(null);
  const [recipeData, setRecipeData] = useState([]);

  const FetchDataFromApi = async (idMeal) => {
    try {
      const responsed = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
      );
      if (!responsed.ok) {
        throw new Error("Fail to fetch data");
      }
      const data = await responsed.json();
      if (!data.meals || data.meals.length === 0) {
        throw new Error("No meal found for the provided ID");
      }
      console.log("dataIs", data);
      setShowModal(false);

      const extractedData = data.meals.map((meal) => ({
        id: meal.idMeal,
        name: meal.strMeal,
        image: meal.strMealThumb,
        // ingredients: [meal.strIngredient1, meal.strIngredient2, meal.strIngredient3]
      }));

      setFavrtRecipe([...favrtRecipie, ...extractedData]);
      console.log("recipie data", extractedData);
    } catch (error) {
      console.error("error in fetching data", error);
    }
  };
  const handClickButton = (idMeal) => {
    setRecipeId(idMeal);
    // setShowModal(false);
  };
  useEffect(() => {
    if (recipeId !== null) {
      FetchDataFromApi(recipeId);
    }
  }, [recipeId]);

  return (
    <>
      <div className="Modal-outside"></div>
      <div className="Modal-content">
        <button className="close" onClick={() => setShowModal(false)}>
          ❌
        </button>
        <div className="details" key={recipe.idMeal}>
          <img src={recipe.strMealThumb} />
          <h2>{recipe.strMeal}</h2>
          <h2>Ingredient:</h2>
          <ul>
            <li>{recipe.strIngredient1}</li>
            <li>{recipe.strIngredient2}</li>
            <li>{recipe.strIngredient3}</li>
            <li>{recipe.strIngredient4}</li>
            <li>{recipe.strIngredient5}</li>
            <li>{recipe.strIngredient6}</li>
            <li>{recipe.strIngredient7}</li>
            <li>{recipe.strIngredient8}</li>
            <li>{recipe.strIngredient9}</li>
            <li>{recipe.strIngredient10}</li>
          </ul>
          <h4>Please watch the video for the recipe of the food</h4>
          <p>{recipe.strYoutube}</p>
          {/* <Rating onClick={handleRating}/> */}
          <StarRating
            rating={rating3}
            onSetRating={setRating3}
            starColor={"yellow"}
            maxRating={5}
          />
          {rating3 >= 1 && (
            <button
              className="add-fav"
              onClick={() => handClickButton(recipe.idMeal)}
            >
              Add to favouites
            </button>
          )}
        </div>
      </div>
    </>
  );
}
export default Modal;
