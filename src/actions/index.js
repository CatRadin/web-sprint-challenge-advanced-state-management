import axios from 'axios';


//My Constants so I don't misspell anything and create problems in my code! -----------------
export const FETCH_SMURF_LOADING = "FETCH_SMURF_LOADING"
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS"
export const FETCH_SMURF_FAIL = "FETCH_SMURF_FAIL"
export const ADD_SMURF = "ADD_SMURF"
export const SET_ERROR = "SET_ERROR"

//Thunk async action ----------------------------------------------------
    //This fetches smurfs from the server!
export const fetchSmurfs = () => { 
    return dispatch => {
        dispatch({ type: FETCH_SMURF_LOADING })
        axios
        .get('http://localhost:3333/smurfs')
            .then((res) => {
                dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data })
            })
            .catch((error) => {
                dispatch({type: FETCH_SMURF_FAIL, payload: 'There was an error'})
            })
    }
}

//Action to add a new Smurf to the array from the server + lets the Smurf show up in the Smurf list ----------------
export const addSmurf = (smurf) => {
    return dispatch => {
        dispatch({ type: FETCH_SMURF_LOADING })
        axios
        .post('http://localhost:3333/smurfs', smurf)
            .then((res) => {
                dispatch( { type: ADD_SMURF, payload: smurf })
            })
            .catch((error) => {
                console.log(error)
                dispatch({ type: SET_ERROR, payload: 'Add something into empty field'})
            })
    }
}

//Action to set an error message for the add smurf form ------------------------------------------------------
export const setError = (error) => {
    return dispatch => {
        dispatch({type: SET_ERROR, payload: error})
    }
}


//Task List: ✔️
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made. ✔️
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary) ✔️
//3. Add a standard action that allows us to set the value of the error message slice of state. ✔️