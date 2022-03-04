import { COUNTRY_DETAIL, FILTER_ABC, FILTER_CONTINENT, FILTER_COUNTRY, GET_COUNTRIES, SEARCH_BY_NAME, SET_VALUE } from "./constants";

export function getCountries() {
    return function ( dispatch) {
        return fetch('http://localhost:3001/coun')
        .then((response)=> {
            return response.json()
        })
        .then((json)=>{
            dispatch({
                type: GET_COUNTRIES,
                payload : json
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export function countryDetail(id){
    return function( dispatch ){
        return fetch ('http://localhost:3001/coun/byId/'+id.toUpperCase())
        .then((response)=>{
            return response.json()
        })
        .then((json) =>{
            dispatch({
                type : COUNTRY_DETAIL,
                payload : json
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}
export function getCountryByName(value){
    return function( dispatch ){
        return fetch ('http://localhost:3001/coun/byQuery?name='+value)
        .then((response)=>{
            return response.json()
        })
        .then((json) =>{
            dispatch({
                type : SEARCH_BY_NAME,
                payload : json
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}


export function filterPopulation(value){
    console.log(value)
    return {
    type: FILTER_COUNTRY,
    payload: value
    }
}

export function setLevel(value){
    return {
        type: SET_VALUE,
        payload : value
    }
}

export function filterABC (value){
    console.log(value)
    return{
        type: FILTER_ABC,
        payload : value
    }
}

export function filterContinent (key,value){
    return{
        type: FILTER_CONTINENT,
        payload : {
            key, 
            value
        }
    }
}


