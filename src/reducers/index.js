
//Initial State Here --------------------------------------------------
export const initialState = {
        smurfs:[],
        isLoading: false,
        error: '',
}

export const reducer = (state = initialState, action) => {

    //Switch Statement Here --------------------------------------------------
    switch(action.type) {
        case("FETCH_SMURF_LOADING"): //This starts the fetch! 
            return({
                ...state,
                isLoading: true
            });
        case("FETCH_SMURF_SUCCESS"): //Sets up state upon a successful fetch!
            return({
                smurfs:[],
                isLoading: false
            });
        case("FETCH_SMURF_FAIL"): //Sets up state upon a failed fetch!
            return({
                ...state,
                error: action.payload,
                isLoading: false
            });
        case("ADD_SMURF"): //Sets up state when a new smurf is added in!
            return({
                ...state,
                isLoading: false,
                error: '',
                smurfs: [...state.smurfs, {id: Date.now(), ...action.payload}]
            });
        case("SET_ERROR")://Sets up state when there is an error in the form!
            return ({
                ...state,
                isLoading: false,
                error: action.payload
            })
        default: //Returns the initial state if none of the above cases are true!
            return state;
            
    }

}



//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs ✔️
//  - a boolean indicating if the app is loading ✔️
//  - a string indicating a possible error message ✔️

//2. Add in the arguments needed to complete a standard reducer function.✔️
//3. Add in a reducer case to accomidate the start of a smurf fetch.✔️
//4. Add in a reducer case to accomidate the successful smurf api fetch.✔️
//5. Add in a reducer cases to accomidate the failed smurf api fetch. ✔️
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list. ✔️
//7. Add in a reducer case that adds in a value to the error message. ✔️