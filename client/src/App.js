import './App.css';
import { useEffect } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { getCountries } from './actions/index';

function App() {

  const  countries = useSelector(function(state){
    return state.countries
  });

  const dispatch = useDispatch();

  useEffect(function() {
    dispatch(getCountries())
  },)

  console.log(countries)
  return (
    <div className="App">
      <h1>Henry Countries</h1>
      <div>{countries}</div>
    </div>
  );
}

export default App; 
