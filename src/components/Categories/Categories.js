import axios from 'axios';
import React, {useState ,useEffect} from 'react'
import './Categories.scss';

const Categories = () => {
   
  const [categories , setCategories] = useState([]);

  useEffect(()=>{
    getCategories();
  },[]);


  const getCategories =()=>{
    axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(res=>{
      console.log(res.data);
      setCategories(res.data.categories);
    })
  }

  return (
    
      <div className='categories'>
        {categories.map((category)=>(
          <div key={category.idCategory}>
            <img src={category.strCategoryThumb} alt='#'/>
            <h4>{category.strCategory}</h4>
          </div>
        ))}
      </div>
      
  )
}

export default Categories;
