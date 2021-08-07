import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMovies, fetchMoviesRequest } from "store/modules/movies";

export const useRender = (value) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovies(value));

        return () => {
            dispatch(fetchMoviesRequest(value));
        };
    }, [dispatch, value]);
};
