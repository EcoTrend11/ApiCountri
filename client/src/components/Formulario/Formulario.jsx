import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCountries } from "../../store/action"
import Loading from "../Loading/Loading"
import CheckBoxList from "./CheckBoxList"
import InputDuration from "./InputDuration"
import InputName from "./InputName"
import LevelSelection from "./LevelSelection"
import SeasonSelector from "./SeasonSelector"
import axios from 'axios';
import Titulo from "../Home/Titulo"

const Formulario = () =>{

    const [prueba, setPrueba] = useState({
        name:"",
        level:null,
        duration:"",
        season:"",
        countriId:[]
    })

    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const countries = useSelector(function(state){
        return state.countries
    })


    useEffect(function(){
        setLoading(true);
        dispatch(getCountries())
        setLoading(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    

    async function onClick(e){
        e.preventDefault()
            let pruebita = await axios.post("http://localhost:3001/acti/addActivity",prueba )
            let data = pruebita.data
            alert(data)

    }
    const [disable, setDisable] = useState(true)

    function onChange (e){
        if(prueba.name.length > 0 && prueba.level !== null && prueba.duration.length > 0 && prueba.season.length > 0 && prueba.countriId.length > 0 ){
            console.log("entre aca")
            setDisable(false)
        }else{
            setDisable(true)
        }
    }

    
    if(loading){
        return<Loading/>
    }
    else{
        return (

            <div>
                <Titulo/>
                <form onChange={onChange}>
                    <button onClick={(e)=>onClick(e)} disabled={disable} >ENVIAR</button>
                    <input type = "reset"/>
                    <InputName prueba={prueba} />
                    <InputDuration prueba={prueba}/>
                    <LevelSelection prueba={prueba}/>
                    <SeasonSelector prueba={prueba}/>
                    <CheckBoxList countries={countries} prueba={prueba}/>

                    </form>
            </div>
        )
    }
    
    
}

export default Formulario