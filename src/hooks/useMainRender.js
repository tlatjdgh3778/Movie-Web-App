import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMovies } from 'store/modules/movies';

export const useMainRender = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovies('popular'))
        dispatch(fetchMovies('top_rated'))
        dispatch(fetchMovies('now_playing'))
        dispatch(fetchMovies('trend'))
    }, [dispatch])
}