const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const axios = require('axios');


app.get('/api/cocktail/:query', (req, res) => {
  const { query } = req.params
  console.log(query);
  var config = {
    method: 'get',
    url: 'http://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + query,
    headers: { 
      'Authorization': '1'
    }
  };
  
  res.header("Access-Control-Allow-Origin", "*");
  
  axios(config)
  .then(function (response) {
    res.send(response.data);
  })
  .catch(function (error) {
    console.log('THERE WAS AN ERROR!!!!', error);
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
//   res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
//   next();
// });