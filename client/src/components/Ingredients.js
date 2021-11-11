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

export default Ingredients;