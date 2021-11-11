import Favorite from "./Favorite";
import Ingredients from "./Ingredients"

const CocktailCard = ({ cocktailsData }) => {

  const cocktailName = cocktailsData.drinks[0].strDrink;
  const image = cocktailsData.drinks[0].strDrinkThumb;
  const instructions = cocktailsData.drinks[0].strInstructions

  return (
    <>
      <h1>{cocktailName}</h1>
      <Favorite />
      <img src={image} alt="" height="200px" width="200px" />
      <h3>Ingredients</h3>
      <Ingredients cocktailsData={cocktailsData} />
      <h3>Instructions</h3>
      <p>{instructions}</p>
    </>
  )
}

export default CocktailCard;