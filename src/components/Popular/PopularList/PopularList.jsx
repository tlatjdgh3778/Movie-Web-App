import React, { useContext } from 'react';
import { MovieContext } from 'contexts/movie';
import { GridListTile, GridListTileBar } from '@material-ui/core';
import * as GS from 'style/componentstyle';
import { backdropImg, nullImg } from 'utils/constants';
import { useHistory } from 'react-router-dom';
import { getMovieDetail, getMovieCredit, getMovieRecommendation, getMovieVideo } from 'apis/getMovieData';

const PopularList = ({ getGridListCols }) => {
    const { popular } = useContext(MovieContext).state;
    const { setDetail, setCredit, setRecommendation, setVideo } = useContext(MovieContext).actions;

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
                {popular.results.map((movie, i) => (
                    <GridListTile onClick={e => {
                        getDetail(e.currentTarget.id)
                    }} key={i} id={movie.id}>
                        <img alt={movie.title} src={movie.poster_path === null ? nullImg : (backdropImg + movie.poster_path)}></img>
                        <GridListTileBar title={movie.title}></GridListTileBar>
                    </GridListTile>
                ))}
            </GS.ListMovie>
        </>
    );
}

export default PopularList;

