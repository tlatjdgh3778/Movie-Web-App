import React, { useContext } from 'react';
import { ResultContext } from 'contexts/results';
import { MovieContext } from 'contexts/movie';
import { useHistory } from 'react-router-dom';
import { getMovieDetail, getMovieCredit, getMovieRecommendation, getMovieVideo } from 'apis/getMovieData';
import { GridListTile, GridListTileBar } from '@material-ui/core';
import * as GS from 'style/componentstyle';
import { backdropImg, nullImg } from 'utils/constants';

const Results = ({ getGridListCols }) => {
    const { results, searchValue } = useContext(ResultContext).state;
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

    console.log(results)
    if(results.total_results === 0){
        return(
            <>
                <GS.ExceptionMsg>검색 결과가 없습니다.</GS.ExceptionMsg>
            </>
        );
    }else{
        return(
            <>
            {/* 영화 결과 */}
            <GS.ListMovieTitle>"{searchValue}" 검색 결과</GS.ListMovieTitle>
            <GS.MovieContainer>        
                <GS.ListMovie cellHeight={'auto'} cols={getGridListCols()} spacing={30}> 
                    {results.results.map((movie, i) => (
                        <GridListTile onClick={e => {
                            getDetail(e.currentTarget.id)
                        }} key={i} id={movie.id}>
                            <img alt={movie.title} src={movie.poster_path === null ? nullImg : (backdropImg + movie.poster_path)}></img>
                            <GridListTileBar title={movie.title}></GridListTileBar>
                        </GridListTile>
                    ))}
                </GS.ListMovie>
            </GS.MovieContainer>
            </>
        );
    }
}

export default Results;