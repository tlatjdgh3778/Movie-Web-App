import React, { useContext } from 'react';
import { MovieContext } from 'contexts/movie';

const NowPlaying = () => {
    const { state, actions } = useContext(MovieContext);

    return(
        <>
            <div>
                {state.nowPlaying.results.map((movie, i) => {
                    return(
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

export default NowPlaying;