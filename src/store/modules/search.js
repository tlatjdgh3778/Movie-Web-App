// results module
// ducks pattern
import { API_KEY } from 'utils/constants';
import axios from 'axios';

// type
export const FETCH_SEARCH_REQUEST = 'search/FETCH_SEARCH_REQUEST';
export const FETCH_SEARCH_SUCCESS = 'search/FETCH_SEARCH_SUCCESS';
export const FETCH_SEARCH_FAILURE = 'search/FETCH_SEARCH_FAILURE';

// actions creator
export const fetchSearchRequest = () => {
    return {
        type: FETCH_SEARCH_REQUEST
    }
}

export const fetchSearchSuccess = results => {
    return {
        type: FETCH_SEARCH_SUCCESS,
        payload: results
    }
}

export const fetchSearchFailure = err => {
    return {
        type: FETCH_SEARCH_FAILURE,
        payload: err
    }
}

export const fetchSearchResult = (search) => {
    return (dispatch) => {
        dispatch(fetchSearchRequest())
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=ko&query=${search}&page=1&include_adult=false`)
            .then(response => {
                const results = response.data
                dispatch(fetchSearchSuccess(results))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchSearchFailure(errorMsg))
            });
    }
}
// reducer
const initialState = {
    loading: false,
    searchResults: [],
    searchValue: '',
    err:''
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_SEARCH_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_SEARCH_SUCCESS:
            return {
                ...state,
                loading: false,
                searchResults: action.payload,
                err: '',
            }
        case FETCH_SEARCH_FAILURE:
            return {
                ...state,
                loading: false,
                searchResults: [],
                err: action.payload
            }
        default:
            return state
    }
}