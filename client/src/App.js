import { useState, useEffect } from 'react';
import './App.css';
import CocktailCard from './components/CocktailCard';
import { Autocomplete, TextField } from '@mui/material';
import cocktailNameList from './assets/cocktailNameList';

const App = () => {
  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [cocktailsData, setCocktailsData] = useState(null);

  useEffect(() => {
    const getCocktail = async () => {
      const response = await fetch(
        'http://localhost:5000/api/cocktail/' + value
      );
      const body = await response.json();
      body.drinks && setCocktailsData(body);
    };

    value && getCocktail();
  }, [value]);

  const rendercocktailsCard = () =>
    cocktailsData && <CocktailCard cocktailsData={cocktailsData} />;

  return (
    <div className="main">
      <div className="background-line__left" />
      <div className="background-line__center" />
      <div className="background-line__right" />
      <div className="main__title-wrapper">
        <h1 className="main__title">Cin Cin</h1>
      </div>
      <div className="main__form-wrapper">
        <Autocomplete
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          id="controllable-states-demo"
          options={cocktailNameList}
          sx={{ width: 250 }}
          renderInput={(params) => (
            <TextField {...params} label="Find Cocktail" />
          )}
        />
      </div>
      {rendercocktailsCard()}
      <div className="footer">.</div>
    </div>
  );
};

export default App;
