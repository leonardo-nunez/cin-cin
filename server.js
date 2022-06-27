const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const axios = require('axios');

const path = require('path');

// import cocktailNameList from './cincin/src/assets/cocktailNameList.js';

app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get('/api/cocktail/:query', (req, res) => {
  const { query } = req.params;
  console.log('A ' + query + ' will be served shortly.');
  var config = {
    method: 'get',
    url: 'http://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + query,
    headers: {
      Authorization: '1',
    },
  };

  res.header('Access-Control-Allow-Origin', '*');

  axios(config)
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      console.log('THERE WAS AN ERROR!!!!', error);
    });
});

app.get('/api/letter/:letter', (req, res) => {
  const { letter } = req.params;
  var config = {
    method: 'get',
    url: 'http://www.thecocktaildb.com/api/json/v1/1/search.php?f=' + letter,
    headers: {
      Authorization: '1',
    },
  };

  const cocktailNamesArr = (r) => {
    const allDrinks = r.data.drinks;
    return allDrinks && allDrinks.map((d, i) => i + 1 + ' - ' + d.strDrink);
  };

  res.header('Access-Control-Allow-Origin', '*');

  axios(config)
    .then(function (response) {
      res.send(cocktailNamesArr(response));
    })
    .catch(function (error) {
      console.log('THERE WAS AN ERROR!!!!', error);
    });
});

app.get('/api/all', (_req, res) => {
  const alphabetAndNumbers = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
  ];

  let cocktailNamesArr = [];

  const getCocktalNames = (r) => {
    const allDrinks = r.data.drinks;
    return (
      allDrinks && cocktailNamesArr.push(...allDrinks.map((d) => d.strDrink))
    );
  };

  res.header('Access-Control-Allow-Origin', '*');

  const fetchNames = async () => {
    for (let i = 0; i < alphabetAndNumbers.length; i++) {
      var config = {
        method: 'get',
        url:
          'http://www.thecocktaildb.com/api/json/v1/1/search.php?f=' +
          alphabetAndNumbers[i],
        headers: {
          Authorization: '1',
        },
      };
      await axios(config).then(function (response) {
        console.log('call nr:', i + 1);
        getCocktalNames(response);
      });
    }
    res.send(cocktailNamesArr);
  };

  // if (!cocktailNameList) {
  fetchNames();
  // } else {
  //   res.send('Cocktail list is already available');
  // }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
