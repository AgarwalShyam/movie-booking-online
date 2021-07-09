import { MOVIE_DETAILS, MOVIES_HAVE_ERROR, MOVIES_ARE_LOADING, MOVIES_FETCH_DATA_SUCCESS } from '../../common/constants';

const INITIAL_STATE = {

    data: [],
    isError: false,
    isLoading: false
};



// const reducer = (state = INITIAL_STATE, action) => {

//     switch (action.type) {

//         case MOVIE_DETAILS:

//             return {

//                 ...state, data: action.payload

//             };


//         default: return state;

//     }

// };

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MOVIES_HAVE_ERROR:
            return {
                ...state, isError: action.isError
            };
        case MOVIES_ARE_LOADING:
            return {
                ...state, isLoading: action.isLoading
            };
        case MOVIES_FETCH_DATA_SUCCESS:
            return {
                ...state, data: action.data
            }
        default:
            return state

    }
}


// export function moviesHaveError(state = INITIAL_STATE, action) {
//     switch (action.type) {
//         case MOVIES_HAVE_ERROR:
//             return action.hasError;

//         default:
//             return state;
//     }
// }

// export function moviesAreLoading(state = INITIAL_STATE, action) {
//     switch (action.type) {
//         case MOVIES_ARE_LOADING:
//             return action.isLoading;

//         default:
//             return state;
//     }
// }

// export function items(state = INITIAL_STATE, action) {
//     switch (action.type) {
//         case MOVIES_FETCH_DATA_SUCCESS:
//             return action.items;

//         default:
//             return state;
//     }
// }

export default reducer;