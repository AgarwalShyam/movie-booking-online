import { MOVIE_DETAILS } from './MovieService.types';

const INITIAL_STATE = {

    data: [],
};



const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case MOVIE_DETAILS:

            return {

                ...state, data: action.payload

            };


        default: return state;

    }

};

export default reducer;