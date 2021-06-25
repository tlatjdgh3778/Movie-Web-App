import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import { MovieContext } from 'contexts/movie';
import { getPopularMovie, getNowplayingMovie, getTopratedMovie, getTrendingMovie, getMovieDetail } from 'apis/getMovieData';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import * as S from './Main.style';

// MainContainer는 상세 페이지랑.. 목록에도 사용이 가능하지 않나 ?

const Main = () => {
    const { state } = useContext(MovieContext);
    const { setPopular, setNowPlaying, setTopRated, setTrend, setDetail } = useContext(MovieContext).actions;

    const history = useHistory();

    const null_img = "http://collaboparty1004.cafe24.com/xe/files/attach/images/139/483/d8c711f2e76e6be056d911b8fbed47fd.jpg";
    const posterImg = "https://image.tmdb.org/t/p/original/";
    const backdropImg = "https://image.tmdb.org/t/p/original/";

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

            const detail = await getMovieDetail(trend.results[0].id);
            await setDetail(detail);
            console.log(detail);
        }
        fetchData();
    }, []);

    const getDetail = async () => {
        const detail = await getMovieDetail(state.trend.results[0].id);
        setDetail(detail);

        history.push(`/Detail/${state.trend.results[0].id}`);
    }
    
    return(
        <S.MainContainer>
            {/* 트렌드 영화 컴포넌트 */}
            <div>
                {state.trend.length === 0 
                ? 
                <div>로딩중</div>
                :
                    <S.MainMovieContainer backdropPath={backdropImg + state.detail.backdrop_path}
                    >
                        <S.Title>{state.detail.title}</S.Title>
                        <S.Contet>{state.detail.tagline}</S.Contet>
                        <button onClick={getDetail}>더보기</button>
                    </S.MainMovieContainer>}
            </div>
            {/* 인기있는 영화 */}
            <div>
                {state.popular.length === 0 
                ? 
                <div>로딩중</div>
                :
                <div>
                    {state.popular.results.map((movie, i) => {
                        return (
                            <div key={i}>
                                <div>{movie.title}</div>
                                <div>{movie.overview}</div>
                            </div>
                        )
                    })}
                </div>}
            </div>
            {/* 상영중인 영화 */}
            <div>
                {state.nowPlaying.length === 0 
                ? 
                <div>로딩중</div>
                :
                <div>
                    {state.nowPlaying.results.map((movie, i) => {
                        return(
                            <div key={i}>
                                <div>{movie.title}</div>
                                <div>{movie.overview}</div>
                            </div>
                        )
                    })}
                </div>}
            </div>
            {/* 별점높은 영화 */}
            <div>
                {state.topRated.length === 0 
                ? 
                <div>로딩중</div>
                :
                <div>
                    {state.topRated.results.map((movie, i) => {
                        return(
                            <div key={i}>
                                <div>{movie.title}</div>
                                <div>{movie.overview}</div>
                            </div>
                        )
                    })}
                </div>}
            </div>
        </S.MainContainer>
    );
}

export default Main;

