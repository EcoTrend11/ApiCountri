import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import { countryDetail } from "../../store/action"
import ActivityCountryDetail from "./ActivityCountryDetail"
import Loading from "../Loading/Loading"

const CountryDetail = () =>{

    const {countryId} = useParams()
    
    const _countryDetail = useSelector(function(state){
        return state.countryDetail
    })
    
    const dispatch = useDispatch()
      useEffect(()=>{
          console.log("entre al useeffect")
          dispatch(countryDetail(countryId))
        // eslint-disable-next-line react-hooks/exhaustive-deps
        },[])
        
        console.log("estas en detalle :"+ _countryDetail.id)
    if(_countryDetail.activities === undefined){
        return <Loading/>
    }
    
    console.log(_countryDetail.activities)
    return (
        <div>
            <img
                src={_countryDetail.flags}
                alt="img not found"
            />
            <div>Id: {_countryDetail.id}</div>
            <div>Nombre: {_countryDetail.name}</div>
            <div>Capital: {_countryDetail.capital}</div>
            <div>Subregion: {_countryDetail.subregion}</div>
            <div>Area : {_countryDetail.area} Km</div>
            <div>Poblacion: {_countryDetail.population/10000}</div>
            <div>Actividades:{_countryDetail.Actividades} </div>
            <div>
                {  _countryDetail.activities.map(e => <ActivityCountryDetail key={e.id} e={e}/>)}
            </div> 
        </div>
    )
}

export default CountryDetail