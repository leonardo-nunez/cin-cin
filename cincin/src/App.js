import { useState } from 'react';
import './App.css';
import CocktailCard from './components/CocktailCard';
import { Autocomplete, TextField } from '@mui/material';
import cocktailNameList from './assets/cocktailNameList';

// const Navbar

const App = () => {
  const [query, setQuery] = useState('');
  const [cocktailsData, setCocktailsData] = useState();
  const [errorMessage, setErrorMessage] = useState('');

  // useEffect(() => {
  //   return cocktailsData ? console.log(cocktailsData.drinks[0].strDrinkThumb) : null
  // },[cocktailsData])

  const getCocktail = async (e) => {
    e.preventDefault();
    if (!e.target.innerHTML) return;
    const chosenCocktail = e.target.innerHTML;
    setErrorMessage('');
    const response = await fetch(
      'http://localhost:5000/api/cocktail/' + chosenCocktail
    );
    const body = await response.json();

    if (!body.drinks) {
      setErrorMessage('No cocktail with that name in our database. Try again.');
      return;
    }
    setCocktailsData(body);
    setQuery('');
  };
  const rendercocktailsCard = () => {
    if (errorMessage) {
      return (
        <div className="error-wrapper">
          <p className="error">{errorMessage}</p>
        </div>
      );
    }
    if (cocktailsData) {
      return <CocktailCard cocktailsData={cocktailsData} />;
    }
    // cocktailsData ? <CocktailCard cocktailsData={cocktailsData} errorMessage={errorMessage} /> : null;
  };

  return (
    <div className="main">
      <div className="background-line__left" />
      <div className="background-line__center" />
      <div className="background-line__right" />
      <div className="main__title-wrapper">
        <h1 className="main__title">Cin Cin</h1>
      </div>
      <div className="main__form-wrapper">
        <form className="main__form" onSubmit={getCocktail}>
          <Autocomplete
            disablePortal
            id="main__Autocomplete"
            options={cocktailNameList}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="Find Cocktail" />
            )}
            onChange={getCocktail}
            // onChange={(e) => setQuery(e.target.innerHTML)}
          />
          {/* <input
            className="main__input"
            required
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          /> */}
          {/* <br />
          <button className="main__button">Find Cocktail</button>
          <br /> */}
        </form>
      </div>
      {rendercocktailsCard()}
    </div>
  );
};

export default App;
