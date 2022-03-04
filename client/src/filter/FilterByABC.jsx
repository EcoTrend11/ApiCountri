import { useDispatch } from "react-redux"
import { filterABC } from "../store/action"




const FilterByAbc = () =>{
    
    const dispatch = useDispatch()

    function filterChange(e){
        let value = e.target.value
        dispatch(filterABC(value))

    }

    return(
        <div>
            <label> Ordenar Por : </label>
            <select   onChange={filterChange}>
                <option value="default">--DEFAULT--</option>
                <option value="mayor"> A - Z </option>
                <option value="menor"> Z - A </option>
            </select>
        </div>
    )
}

export default FilterByAbc