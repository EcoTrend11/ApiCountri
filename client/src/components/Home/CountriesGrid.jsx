import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom/cjs/react-router-dom.min"
import FilterByAbc from "../../filter/FilterByABC"
import FilterByContinent from "../../filter/FilterByContinent"
import FilterByPopulation from "../../filter/FilterByPopulation"
import CountryCard from "./CountryCard"
import Loading from "../Loading/Loading"
import Pagination from "./Pagination"
import SearchBar from "./SearchBar"
import { getCountries } from "../../store/action"
import Titulo from "./Titulo"



const CountriesGrid = () =>{

  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentpage] = useState(1)
  const [postPerPage, setPostPerPage] = useState(10)
  const paginate = (pageNumber) => setCurrentpage(pageNumber);
  

  
  const countries = useSelector(function(state){
    return state.filterCountry
  })
  
  const dispatch = useDispatch()
  useEffect(function(){
    setLoading(true)
    dispatch(getCountries())
    setLoading(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  const indexOfLastCountry = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastCountry - postPerPage;
  const currentPost = countries.slice(indexOfFirstPost , indexOfLastCountry)
  
  
  if(loading){
    return <Loading/>
  }

    else{
    return (
        <div>
          <Titulo/>
          <SearchBar/>
          <FilterByAbc/>
          <FilterByPopulation/>
          <FilterByContinent/>
          <Link to="/formulario">
            CREAT ACTIVIDAD
          </Link>
          <div>
            <Pagination postsPerPage = {postPerPage} totalPosts={countries.length } paginate={paginate}/>
          </div>
          <div>
            <CountryCard countries={currentPost}  />
          </div>
        </div>
    )
  }
}

export default CountriesGrid