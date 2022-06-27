const Ingredients = ({ cocktailsData }) => {
  const cocktailObject = cocktailsData.drinks[0]

  const fetchFilter = (obj) => {
    const fetchedIngedients = 
      Object.keys(cocktailObject)
        .filter((key) => key.includes(obj))
        .reduce((obj, key) => {
          obj[key] = cocktailObject[key];
          return obj;
        }, {})
    const ingredients = Object.keys(fetchedIngedients)
    .filter((k) => fetchedIngedients[k] != null)
    .reduce((a, k) => ({ ...a, [k]: fetchedIngedients[k] }), {});
    return Object.values(ingredients)
  }
  const ingredientsArr = fetchFilter('strIngredient')
  const measuresArr = fetchFilter('strMeasure')
      
  return(
    <>
      <ul className="card__list">
       {ingredientsArr.map((ingredient, index) => <li className="card__list-item" key={index}>{ingredient}</li>)}
      </ul>
      <ul className="card__list">
       {measuresArr.map((measure, index) => <li className="card__list-item" key={index}>{measure}</li>)}
      </ul>
    </>
  )
}

export default Ingredients;