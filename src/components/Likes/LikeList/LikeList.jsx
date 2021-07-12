import React, { useState, useContext } from 'react';
import { GridListTile, GridListTileBar } from '@material-ui/core';
import { getMovieDetail, getMovieCredit, getMovieRecommendation, getMovieVideo } from 'apis/getMovieData';
import { backdropImg, nullImg } from 'utils/constants';
import { useHistory } from 'react-router-dom';
import { MovieContext } from 'contexts/movie';
import * as GS from 'style/componentstyle';
import * as S from './LikeList.style';

const LikeList = ({ getGridListCols }) => {
    const { setDetail, setCredit, setRecommendation, setVideo } = useContext(MovieContext).actions;
    const [del, setDel] = useState(true);
    const LikeMovies = Object.keys(localStorage);
    const history = useHistory();

    const getDetail = async (id) => {
        const detail = await getMovieDetail(id);
        const credit = await getMovieCredit(id);
        const recommendation = await getMovieRecommendation(id);
        const video = await getMovieVideo(id);

        await setDetail(detail);
        await setCredit(credit);
        await setRecommendation(recommendation);
        await setVideo(video);
        history.push(`/Detail/${id}`);
    };
    
    return(
        <>
        <GS.ListMovie cellHeight={'auto'} cols={getGridListCols()} spacing={30}> 
                {LikeMovies.map((movie, i) => {
                    return(
                        <GridListTile onClick={e => {
                            getDetail(e.currentTarget.id)
                        }} key={i} id={JSON.parse(localStorage.getItem(movie)).id}>
                        <img alt={JSON.parse(localStorage.getItem(movie)).title} src={JSON.parse(localStorage.getItem(movie)).posterPath === null ? nullImg : (backdropImg + JSON.parse(localStorage.getItem(movie)).posterPath)}></img>
                        <GridListTileBar 
                            title={JSON.parse(localStorage.getItem(movie)).title}
                            actionIcon={
                                <S.CustomIconButton id={JSON.parse(localStorage.getItem(movie)).id} onClick={e => {
                                    e.stopPropagation()
                                    // 로컬리스트 삭제
                                    localStorage.removeItem(e.currentTarget.id)
                                    setDel(!del)
                                }}>
                                    <S.CustomDeleteIcon />
                                </S.CustomIconButton>
                            }></GridListTileBar>
                        </GridListTile>
                    )  
                })}
            </GS.ListMovie>
        </>
    );
}

export default LikeList;