import React from 'react';
import * as GS from 'style/componentstyle';
import { backdropImg, nullImg } from 'utils/constants';
import { GridListTile, GridListTileBar } from '@material-ui/core';
import { useSelector } from 'react-redux';

const MainNowPlaying = ({ toPage, getDetail, getGridListCols }) => {
    const nowPlaying = useSelector(({ movies }) => movies.nowPlaying.results);

    return(
        <GS.ListContainer>
                <GS.ListHeader>
                    <GS.ListTitle>상영중인 영화</GS.ListTitle>
                    <GS.ViewAll id="NowPlaying" onClick={e => {
                    toPage(e.currentTarget.id)
                }}>전체 보기</GS.ViewAll>
                </GS.ListHeader>
                    <GS.MovieContainer>
                        <GS.List cellHeight={'auto'} spacing={20} cols={getGridListCols()}>
                        {nowPlaying.results.map((movie, i)=> {
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

export default MainNowPlaying;