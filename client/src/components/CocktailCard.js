import Favorite from "./Favorite";
import Ingredients from "./Ingredients"

const CocktailCard = ({ cocktailsData }) => {
  const cocktailName = cocktailsData.drinks[0].strDrink;
  const image = cocktailsData.drinks[0].strDrinkThumb;
  const instructions = cocktailsData.drinks[0].strInstructions

  return (
    <article className="card">
      <img className="card__image" src={image} alt="" height="200px" width="200px" />
      <h1 className="card__title--main">{cocktailName}</h1>
      <h3 className="card__title">Ingredients</h3>
      <div className="card__ingredients-wrapper">
        <Ingredients cocktailsData={cocktailsData} />
      </div>
      <h3 className="card__title">Instructions</h3>
      <div className="card__instructions-wrapper">
      <p className="card__instructions">{instructions}</p>
      </div>
      {/* <Favorite /> */}
    </article>
  )
}

export default CocktailCard;