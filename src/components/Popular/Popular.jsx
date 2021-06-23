import React, { useContext } from 'react';
import { MovieContext } from 'contexts/movie';

const Popular = () => {
    const { state, actions } = useContext(MovieContext);

    return(
        <>
            <div>
                {state.popular.results.map((movie, i) => {
                    return (
                        <div key={i}>
                            <div>{movie.title}</div>
                            <div>{movie.overview}</div>
                        </div>
                    )
                })}
            </div>
        </>
    );
}

export default Popular;

