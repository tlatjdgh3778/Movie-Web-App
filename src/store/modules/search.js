// results module
// ducks pattern
import { API_KEY } from "utils/constants";
import axios from "axios";
import produce from "immer";

// type
export const FETCH_SEARCH_REQUEST = "search/FETCH_SEARCH_REQUEST";
export const FETCH_SEARCH_SUCCESS = "search/FETCH_SEARCH_SUCCESS";
export const FETCH_SEARCH_FAILURE = "search/FETCH_SEARCH_FAILURE";

// actions creator
export const fetchSearchRequest = (value) => {
    return {
        type: FETCH_SEARCH_REQUEST,
        value,
    };
};

export const fetchSearchSuccess = (results, value) => {
    return {
        type: FETCH_SEARCH_SUCCESS,
        payload: results,
        value,
    };
};

export const fetchSearchFailure = (err, value) => {
    return {
        type: FETCH_SEARCH_FAILURE,
        payload: err,
        value,
    };
};

export const fetchSearchResult = (search) => {
    console.log(search);
    return (dispatch) => {
        dispatch(fetchSearchRequest(search));
        axios
            .get(
                `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=ko&query=${search}&page=1&include_adult=false`
            )
            .then((response) => {
                const results = response.data;
                dispatch(fetchSearchSuccess(results, search));
            })
            .catch((error) => {
                const errorMsg = error.message;
                dispatch(fetchSearchFailure(errorMsg, search));
            });
    };
};
// reducer
const initialState = {
    loading: false,
    searchResults: [],
    searchValue: "",
    err: "",
};

export default function reducer(state = initialState, action) {
    return produce(state, (draft) => {
        switch (action.type) {
            case FETCH_SEARCH_REQUEST:
                draft.loading = true;
                draft.searchValue = action.value;
                break;
            case FETCH_SEARCH_SUCCESS:
                draft.loading = false;
                draft.searchResults = action.payload;
                draft.err = "";
                draft.searchValue = action.value;
                break;
            case FETCH_SEARCH_FAILURE:
                draft.loading = false;
                draft.searchResults = [];
                draft.err = action.payload;
                draft.searchValue = action.value;
                break;
            default:
                break;
        }
    });
}
