import React from "react";
import { useSelector } from "react-redux";

import * as GS from "style/componentstyle";
import MovieItem from "components/MovieItem/MovieItem";

const MovieList = ({ movie }) => {
    const movies = useSelector(({ movies }) => movies[movie].results);

    return (
        <>
            <GS.ListMoviesWrapper>
                {movies.results.map((movie) => (
                    <MovieItem movie={movie} key={movie.id} />
                ))}
            </GS.ListMoviesWrapper>
        </>
    );
};

export default MovieList;
