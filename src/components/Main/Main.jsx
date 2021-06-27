import React, { useEffect, useContext } from 'react';
import { MovieContext } from 'contexts/movie';
import { getPopularMovie, getNowplayingMovie, getTopratedMovie, getTrendingMovie, getMovieDetail } from 'apis/getMovieData';
import { useHistory } from 'react-router-dom';
import * as S from './Main.style';
import { useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';

// MainContainer는 상세 페이지랑.. 목록에도 사용이 가능하지 않나 ?

const Main = () => {
    const theme = useTheme();
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
            return 6;
        }
    }

    const { state } = useContext(MovieContext);
    const { setPopular, setNowPlaying, setTopRated, setTrend, setDetail } = useContext(MovieContext).actions;
    const history = useHistory();
    const random = Math.floor(Math.random() * 10);

    const backdropImg = "https://image.tmdb.org/t/p/original/";
    const nullImg = "http://collaboparty1004.cafe24.com/xe/files/attach/images/139/483/d8c711f2e76e6be056d911b8fbed47fd.jpg";

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

    const getDetail = async () => {
        console.log(state.detail.title);
        const detail = await getMovieDetail(state.trend.results[random].id);

        history.push(`/Detail/${state.trend.results[random].id}`);
    };

    console.log(backdropImg);
    return(
        <S.MainContainer>
            {/* 트렌드 영화 컴포넌트 */}
            <div>
                {state.trend.length === 0 
                ? 
                <div>로딩중</div>
                :
                    <S.MainMovieContainer backdropPath={state.detail.backdrop_path}
                    >
                        <S.Title>{state.detail.title}</S.Title>
                        <S.Content>{state.detail.tagline}</S.Content>
                        <S.MoreBtn onClick={getDetail}>더보기</S.MoreBtn>
                    </S.MainMovieContainer>}
            </div>
            {/* 인기있는 영화 */}
            <S.ListContainer>
                <S.ListHeader>
                    <S.ListTitle>인기있는 영화</S.ListTitle>
                    <S.ViewAll>전체 보기</S.ViewAll>
                </S.ListHeader>
                <S.MovieContainer>
                    {state.popular.length === 0 
                    ? 
                    <div>로딩중</div>
                    :
                    <S.MovieList spacing={10} cols={getGridListCols()}>
                        {state.popular.results.map((movie, i) => {
                            return (
                                <S.Movie key={i}>
                                    <img src={movie.backdrop_path === null ? nullImg : (backdropImg + movie.backdrop_path)}></img>
                                    <S.MovieTitle title={movie.title}></S.MovieTitle>
                                </S.Movie>
                            )
                        })}
                    </S.MovieList>}
                </S.MovieContainer>
            </S.ListContainer>
            {/* 상영중인 영화 */}
            <S.ListContainer>
                <S.ListHeader>
                    <S.ListTitle>상영중인 영화</S.ListTitle>
                    <S.ViewAll>전체 보기</S.ViewAll>
                </S.ListHeader>
                <S.MovieContainer>
                    {state.nowPlaying.length === 0 
                    ? 
                    <div>로딩중</div>
                    :
                    <S.MovieList spacing={10} cols={getGridListCols()}>
                        {state.nowPlaying.results.map((movie, i) => {
                            return(
                                <S.Movie key={i}>
                                    <img src={movie.backdrop_path === null ? nullImg : (backdropImg + movie.backdrop_path)}></img>
                                    <S.MovieTitle title={movie.title}></S.MovieTitle>
                                </S.Movie>
                            )
                        })}
                    </S.MovieList>}
                </S.MovieContainer>
            </S.ListContainer>
            {/* 별점높은 영화 */}
            <S.ListContainer>
                <S.ListHeader>
                    <S.ListTitle>별점높은 영화</S.ListTitle>
                    <S.ViewAll>전체 보기</S.ViewAll>
                </S.ListHeader>
                <S.MovieContainer>
                    {state.topRated.length === 0 
                    ? 
                    <div>로딩중</div>
                    :
                    <S.MovieList spacing={10} cols={getGridListCols()}>
                        {state.topRated.results.map((movie, i) => {
                            return(
                                <S.Movie key={i}>
                                    <img src={movie.backdrop_path === null ? nullImg : (backdropImg + movie.backdrop_path)}></img>
                                    <S.MovieTitle title={movie.title}></S.MovieTitle>
                                </S.Movie>
                            )
                        })}
                    </S.MovieList >}
                </S.MovieContainer>
            </S.ListContainer>
        </S.MainContainer>
    );
}

export default Main;
