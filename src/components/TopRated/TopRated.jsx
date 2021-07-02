import React, { useContext } from 'react';
import { MovieContext } from 'contexts/movie';
import { useTheme } from '@material-ui/core/styles';
import { GridListTile, GridListTileBar, useMediaQuery } from '@material-ui/core';
import * as GS from 'style/componentstyle';
import { backdropImg, nullImg } from 'utils/constants';

const TopRated = () => {
    const { topRated } = useContext(MovieContext).state;
    const theme = useTheme();

    const mobileMatches = useMediaQuery(theme.breakpoints.values.mobile);
    const tabletMatches = useMediaQuery(theme.breakpoints.values.tablet);
    const laptopMatches = useMediaQuery(theme.breakpoints.values.laptop);
    const desktopMatches = useMediaQuery(theme.breakpoints.values.desktop);

    const getGridListCols = () => {
        if(mobileMatches){
            return 2;
        }
        if(tabletMatches){
            return 2;
        }
        if(laptopMatches){
            return 3;
        }
        if(desktopMatches){
            return 4;
        }
    }

    return(
        <>
            <GS.ListMovieTitle>별점이 높은 영화 목록</GS.ListMovieTitle>
            <GS.MovieContainer>        
                <GS.ListMovie cellHeight={'auto'} cols={getGridListCols()} spacing={30}> 
                    {topRated.results.map((movie, i) => (
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

export default TopRated;