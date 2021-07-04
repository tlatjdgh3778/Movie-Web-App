import React, { useEffect, useContext } from 'react';
import { MovieContext } from 'contexts/movie';
import { getPopularMovie, getNowplayingMovie, getTopratedMovie, getTrendingMovie, getMovieDetail, getMovieCredit, getMovieRecommendation, getMovieVideo } from 'apis/getMovieData';
import { useHistory } from 'react-router-dom';
import * as S from './Main.style';
import MainIntro from './MainIntro/MainIntro';
import MainPopular from './MainPopular/MainPopular';
import MainNowPlaying from './MainNowPlaying/MainNowPlaying';
import MainTopRated from './MainTopRated/MainTopRated';
import ReactLoading from 'react-loading';

const Main = ({ getGridListCols }) => {
    const { setPopular, setNowPlaying, setTopRated, setTrend, setDetail, setCredit, setRecommendation, setVideo } = useContext(MovieContext).actions;
    const history = useHistory();
    const { state } = useContext(MovieContext);
    
    const random = Math.floor(Math.random() * 10);

    useEffect(() => {
        const fetchData = async () => {
            const popular = await getPopularMovie();
            const playing = await getNowplayingMovie();
            const rated = await getTopratedMovie();
            const trend = await getTrendingMovie();
    
            await setPopular(popular);
            await setNowPlaying(playing);
            await setTopRated(rated);
            await setTrend(trend);

            const detail = await getMovieDetail(trend.results[random].id);
            await setDetail(detail);
        }
        fetchData();
    }, []);

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

    const toPage = async (page) => {
        history.push(`/${page}`);
    }

    if(state.detail.length === 0) {
        return <ReactLoading type={"spin"} color="#fff" className="loading"/>
    }
    return(
        <S.MainContainer>
            <MainIntro getDetail={getDetail}></MainIntro>
            <MainPopular toPage={toPage} getDetail={getDetail} getGridListCols={getGridListCols}></MainPopular>
            <MainNowPlaying toPage={toPage} getDetail={getDetail} getGridListCols={getGridListCols}></MainNowPlaying>
            <MainTopRated toPage={toPage} getDetail={getDetail} getGridListCols={getGridListCols}></MainTopRated>
        </S.MainContainer>
    );
}

export default Main;
