import React, { useContext, useEffect } from 'react';
import { MovieContext } from 'contexts/movie';
import { getPopularMovie, getNowplayingMovie, getTopratedMovie, getTrendingMovie, getMovieDetail } from 'apis/getMovieData';
import * as S from './MainIntro.style';
import { backdropImg } from 'utils/constants';

const MainIntro = ({ getDetail }) => {
    const { detail } = useContext(MovieContext).state;
    const { setPopular, setNowPlaying, setTopRated, setTrend, setDetail } = useContext(MovieContext).actions;
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
    }, [setTrend, setTopRated, setPopular, setNowPlaying, setDetail]);

    return(
        // MainIntro
            <div>
                <S.MainMovieContainer backdropPath={backdropImg + detail.backdrop_path}
                >
                    <div>
                        <S.Title>{detail.title}</S.Title>
                        <S.Tagline>{detail.tagline}</S.Tagline>
                        <S.MoreBtn id={detail.id} onClick={e=>{
                            getDetail(e.currentTarget.id);
                        }}>더보기</S.MoreBtn>
                    </div>
                </S.MainMovieContainer>
            </div>
    );
}

export default MainIntro;