import React from "react";
import RecipeCard from "./RecipeCard";

const RecipeContainer = ({recipes, search}) => {
    const recipeDisplay = recipes
    .filter((recipe) => {
        let title = recipe.recipe_name.toLowerCase()
        let searchParams = search.toLowerCase()
        return title.includes(searchParams) && recipe.image_url.includes("https")
    })
        .map((recipe) => {
        return(<RecipeCard recipe = {recipe}/>)
    })

        return(
            <div className="recipe-container">
                {recipeDisplay}
            </div>

        )
    }

export default RecipeContainer