import React from "react";
import { useNavigate, Navigate } from "react-router-dom";
const RecipeCard = ({recipe}) => {
    console.log(recipe, "adsf")
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/recipe/${recipe.recipe_id}`)
    }
    return(
        <div className="recipe-card">
            <img 
            src={recipe.image_url} 
            alt="" 
            style={{
                height: 250
            }}
            />
            <div>
                <h1>{recipe.recipe_name}</h1>
                <button onClick={handleClick}>See More</button>
            </div>
        </div>
    )
}

export default RecipeCard