// movies module
// popular, nowPlaying, topRated
import axios from "axios";
import produce from "immer";
import { API_KEY } from "utils/constants";

// types
export const FETCH_MOVIES_REQUEST = "movies/FETCH_MOVIES_REQUEST";
export const FETCH_MOVIES_SUCCESS = "movies/FETCH_MOVIES_SUCCESS";
export const FETCH_MOVIES_FAILURE = "movies/FETCH_MOVIES_FAILURE";

// action creator
export const fetchMoviesRequest = (filter) => {
    return {
        type: FETCH_MOVIES_REQUEST,
        filter,
    };
};

export const fetchMoviesSuccess = (results, filter) => {
    return {
        type: FETCH_MOVIES_SUCCESS,
        payload: results,
        filter,
    };
};

export const fetchMoviesFailure = (error, filter) => {
    return {
        type: FETCH_MOVIES_FAILURE,
        payload: error,
        filter,
    };
};

export const fetchMovies = (filter) => {
    return (dispatch) => {
        dispatch(fetchMoviesRequest(filter));
        const url =
            filter === "trend"
                ? `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&language=ko-KR&page=1`
                : `https://api.themoviedb.org/3/movie/${filter}?api_key=${API_KEY}&language=ko-KR&page=1`;

        axios
            .get(url)
            .then((response) => {
                dispatch(fetchMoviesSuccess(response.data, filter));
            })
            .catch((error) => {
                dispatch(fetchMoviesFailure(error, filter));
            });
    };
};

// reducer
const initialState = {
    popular: {
        loading: false,
        results: [],
        err: "",
    },
    nowPlaying: {
        loading: false,
        results: [],
        err: "",
    },
    topRated: {
        loading: false,
        results: [],
        err: "",
    },
    trend: {
        loading: false,
        results: [],
        err: "",
    },
};

export default function reducer(state = initialState, action) {
    return produce(state, (draft) => {
        switch (action.type) {
            case FETCH_MOVIES_REQUEST:
                if (action.filter === "popular") {
                    draft.popular.loading = true;
                    draft.popular.results = [];
                    draft.popular.err = "";
                    break;
                } else if (action.filter === "top_rated") {
                    draft.topRated.loading = true;
                    draft.topRated.results = [];
                    draft.topRated.err = "";
                    break;
                } else if (action.filter === "now_playing") {
                    draft.nowPlaying.loading = true;
                    draft.nowPlaying.results = [];
                    draft.nowPlaying.err = "";
                    break;
                } else {
                    draft.trend.loading = true;
                    draft.trend.results = [];
                    draft.trend.err = "";
                    break;
                }
            case FETCH_MOVIES_SUCCESS:
                if (action.filter === "popular") {
                    draft.popular.loading = false;
                    draft.popular.results = action.payload;
                    break;
                } else if (action.filter === "top_rated") {
                    draft.topRated.loading = false;
                    draft.topRated.results = action.payload;
                    break;
                } else if (action.filter === "now_playing") {
                    draft.nowPlaying.loading = false;
                    draft.nowPlaying.results = action.payload;
                    break;
                } else {
                    draft.trend.loading = false;
                    draft.trend.results = action.payload;
                    break;
                }
            case FETCH_MOVIES_FAILURE:
                if (action.filter === "popular") {
                    draft.popular.loading = false;
                    draft.popular.results = [];
                    draft.popular.err = action.payload;
                    break;
                } else if (action.filter === "top_rated") {
                    draft.topRated.loading = false;
                    draft.topRated.results = [];
                    draft.topRated.err = action.payload;
                    break;
                } else if (action.filter === "now_playing") {
                    draft.nowPlaying.loading = false;
                    draft.nowPlaying.results = [];
                    draft.nowPlaying.err = action.payload;
                    break;
                } else {
                    draft.trend.loading = false;
                    draft.trend.results = [];
                    draft.trend.err = action.payload;
                    break;
                }
            default:
                break;
        }
    });
}
