import React, {useEffect, useState} from 'react'
import AdBanner from './AdBanner'
import axios from 'axios'
import RecipeCard from './RecipeCard'
import RecipeContainer from './RecipeContainer'
import {BiSearchAlt2} from 'react-icons/bi'
const HomeScreen = () => {

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState("")
  const getRecipes = () => {
    axios
        .get("https://recipes.devmountain.com/recipes")
        .then((res) => {
            setRecipes(res.data)
        })
  }

  useEffect(() => {
    getRecipes()
  },[])




  return (
    <div>
      <AdBanner />
      <div className='search-div'>
      <BiSearchAlt2 size="2em" color="#DA7635" />
        <input 
        type="text" 
        value = {search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for a Recipe"
        />
      </div>
    <RecipeContainer
        search = {search}
        recipes = {recipes}
    />
    
    </div>
  )
}

export default HomeScreen