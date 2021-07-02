import React, { useContext } from 'react';
import { MovieContext } from 'contexts/movie';
import { GridListTile, GridListTileBar } from '@material-ui/core';
import * as GS from 'style/componentstyle';
import { backdropImg, nullImg } from 'utils/constants';

const Popular = ({ getGridListCols }) => {
    const { popular } = useContext(MovieContext).state;

    return(
        <>
            <GS.ListMovieTitle>인기 영화 목록</GS.ListMovieTitle>
            <GS.MovieContainer>        
                <GS.ListMovie cellHeight={'auto'} cols={getGridListCols()} spacing={30}> 
                    {popular.results.map((movie, i) => (
                        <GridListTile key={i} id={movie.id}>
                            <img src={movie.poster_path === null ? nullImg : (backdropImg + movie.poster_path)}></img>
                            <GridListTileBar title={movie.title}></GridListTileBar>
                        </GridListTile>
                    ))}
                </GS.ListMovie>
            </GS.MovieContainer>
        </>
    );
}

export default Popular;

