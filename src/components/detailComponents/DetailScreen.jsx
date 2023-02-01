import React, {useEffect, useState} from 'react'
import salmon from "../../assets/salmon.jpg";
import { useParams} from 'react-router-dom';
import axios from 'axios';

const DetailScreen = () => {  
  const { id } = useParams()
  const [recipe, setRecipe] = useState({})
  
  useEffect(() => {
    axios
        .get(`https://recipes.devmountain.com/recipes/${id}`)
        .then((res) => {
            setRecipe(res.data)

        });
  }, []);
  console.log(recipe)

  // let ingredientList = recipe.ingredients.map(ele => {
  //   return(
  //     <p>{ele.ingredient}</p>
  //   )
  // })

  return (
    <section>
    <div className="detail-banner"
      style={{
        background: `linear-gradient(
          190deg,
          rgba(0, 0, 0, 0.8),
          rgba(0, 0, 0, 0.8)),
          url(${recipe.image_url})`,
        
      }}
    >
      <div>
        <h1>{recipe.recipe_name}</h1>
      </div>
    </div>
    <div className='detail-container'>
      <div className='detail-recipe-ingredient'>
        <div className='detail-recipe-container'>
          <h1>Recipe</h1>
          <p>Type: {recipe.type}</p>
          <p>Prep Time: {recipe.prep_time}</p>
          <p>Cook Time: {recipe.cook_time}</p>
          <p>Serves: {recipe.serves}</p>
          
        </div>
        <div className='detail-ingredient-container'>
          <h1>Ingredients:</h1>
          {recipe.ingredients?.length > 0 ? recipe.ingredients.map(ele => {
            return(
              <p>{ele.ingredient}</p>
            )
          }): <p>(no ingredients listed)</p>} 
        </div>
      </div>
      <div className='detail-instructions-container'>
        <h1>Instructions</h1>
        <p>{recipe.instructions}</p>
      </div>
    </div>
    </section>
  );
};

export default DetailScreen;
