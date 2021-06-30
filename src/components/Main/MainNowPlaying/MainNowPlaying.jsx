import React, { useContext } from 'react';
import { MovieContext } from 'contexts/movie';
import * as GS from 'style/componentstyle';
import { backdropImg, nullImg } from 'utils/constants';
import { GridListTile, GridListTileBar } from '@material-ui/core';

const MainNowPlaying = ({ getDetail, getGridListCols }) => {
    const { nowPlaying } = useContext(MovieContext).state;

    return(
        <GS.ListContainer>
                <GS.ListHeader>
                    <GS.ListTitle>상영중인 영화</GS.ListTitle>
                    <GS.ViewAll>전체 보기</GS.ViewAll>
                </GS.ListHeader>
                    {nowPlaying.length === 0 
                    ? 
                    <div>로딩중</div>
                    : 
                    <GS.MovieContainer>
                        <GS.List cellHeight={'auto'} spacing={20} cols={getGridListCols()}>
                        {nowPlaying.results.map((movie, i)=> {
                            return (
                            <GridListTile id={movie.id} key={i} onClick={e=> {
                                getDetail(e.currentTarget.id)
                            }}>
                                <img src={movie.poster_path === null ? nullImg : (backdropImg + movie.poster_path)}></img>
                                <GridListTileBar title={movie.title}></GridListTileBar>
                            </GridListTile>)
                        })}
                        </GS.List>
                    </GS.MovieContainer>
                    }
        </GS.ListContainer>
    );
}

export default MainNowPlaying;