import React, { useEffect, useContext } from 'react';
import { MovieContext } from 'contexts/movie';
import { getPopularMovie, getNowplayingMovie, getTopratedMovie, getTrendingMovie, getMovieDetail, getMovieCredit, getMovieRecommendation, getMovieVideo } from 'apis/getMovieData';
import { useHistory } from 'react-router-dom';
import * as S from './Main.style';
import { useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import MainIntro from './MainIntro/MainIntro';
import MainPopular from './MainPopular/MainPopular';
import MainNowPlaying from './MainNowPlaying/MainNowPlaying';
import MainTopRated from './MainTopRated/MainTopRated';


// MainContainer는 상세 페이지랑.. 목록에도 사용이 가능하지 않나 ?

const Main = () => {
    const { setPopular, setNowPlaying, setTopRated, setTrend, setDetail, setCredit, setRecommendation, setVideo } = useContext(MovieContext).actions;
    const history = useHistory();
    const theme = useTheme();

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

    const mobileMatches = useMediaQuery(theme.breakpoints.values.mobile);
    const tabletMatches = useMediaQuery(theme.breakpoints.values.tablet);
    const laptopMatches = useMediaQuery(theme.breakpoints.values.laptop);
    const desktopMatches = useMediaQuery(theme.breakpoints.values.desktop);

    const getGridListCols = () => {
        if(mobileMatches){
            return 2;
        }
        if(tabletMatches){
            return 3;
        }
        if(laptopMatches){
            return 4;
        }
        if(desktopMatches){
            return 4;
        }
    }

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
        <S.MainContainer>
            <MainIntro getDetail={getDetail}></MainIntro>
            <MainPopular getDetail={getDetail} getGridListCols={getGridListCols}></MainPopular>
            <MainNowPlaying getDetail={getDetail} getGridListCols={getGridListCols}></MainNowPlaying>
            <MainTopRated getDetail={getDetail} getGridListCols={getGridListCols}></MainTopRated>
        </S.MainContainer>
    );
}

export default Main;
