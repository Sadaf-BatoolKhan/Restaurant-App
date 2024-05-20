import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./My-components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./My-components/home";
import { BrowserRouter } from "react-router-dom";
import RandomSelection from "./My-components/favrtRecipies";
import Modal from "./My-components/MyModal";
import Country from "./My-components/countries";

function App({ recipe }) {
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [favrtRecipie, setFavrtRecipe] = useState([
    {
      id: 1,
      name: "Spaghetti Carbonara",
      image:
        "https://images.ctfassets.net/3vz37y2qhojh/4B2QkY3grTx5oigHJQou1f/a8326779160ea8024265a87c96923763/Olga_30MnSpgCarbonara_Hero-Horizontal-Olga-Ivanova-V3.jpg?w=750&fit=fill&fm=webp",
    },
    {
      id: 2,
      name: "Chicken Parmesan",
      image:
        "https://playswellwithbutter.com/wp-content/uploads/2022/02/Beef-and-Vegetable-Stir-Fry-16.jpg",
    },
    {
      id: 3,
      name: "Vegetable Stir-Fry",
      image:
        "https://thecozycook.com/wp-content/uploads/2022/08/Chicken-Parmesan-Recipe-f-500x500.jpg",
    },
  ]);

  function MyModal(idMeal) {
    setShowModal(showModal === idMeal ? "" : idMeal);
  }

  useEffect(() => {
    async function getRecipes() {
      try {
        setIsLoading(true);
        setError("");

        if (search.length < 3) {
          setRecipes([]);
          setError("");
        }
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
        );
        if (!response.ok) throw new Error("failed to loading...");
        const data = await response.json();
        if (!data.meals) throw new Error("Recipies Not Found");
        console.log("data", data);
        setRecipes(data.meals);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    getRecipes();
  }, [search]);

  return (
    <>
      <header>
        <Navbar search={search} onSearch={setSearch} />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="favourite"
          element={<RandomSelection favrtRecipie={favrtRecipie} />}
        />
      </Routes>

      <div className="boxes">
        {isLoading && <Loader />}
        {error && <Error message={error} />}
        {!isLoading && !error ? (
          <>
            {recipes?.map((recipe) => (
              <div
                className="box"
                key={recipe.idMeal}
                onClick={() => MyModal(recipe.idMeal)}
              >
                <img
                  className="box-img"
                  src={recipe.strMealThumb}
                  alt={recipe.strMeal}
                />
                <h2>{recipe.strMeal}</h2>
                {/* <p>{recipe.strInstructions}</p> */}
              </div>
            ))}
          </>
        ) : (
          ""
        )}
        {showModal && (
          <>
            <Modal
              recipe={recipes.find((recipe) => recipe.idMeal === showModal)}
              setShowModal={setShowModal}
              favrtRecipie={favrtRecipie}
              setFavrtRecipe={setFavrtRecipe}
            />
          </>
        )}
      </div>
      <Country/>
    </>
  );
}

function Loader() {
  return (
    <>
      <h1>Loading....</h1>
    </>
  );
}
function Error({ message }) {
  return (
    <>
      <h1>Error: {message}</h1>
    </>
  );
}

export default App;
