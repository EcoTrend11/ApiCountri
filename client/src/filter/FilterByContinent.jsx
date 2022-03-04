import { useDispatch } from "react-redux"
import { filterContinent } from "../store/action"

const FilterByContinent = () =>{
    const dispatch = useDispatch()

    function FilterContinent(e){
        let key = e.target.name
        let value = e.target.value
        dispatch(filterContinent(key , value))
    }

    return(
        <div>
            <label>Continente : </label>
            <select name="region" onChange={FilterContinent}>
                <option value="default">--DEFAULT--</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
    )
}

export default FilterByContinent