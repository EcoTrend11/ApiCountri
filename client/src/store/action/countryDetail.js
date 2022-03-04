import { COUNTRY_DETAIL } from "./constants";


export function countryDetail(id) {
    return function (dispatch) {
        return fetch('http://localhost:3001/coun/byId/' + id.toUpperCase())
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                dispatch({
                    type: COUNTRY_DETAIL,
                    payload: json
                });
            })
            .catch((err) => {
                console.log(err);
            });
    };
}
