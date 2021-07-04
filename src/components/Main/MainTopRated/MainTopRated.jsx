import React, { useContext } from 'react';
import { MovieContext } from 'contexts/movie';
import * as GS from 'style/componentstyle';
import { backdropImg, nullImg } from 'utils/constants';
import { GridListTile, GridListTileBar } from '@material-ui/core';

const MainTopRated = ({ toPage, getDetail, getGridListCols }) => {
    const { topRated } = useContext(MovieContext).state;

    return(
        <GS.ListContainer>
            <GS.ListHeader>
                <GS.ListTitle>별점높은 영화</GS.ListTitle>
                <GS.ViewAll id="TopRated" onClick={e => {
                    toPage(e.currentTarget.id)
                }}>전체 보기</GS.ViewAll>
            </GS.ListHeader>
            <GS.MovieContainer>
                <GS.List cellHeight={'auto'} spacing={20} cols={getGridListCols()}>
                    {topRated.results.map((movie, i)=> {
                        return (
                        <GridListTile id={movie.id} key={i} onClick={e=> {
                            getDetail(e.currentTarget.id)
                        }}>
                            <img alt={movie.title} src={movie.poster_path === null ? nullImg : (backdropImg + movie.poster_path)}></img>
                            <GridListTileBar title={movie.title}></GridListTileBar>
                        </GridListTile>)
                    })}
                </GS.List>
            </GS.MovieContainer>
        </GS.ListContainer>
    );
}

export default MainTopRated;