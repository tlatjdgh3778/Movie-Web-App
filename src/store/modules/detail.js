// detail module
// ducks pattern
import axios from 'axios';
import { API_KEY } from 'utils/constants';
// detail, cast, video, reco

export const FETCH_DETAIL_REQUEST = 'detail/FETCH_DETAIL_REQUEST' 
export const FETCH_DETAIL_SUCCESS = 'detail/FETCH_DETAIL_SUCCESS' 
export const FETCH_DETAIL_FAILURE = 'detail/FETCH_DETAIL_FAILURE' 

export const fetchDetailRequest = () => {
    return {
        type: FETCH_DETAIL_REQUEST
    }
}

export const fetchDetailSuccess = results => {
    return {
        type: FETCH_DETAIL_SUCCESS,
        payload: results
    }
}

export const fetchDeatilFailure = err => {
    return {
        type: FETCH_DETAIL_FAILURE,
        paload: err
    }
}

export const fetchDetail = (movieId) => {
    return (dispatch) =>  {
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=ko-KR`)
            .then(response => {
                dispatch(fetchDetailSuccess(response.data))
            })
            .catch(error => {
                dispatch(fetchDeatilFailure(error.message))
            })
    }
}

// reducer
const initialState = {
    // detail page
    loading: false,
    err: '',
    results: [],
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_DETAIL_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_DETAIL_SUCCESS:
            return {
                ...state,
                loading: false,
                results: action.payload
            }
        case FETCH_DETAIL_FAILURE:
            return {
                ...state,
                loading: false,
                results: [],
                err: action.payload
            }
        default:
            return state
    }
}