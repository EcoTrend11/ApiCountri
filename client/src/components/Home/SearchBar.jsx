import { useState } from "react"
import { useDispatch } from "react-redux";
import { getCountryByName } from "../../store/action";




const SearchBar = () =>{

    const[name,setName] = useState('')
    const dispatch = useDispatch()
    
    function handleInputChange(e){
        e.preventDefault();
        setName(e.target.value);
    }

    function handleInputSubmit(e){
        e.preventDefault();
        dispatch(getCountryByName(name))
    }




    return(
        <div>
            <input
                type="text"
                placeholder="buscar pais"
                onChange={(e)=>{handleInputChange(e)}}
                value={name}                
            />
            <button
                onClick={(e)=>{handleInputSubmit(e)}} 
                type="submit"   
            >
                search
            </button>
        </div>
    )
}

export default SearchBar