// detail module
// ducks pattern
import axios from "axios";
import produce from "immer";
import { API_KEY } from "utils/constants";
// detail, cast, video, reco

export const FETCH_DETAIL_REQUEST = "detail/FETCH_DETAIL_REQUEST";
export const FETCH_DETAIL_SUCCESS = "detail/FETCH_DETAIL_SUCCESS";
export const FETCH_DETAIL_FAILURE = "detail/FETCH_DETAIL_FAILURE";

export const fetchDetailRequest = (filter) => {
    return {
        type: FETCH_DETAIL_REQUEST,
        filter,
    };
};

export const fetchDetailSuccess = (results, filter) => {
    return {
        type: FETCH_DETAIL_SUCCESS,
        payload: results,
        filter,
    };
};

export const fetchDetailFailure = (error, filter) => {
    return {
        type: FETCH_DETAIL_FAILURE,
        payload: error,
        filter,
    };
};

const fetchDetailCredit = (movieId, filter) => {
    return (dispatch) => {
        dispatch(fetchDetailRequest(filter));
        axios
            .get(
                `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=ko-KR`
            )
            .then((response) => {
                dispatch(fetchDetailSuccess(response.data, filter));
            })
            .catch((error) => {
                dispatch(fetchDetailFailure(error.message, filter));
            });
    };
};
const fetchDetailVideo = (movieId, filter) => {
    return (dispatch) => {
        dispatch(fetchDetailRequest(filter));
        axios
            .get(
                `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}&language=ko-KR`
            )
            .then((response) => {
                dispatch(fetchDetailSuccess(response.data, filter));
            })
            .catch((error) => {
                dispatch(fetchDetailFailure(error.message, filter));
            });
    };
};
const fetchDetailRecommendation = (movieId, filter) => {
    return (dispatch) => {
        dispatch(fetchDetailRequest(filter));
        axios
            .get(
                `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${API_KEY}&language=ko-KR&page=1`
            )
            .then((response) => {
                dispatch(fetchDetailSuccess(response.data, filter));
            })
            .catch((error) => {
                dispatch(fetchDetailFailure(error.message, filter));
            });
    };
};

export const fetchDetail = (movieId) => {
    return (dispatch) => {
        dispatch(fetchDetailCredit(movieId, "credit"));
        dispatch(fetchDetailVideo(movieId, "video"));
        dispatch(fetchDetailRecommendation(movieId, "recommendation"));
        dispatch(fetchDetailRequest());
        const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=ko-KR`;

        axios
            .get(url)
            .then((response) => {
                dispatch(fetchDetailSuccess(response.data));
            })
            .catch((error) => {
                dispatch(fetchDetailFailure(error.message));
            });
    };
};

// reducer
const initialState = {
    // detail page
    details: {
        loading: false,
        err: "",
        results: [],
    },
    credit: {
        loading: false,
        err: "",
        results: [],
    },
    video: {
        loading: false,
        err: "",
        results: [],
    },
    recommendation: {
        loading: false,
        err: "",
        results: [],
    },
};

export default function reducer(state = initialState, action) {
    return produce(state, (draft) => {
        switch (action.type) {
            case FETCH_DETAIL_REQUEST:
                if (action.filter === "credit") {
                    draft.credit.loading = true;
                    break;
                } else if (action.filter === "video") {
                    draft.video.loading = true;
                    break;
                } else if (action.filter === "recommendation") {
                    draft.recommendation.loading = true;
                    break;
                } else {
                    draft.details.loading = true;
                    break;
                }
            case FETCH_DETAIL_SUCCESS:
                if (action.filter === "credit") {
                    draft.credit.loading = false;
                    draft.credit.results = action.payload;
                    break;
                } else if (action.filter === "video") {
                    draft.video.loading = false;
                    draft.video.results = action.payload;
                    break;
                } else if (action.filter === "recommendation") {
                    draft.recommendation.loading = false;
                    draft.recommendation.results = action.payload;
                    break;
                } else {
                    draft.details.loading = false;
                    draft.details.results = action.payload;
                    break;
                }
            case FETCH_DETAIL_FAILURE:
                if (action.filter === "credit") {
                    draft.credit.loading = false;
                    draft.credit.results = [];
                    draft.credit.err = action.payload;
                    break;
                } else if (action.filter === "video") {
                    draft.video.loading = false;
                    draft.video.results = [];
                    draft.video.err = action.payload;
                    break;
                } else if (action.filter === "recommendation") {
                    draft.recommendation.loading = false;
                    draft.recommendation.results = [];
                    draft.recommendation.err = action.payload;
                    break;
                } else {
                    draft.details.loading = false;
                    draft.details.results = [];
                    draft.details.err = action.payload;
                    break;
                }
            default:
                break;
        }
    });
}
