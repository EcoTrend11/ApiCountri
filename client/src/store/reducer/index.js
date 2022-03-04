/* eslint-disable no-fallthrough */
import { COUNTRY_DETAIL, FILTER_ABC, FILTER_CONTINENT, FILTER_COUNTRY, GET_COUNTRIES, SEARCH_BY_NAME, SET_VALUE } from "../action/constants"

const initialState = {
    countries : [],
    countryDetail: [],
    filterCountry: []
}


function reducer (state = initialState, action) {
        if(action.type === FILTER_CONTINENT ) {
            let key = action.payload.key;
            let value = action.payload.value
            let newFilter = [...state.countries]
            let readyFilter = newFilter.filter(e =>{
                return e[key] === value
            })

            console.log(readyFilter)
            return{
                ...state,
                filterCountry : readyFilter
            }
        }

        if(action.type === FILTER_ABC) {
            let value = action.payload
            let newFilter = [...state.countries]
            if(value === "mayor"){
                console.log("entre a mayor")
                
                newFilter.sort(function (a, b) {
                    if (a.name > b.name) {
                      return 1;
                    }
                    if (a.name < b.name) {
                      return -1;
                    }
                    return 0;
                  });

                
                return{
                    ...state,
                    filterCountry : newFilter
                }
            }
            if(value === "menor"){
                newFilter.sort(function (a, b) {
                    if (a.name < b.name) {
                      return 1;
                    }
                    if (a.name > b.name) {
                      return -1;
                    }
                    return 0;
                  });
                
                return{
                    ...state,
                    filterCountry : newFilter
                }

            }
            if(value === "default"){
                return{
                    ...state,
                    filterCountry: newFilter
                }
            }


        }

        if(action.type === SET_VALUE) {
            return{
                ...state,
            postActivity : action.payload
            }
        }
        
        if(action.type === GET_COUNTRIES ) {
            return {
                ...state,
                countries: action.payload,
                filterCountry : action.payload
            }
        }
        
        if(action.type === COUNTRY_DETAIL) {
            return {
                ...state,
                countryDetail : action.payload
            }
        }

        if(action.type === FILTER_COUNTRY) {

            let value = action.payload
            if(value === "mayor"){


                let newFilter = [...state.countries]
                function comparar(a,b){
                    let valorA = a.population
                    let valorB = b.population
                    return valorB - valorA
                }
                newFilter.sort(comparar) 
                return {
                    ...state,
                    filterCountry : newFilter
                }
            }
            if(value === "menor"){
                
                
                let newFilter = [...state.countries]
                function comparar(a,b){
                    let valorA = a.population
                    let valorB = b.population
                    return valorA - valorB
                }
                newFilter.sort(comparar)
                return {
                    ...state,
                    filterCountry : newFilter
                }
            
            }
            if(value === "default"){
                let newFilter = [...state.countries]
                return{
                    ...state,
                    filterCountry: newFilter
                }
            }
        }

        if(action.type === SEARCH_BY_NAME ) {
            return{
                ...state,
                filterCountry : action.payload
            }
        }

        return state
    }


export default reducer