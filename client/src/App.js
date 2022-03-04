import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import CountriesGrid from './components/Home/CountriesGrid.jsx';
import CountryDetail from './components/Detail/CountryDetail';
import Formulario from './components/Formulario/Formulario';
import Landing from './components/LandingPage/Landing';




function App(){

  return (
    <Router>
      <Switch>
        <Route exact path ='/'><Landing/></Route>
        <Route exact path='/countryDetail/:countryId'><CountryDetail/></Route>
        <Route  path='/home' ><CountriesGrid/></Route>
        <Route exact path='/formulario'><Formulario/></Route>
      </Switch>
    </Router>
    
  );
}

export default App; 
