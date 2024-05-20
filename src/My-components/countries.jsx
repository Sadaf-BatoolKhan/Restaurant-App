import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import americanFlagImage from "../assets/american-flags.png";
import australianFlag from "../assets/australian-flag-small.png";
import britishFlag from "../assets/british-flag-small.png";
import candianFlag from "../assets/canadian-flag-small.png";
import chineaseFlag from "../assets/chinese-flag-small.png";
import croatianFlag from "../assets/croatian-flag-small.png";
import germanFlag from "../assets/german-flag-small.png";
import indianFlag from "../assets/indian-flag-small.png";
import italianFlag from "../assets/italian-flag-small.png";
import DutchFlag from "../assets/Dutch-flag.png";
import EgyptianFlag from "../assets/Egyptian.png";
import FilipinoFlag from "../assets/Filipino-flag.jpeg";
import frenchFlag from "../assets/french flag.png";
import irishFlag from "../assets/irish-flag.png";
import jamicaFlag from "../assets/jamaica-flag.png";
import malaysiaFlag from "../assets/malaysia-flag.png";
import maxicoFlag from "../assets/mexico-flaf.png";
import marocanFlag from "../assets/morocan flag.jpeg";
import polishFlag from "../assets/polish-flag.png";
import portugueseFlag from "../assets/portuguese-flag.png";
import russiaFlag from "../assets/russia-flag.png";
import spanishFlag from "../assets/spanish-flag.png";
import thaiFlag from "../assets/thai-flag.png";
import turkishFlag from "../assets/turkish-flag.png";



function Country() {
  const[countryRecipie , setCountryRecipie] =useState([]);
  const [countryModalOpen ,setCountryModalOpen] = useState(false);
  const [countries, setCountries] = useState([
    {
      id:1,
      strArea: "American",
      image: americanFlagImage
    },
    {
      id:2,
      strArea: "British",
      image: britishFlag
    },
    {
      id:3,
      strArea: "Canadian",
      image: candianFlag

    },
    {
      id:4,
      strArea: "Chinese",
      image:chineaseFlag
    },
    {
      id:5,
      strArea: "Croatian",
      image:croatianFlag
    },
    {
      id:6,
      strArea: "Dutch",
      image: DutchFlag
    },
    {
      id:7,
      strArea: "Egyptian",
      image:EgyptianFlag
    },
    {
      id:8,
      strArea: "Filipino",
      image:FilipinoFlag
    },
    {
      id:9,
      strArea: "French",
      image:frenchFlag
    },
    {
      id:10,
      strArea: "Austrilian",
      image: australianFlag
    },
    {
      id:11,
      strArea: "Indian",
      image:indianFlag
    },
    {
      id:12,
      strArea: "Irish",
      image: irishFlag
    },
    {
      id:13,
      strArea: "Italian",
      image:italianFlag
    },
    {
      id:14,
      strArea: "Jamaican",
      image: jamicaFlag
    },
    {
      id:15,
      strArea: "Japanese",
      image: germanFlag
    },
    {
      id:16,
      strArea: "Malaysian",
      image: malaysiaFlag
    },
    {
      id:17,
      strArea: "Mexican",
      image: maxicoFlag
    },
    {
      id:18,
      strArea: "Moroccan",
      image: marocanFlag
    },
    {
      id:19,
      strArea: "Polish",
      image: polishFlag
    },
    {
      id:20,
      strArea: "Portuguese",
      image: portugueseFlag
    },
    {
      id:21,
      strArea: "Russian",
      image: russiaFlag
    },
    {
      id:22,
      strArea: "Spanish",
      image: spanishFlag
    },
    {
      id:23,
      strArea: "Thai",
      image: thaiFlag
    },
    {
      id:24,
      strArea: "Turkish",
      image: turkishFlag
    }

  ]);

  const HanldeFlagClick=(strArea)=>{
      fetchData(strArea);
      setCountryModalOpen(true);
  }

  const fetchData = async(strArea)=>{
       try{
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${strArea}`);
        const countrydata = await response.json();
        setCountryRecipie(countrydata.meals);

        console.log("country fetch data", countrydata);
       }catch (error) {
        console.error("error in fetching recipie" , error)
  }

  }

  // useEffect(() => {
  //   const Fetchcountries = async () => {
  //     try {
  //       const response = await fetch(
  //         `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
  //       );
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch countries");
  //       }
  //       const data = await response.json();
  //       console.log("countries data is", data);
  //       setCountries(data.meals);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   Fetchcountries();
  // }, []);
  return (
    <>
      <h2 className="countries">Countries</h2>
      <div>
        <div className="flags-list">
          {countries.map((countrie) => (
            <div className="flags" key={countrie.strArea} onClick={()=>HanldeFlagClick(countrie.strArea)}>
            <img src={countrie.image}/>
            </div>
          ))}
        </div>
        <h2 className="browse">Browse By Country</h2>
      </div>
      {countryModalOpen &&(
        <div className="countryModal">
          <div className="countryModal-content">
            <div className="close" onClick={()=>setCountryModalOpen(false)}>❌</div>
            <h2 className="recipie">Recipies</h2>
            <div className="country-recipie">
              {countryRecipie.map((countryfood)=>(
                <div key={countryfood.idMeal}>{countryfood.strArea}
                <img src={countryfood.strMealThumb}/>
                <h3>{countryfood.strMeal}</h3>
                </div>
              ))}
            </div>

          </div>
        </div>
      )}
    </>
  );
}
export default Country;
