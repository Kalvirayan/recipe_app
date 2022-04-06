import React , {useState , useEffect, useContext, useCallback} from 'react'
import './HomePage.scss'
import axios from 'axios';
const HomePage = () => {

  const [Search , setSearch] = useState("");

  const [meals , setMeals] = useState([]);
  



 const fetchRecipesHandler = () =>{
  axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${Search}`)
  .then(res=>{
    setMeals(res.data.meals);
    console.log(meals);
  })
 }


  


  return (
    <div className='home'>
      <div className='home-search'>
        <input type="text" placeholder = "Type a meal name....."  value={Search} onChange={(e)=>setSearch(e.target.value)}/>
        <button onClick={fetchRecipesHandler} >Search</button>
      </div>
    
      <div className='home-grid'>
       {meals? (meals.map((meal)=>(
            <div className='home-recipes' key={meal.idMeal}>
              <img src={meal.strMealThumb} alt="#"/>
              <h4>{meal.strMeal}</h4>
              <h4>Meal Id: {meal.idMeal}</h4>

            </div>
       ))
      ): (<h2>No meal Found</h2>)}
      </div>
      
    </div>
  )
}

export default HomePage;
