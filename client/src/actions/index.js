export const  GET_COUNTRIES = "GET_COUNTRIES"

export function getCountries (){
    return (dispatch) => fetch("https://restcountries.com/v3.1/all")
        .then((response) => {
            console.log("prueba")
            return response.json()
        })
        .then((json) => {
            dispatch({
                type: GET_COUNTRIES,
                payload: json.results
            })
        })
        .catch((error) => {
            console.log(error)
        })
} 

