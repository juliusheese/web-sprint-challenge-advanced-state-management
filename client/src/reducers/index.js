
export const initialState = {
    arrSmurf: [],
    isLoading: false,
    error: "An Error Has Occured"
}

export const reducer = (state = initialState, action)=>{
    switch (action.type) {

        case ('CALL_START'):
            return ({
                ...state,
                isFetching:true,
            })
        case ('CALL_S'):
            return ({
                ...state,
                isFetching: false,
                smurf: action.payload,
            })
        case ('CALL_F'):
            return ({
                ...state,
                isFetching: false,
                error: action.payload,
            })
        case ('GET_SMURF'):
            return ({...state, isFetching: false, smurf: action.smurf

        })
        case ('ADD_SMURF'):
            
            return {...state, 
            arrSmurf: [...state.smurf, action.payload],
            isFetching: false,
            };
        case ('SET_ERROR'):
                return ({
                    ...state,
                    error: action.payload
                })    
        default:
            return state
    }
};



//Task List:
//1. Add in the initialState needed to hold: 
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//2. Setup your reducer to take the state and action as peremeters
//3. Add in cases to your reducer to handle:
//      - The start of an api call
//      - The end of an api call
//      - The adding a smurf to the smurf list when added into payload
//      - Setting Error Text
//      - Any other state changes you see as 