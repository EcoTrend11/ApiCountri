import { useDispatch } from "react-redux"
import { filterPopulation } from "../store/action"




const FilterByPopulation = () =>{
    const dispatch = useDispatch()
    
    function filterChange(e){
        let value = e.target.value
        console.log(value)
        dispatch(filterPopulation(value))
    }

    return(
        <div>
            <label> Poblacion :  </label>
            <select  id="poblacion-select" onChange={filterChange}>
                <option value="default">--DEFAULT--</option>
                <option value="mayor">MAYOR A MENOR</option>
                <option value="menor">MENOR A MAYOR</option>
            </select>
        </div>
    )
}

export default FilterByPopulation