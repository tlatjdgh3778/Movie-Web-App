// movies module
// popular, nowPlaying, topRated
import axios from "axios";
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
    switch (action.type) {
        case FETCH_MOVIES_REQUEST:
            if (action.filter === "popular") {
                return {
                    ...state,
                    popular: {
                        ...state.popular,
                        loading: true,
                    },
                };
            }
            if (action.filter === "top_rated") {
                return {
                    ...state,
                    topRated: {
                        ...state.topRated,
                        loading: true,
                    },
                };
            }
            if (action.filter === "now_playing") {
                return {
                    ...state,
                    nowPlaying: {
                        ...state.nowPlaying,
                        loading: true,
                    },
                };
            }
            if (action.filter === "trend") {
                return {
                    ...state,
                    trend: {
                        ...state.trend,
                        loading: true,
                    },
                };
            }
        /* falls through */
        case FETCH_MOVIES_SUCCESS:
            if (action.filter === "popular") {
                return {
                    ...state,
                    popular: {
                        ...state.popular,
                        loading: false,
                        results: action.payload,
                        success: true,
                    },
                };
            }
            if (action.filter === "top_rated") {
                return {
                    ...state,
                    topRated: {
                        ...state.topRated,
                        loading: false,
                        results: action.payload,
                        success: true,
                    },
                };
            }
            if (action.filter === "now_playing") {
                return {
                    ...state,
                    nowPlaying: {
                        ...state.nowPlaying,
                        loading: false,
                        results: action.payload,
                        success: true,
                    },
                };
            }
            if (action.filter === "trend") {
                return {
                    ...state,
                    trend: {
                        ...state.trend,
                        loading: false,
                        results: action.payload,
                        success: true,
                    },
                };
            }
        /* falls through */
        case FETCH_MOVIES_FAILURE:
            if (action.filter === "popular") {
                return {
                    ...state,
                    popular: {
                        ...state.popular,
                        loading: false,
                        results: [],
                        err: action.payload,
                    },
                };
            }
            if (action.filter === "top_rated") {
                return {
                    ...state,
                    topRated: {
                        ...state.topRated,
                        loading: false,
                        results: [],
                        err: action.payload,
                    },
                };
            }
            if (action.filter === "now_playing") {
                return {
                    ...state,
                    nowPlaying: {
                        ...state.nowPlaying,
                        loading: false,
                        results: [],
                        err: action.payload,
                    },
                };
            }
            if (action.filter === "trend") {
                return {
                    ...state,
                    trend: {
                        ...state.trend,
                        loading: false,
                        results: [],
                        err: action.payload,
                    },
                };
            }
        /* falls through */
        default:
            return state;
    }
}
