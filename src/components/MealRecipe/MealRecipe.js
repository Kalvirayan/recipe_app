import axios from 'axios';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './MealRecipe.scss';


const MealRecipe = () => {

        const [mealSearch , setMealSearch] = useState("");
        const [recipes , setRecipes] = useState("");
        

        const getRecipes =()=>{
            axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealSearch}`)
            .then(res=>{
                setRecipes(res.data.meals);
            })
        }

  return (
    <div className='recipe'>
        <div className='recipe-search'>
            <input type="number" placeholder="Search by meal Id..."  onChange={(e)=>setMealSearch(e.target.value)}/>
            <button onClick={getRecipes}>Search recipe</button>
        </div>

        <div className='recipe-details'>
        {recipes? (recipes.map((recipe)=>(
            <div className='recipe-ins' key={recipe.idMeal}>
            <img src={recipe.strMealThumb} alt="#"/>
            <h2><span>Meal Name:</span> {recipe.strMeal}</h2>
            <p><span>Recipe:</span> {recipe.strInstructions}</p>
            <h3>Youtube Link :<Link> {recipe.strYoutube}</Link></h3>
            </div>

            
       ))
      ): (<h2>No recipes Found</h2>)}
        </div>

      
    </div>
  )
}

export default MealRecipe;



