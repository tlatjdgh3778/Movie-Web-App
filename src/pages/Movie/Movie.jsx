import React, { useEffect } from "react";

import * as GS from "style/componentstyle";
import { useSelector, useDispatch } from "react-redux";
import Loading from "components/Loading/Loading";
import { fetchMovies, fetchMoviesRequest } from "store/modules/movies";
import MovieList from "components/MovieList/MovieList";

const Movie = ({ location }) => {
    const dispatch = useDispatch();
    let movie = location.pathname.replace("/", "");
    movie = movie[0].toLowerCase() + movie.slice(1, movie.length);
    let filter;

    if (movie === "popular") {
        filter = "popular";
    } else if (movie === "nowPlaying") {
        filter = "now_playing";
    } else if (movie === "topRated") {
        filter = "top_rated";
    }

    useEffect(() => {
        dispatch(fetchMovies(filter));
        return () => {
            dispatch(fetchMoviesRequest(filter)); // clean-up
        };
    }, [dispatch, filter]);

    const loading = useSelector(({ movies }) => movies[movie].loading);

    if (loading) {
        return <Loading />;
    }
    return (
        <>
            <GS.MovieContainer>
                <div>
                    <GS.ListMovieTitle>{movie.toUpperCase()}</GS.ListMovieTitle>
                    <GS.ListMovieSubTitle>MOVIES</GS.ListMovieSubTitle>
                </div>
                <MovieList movie={movie} />
            </GS.MovieContainer>
        </>
    );
};

export default Movie;
