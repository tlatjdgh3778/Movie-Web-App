import React from 'react';
import * as S from './Main.style';
import { MainIntro, MainPopular, MainNowPlaying, MainTopRated } from 'components/Main/index';
import { useSelector } from 'react-redux';
import Loading from 'components/Loading/Loading';
import { useMainRender } from 'hooks/useMainRender';

const Main = () => {
    // initial Render
    useMainRender()

    const trend = useSelector(({ movies }) => movies.trend);
    const popular = useSelector(({ movies }) => movies.popular);
    const nowPlaying = useSelector(({ movies }) => movies.nowPlaying);
    const topRated = useSelector(({ movies }) => movies.topRated);
    
    if(popular.success && nowPlaying.success && topRated.success && trend.success){
        return (
            <S.MainContainer>
                <MainIntro></MainIntro>
                <MainPopular></MainPopular>
                <MainNowPlaying></MainNowPlaying>
                <MainTopRated></MainTopRated>
            </S.MainContainer>
        )
    }else{
        return <Loading />
    }
}

export default Main;
