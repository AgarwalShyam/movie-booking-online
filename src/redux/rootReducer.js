
import { combineReducers } from 'redux';


import movieDetailsReducer from './reducers/moviesList';


const rootReducer = combineReducers({

    movies: movieDetailsReducer,

});

export default rootReducer;