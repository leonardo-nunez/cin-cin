import { useState, useEffect } from 'react';
import './App.css';

const CocktailCard = ({ cocktailsData }) => {

  const cocktailName = cocktailsData.drinks[0].strDrink;
  const image = cocktailsData.drinks[0].strDrinkThumb;
  const instructions = cocktailsData.drinks[0].strInstructions

  return (
    <>
      <h1>{cocktailName}</h1>
      <img src={image} alt="" height="200px" width="200px" />
      <h3>Ingredients</h3>
      <Ingredients cocktailsData={cocktailsData} />

      <p>{instructions}</p>
    </>
  )
}

const Ingredients = ({ cocktailsData }) => {
  const cocktailObject = cocktailsData.drinks[0]

  const fetchedIngedients = 
    Object.keys(cocktailObject)
      .filter((key) => key.includes('strIngredient'))
      .reduce((obj, key) => {
        obj[key] = cocktailObject[key];
        return obj;
      }, {})
  const ingredients = Object.keys(fetchedIngedients)
  .filter((k) => fetchedIngedients[k] != null)
  .reduce((a, k) => ({ ...a, [k]: fetchedIngedients[k] }), {});
  const ingredientsArr = Object.values(ingredients)

  const fetchedMeasures = 
    Object.keys(cocktailObject)
      .filter((key) => key.includes('strMeasure'))
      .reduce((obj, key) => {
        obj[key] = cocktailObject[key];
        return obj;
      }, {})
  const measures = Object.keys(fetchedMeasures)
  .filter((k) => fetchedMeasures[k] != null)
  .reduce((a, k) => ({ ...a, [k]: fetchedMeasures[k] }), {});
  const measuresArr = Object.values(measures)
      
  return(
    <>
      <ul>
       {ingredientsArr.map((ingredient, index) => <li key={index}>{ingredient}</li>)}
      </ul>
      <ul>
       {measuresArr.map((measure, index) => <li key={index}>{measure}</li>)}
      </ul>
    </>
  )
}

const App = () => {
  const [query, setQuery] = useState('');
  const [cocktailsData, setCocktailsData] = useState();

  // useEffect(() => {
  //   return cocktailsData ? console.log(cocktailsData.drinks[0].strDrinkThumb) : null
  // },[cocktailsData])

  const getCocktail = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/cocktail/' + query)
    const body = await response.json();
    setCocktailsData(body)
    setQuery('')
  };

  return (
    <div className="app">
      <h1>Cocktail Search</h1>
      <form onSubmit={getCocktail}>
        <input value={query} onChange={e => setQuery(e.target.value)} />
        <button>Find Cocktail</button><br/>
      </form>

      {cocktailsData ? <CocktailCard cocktailsData={cocktailsData} /> : null}
    </div>
  );
}


export default App;