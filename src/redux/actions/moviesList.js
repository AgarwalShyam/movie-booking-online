import axios from 'axios'
import { MOVIE_DETAILS, MOVIES_HAVE_ERROR, MOVIES_ARE_LOADING, MOVIES_FETCH_DATA_SUCCESS } from '../../common/constants';

// import data from '../../common/data'

// export const getMovieDetailsService_2 = () => {

//     return {

//         type: MOVIE_DETAILS,
//         payload: data.results

//     };

// };

export function moviesHaveError(bool) {
    return {
        type: MOVIES_HAVE_ERROR,
        isError: bool
    };
}

export function moviesAreLoading(bool) {
    return {
        type: MOVIES_ARE_LOADING,
        isLoading: bool
    };
}

export function moviesFetchDataSuccess(items) {
    return {
        type: MOVIES_FETCH_DATA_SUCCESS,
        data: items
    };
}


export const getMovieDetailsService = (url) => {
    return (dispatch) => {
        axios.get(url).then((response) => {
            if (response.status !== 200) {
                throw Error(response.statusText)
            }
            dispatch(moviesAreLoading(false));
            console.log(response);
            return response;
        })
            .then((response) => {
                dispatch(moviesFetchDataSuccess(response.data.results))
            })
            .catch(() => dispatch(moviesHaveError(true)))

    }
}

