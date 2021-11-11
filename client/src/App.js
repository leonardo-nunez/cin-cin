import { useState, useEffect } from 'react';
import './App.css';

// const CocktailCard = props => {
//   <img src={props.cocktailsData.drinks[0].strDrinkThumb} alt="" height="200px" width="200px" />
// }

const App = () => {
  const [query, setQuery] = useState('');
  const [cocktailsData, setCocktailsData] = useState();

  // useEffect(() => {
  //   return cocktailsData ? console.log(cocktailsData.drinks[0].strDrinkThumb) : null
  // },[cocktailsData])

  const getCocktail = async () => {
    const response = await fetch('http://localhost:5000/api/cocktail/' + query)
    const body = await response.json();
    setCocktailsData(body)
  };

  return (
    <div className="app">
      <h1>Cocktail Search</h1>
      <input value={query} onChange={e => setQuery(e.target.value)} />
      <button onClick={getCocktail}>Find Cocktail</button><br/>

      {/* {cocktailsData ? <CocktailCard cocktailsData={cocktailsData} /> : null} */}
      {cocktailsData ? <img src={cocktailsData.drinks[0].strDrinkThumb} alt="" height="200px" width="200px" /> : null}
    </div>
  );
}


export default App;