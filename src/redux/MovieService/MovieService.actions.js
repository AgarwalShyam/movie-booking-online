import { MOVIE_DETAILS } from './MovieService.types';
import data from '../../common/data'

export const getMovieDetailsService = () => {

    return {

        type: MOVIE_DETAILS,
        payload: data.results

    };

};

