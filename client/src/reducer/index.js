import { GET_COUNTRIES } from "../actions";


const initialState = {
    countries : []
}

function reducer( state = initialState ,action){
    switch(action.payload){
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload
            }
        default:
            return state
    }
}

export default reducer