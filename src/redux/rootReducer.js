
import { combineReducers } from 'redux';


import movieDetailsReducer from './MovieService/MovieService.reducer';


const rootReducer = combineReducers({

    movies: movieDetailsReducer,

});

export default rootReducer;