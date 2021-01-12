import axios from 'axios';

export const CALL_START = 'CALL_START';
export const CALL_S = 'CALL_S';
export const ADD_SMURF = 'FETCHING_PIC_SUCCESS';
export const SET_ERROR = 'FETCHING_PIC_FAIL';


export const getSmurf = () => {
    return (dispatch => {
        dispatch({ type: CALL_START });

        axios
            .get('http://localhost:3333/')
            .then((res) => {
                dispatch({ type: CALL_S, payload: res.data })
            })
            .catch((err) => {
                dispatch({ type: CALL_S, payload : err.response.message })
            })
         
    })
}
export const addSmurf = (s, arr) => {
    return (dispatch => {
        dispatch({ type: ADD_SMURF });
        arr.push(s);
    })
}
export const setError = (ne, oe) => {
    return (dispatch => {
        dispatch({ type: SET_ERROR });
        oe = ne;
    })
}





//Task List:
//1. Add fetch smurfs action: 
//              - fetch and return initial list of smurfs
//              - dispatch actions that indicate if we are waiting for a server response
//              - dispatch an error text action if an error is returned from the server
//2. Add add smurf action:
//              - dispatch an error text action if smurf data does not includes a name, nickname and position field
//              - send a post request with the smurf as body to see if there is an error
//              - dispatch add smurf action if request is successful
//              - dispatch an error text action if an request returns an error
//3. Add set error text action:
//              - return action object setting error text
//4. Any other actions you deem nessiary to complete application.