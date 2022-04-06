import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import Categories from './components/Categories/Categories';
import HomePage from './components/HomePage/HomePage';
import MealRecipe from './components/MealRecipe/MealRecipe';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
    
      <Switch>
          <Route exact path = "/" component={HomePage}/>
          <Route exact path = "/categories" component = {Categories}/>
          <Route exact path = "/mealrecipes" component = {MealRecipe}/>
       </Switch>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
