import { useState, useEffect } from 'react';
import './App.css';
import CocktailCard from './components/CocktailCard'

// const Navbar

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