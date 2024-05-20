import React, { useState, useEffect } from "react";
import Modal from "./MyModal";

function RandomSelection({ favrtRecipie }) {
  //   useEffect(() => {
  //     setFavrtRecipes(extractedData);
  // })

  return (
    <div>
      <h2>Favourite Recipe List</h2>
      <div className="favt-list">
        {favrtRecipie?.map((FavrtRecipe) => (
          <div className="recipe" key={FavrtRecipe.id}>
            <img src={FavrtRecipe.image} alt={FavrtRecipe.name} />
            <h3>{FavrtRecipe.name}</h3>
            {/* <p>Price: {recipe.price} USD</p> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default RandomSelection;
