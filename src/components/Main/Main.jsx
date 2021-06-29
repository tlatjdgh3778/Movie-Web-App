import React, { useEffect, useContext } from 'react';
import { MovieContext } from 'contexts/movie';
import { getPopularMovie, getNowplayingMovie, getTopratedMovie, getTrendingMovie, getMovieDetail, getMovieCredit, getMovieRecommendation } from 'apis/getMovieData';
import { useHistory } from 'react-router-dom';
import * as S from './Main.style';
import * as GS from 'style/componentstyle';
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
            return 5;
        }
    }

    const { state } = useContext(MovieContext);
    const { setPopular, setNowPlaying, setTopRated, setTrend, setDetail, setCredit, setRecommendation } = useContext(MovieContext).actions;
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

    const getDetail = async (id) => {
        const detail = await getMovieDetail(id);
        const credit = await getMovieCredit(id);
        const recommendation = await getMovieRecommendation(id);
        
        await setDetail(detail);
        await setCredit(credit);
        await setRecommendation(recommendation);
        history.push(`/Detail/${id}`);
    };

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
                        <div>
                            <S.Title>{state.detail.title}</S.Title>
                            <S.Tagline>{state.detail.tagline}</S.Tagline>
                            <S.MoreBtn id={state.detail.id} onClick={e=>{
                                getDetail(e.currentTarget.id);
                            }}>더보기</S.MoreBtn>
                        </div>
                    </S.MainMovieContainer>}
            </div>
            {/* 인기있는 영화 */}
            <GS.ListContainer>
                <GS.ListHeader>
                    <GS.ListTitle>인기있는 영화</GS.ListTitle>
                    <GS.ViewAll>전체 보기</GS.ViewAll>
                </GS.ListHeader>
                <GS.MovieContainer>
                    {state.popular.length === 0 
                    ? 
                    <div>로딩중</div>
                    :
                    <GS.List cellHeight={'auto'} spacing={10} cols={getGridListCols()}>
                        {state.popular.results.map((movie, i) => {
                            return (
                                <GS.ListItem id={movie.id} key={i} onClick={e=> {
                                    getDetail(e.currentTarget.id)
                                }}>
                                    <GS.ListItem posterPath={movie.poster_path === null ? nullImg : (backdropImg + movie.poster_path)}></GS.ListItem>
                                    <GS.MovieTitle>{movie.title}</GS.MovieTitle>
                                </GS.ListItem>
                            )
                        })}
                    </GS.List>}
                </GS.MovieContainer>
            </GS.ListContainer>
            {/* 상영중인 영화 */}
            <GS.ListContainer>
                <GS.ListHeader>
                    <GS.ListTitle>상영중인 영화</GS.ListTitle>
                    <GS.ViewAll>전체 보기</GS.ViewAll>
                </GS.ListHeader>
                <GS.MovieContainer>
                    {state.nowPlaying.length === 0 
                    ? 
                    <div>로딩중</div>
                    :
                    <GS.List cellHeight={'auto'} spacing={10} cols={getGridListCols()}>
                        {state.nowPlaying.results.map((movie, i) => {
                            return(
                                <GS.ListItem id={movie.id} key={i} onClick={e=> {
                                    getDetail(e.currentTarget.id)
                                }}>
                                    <GS.ListItem posterPath={movie.poster_path === null ? nullImg : (backdropImg + movie.poster_path)}></GS.ListItem>
                                    <GS.MovieTitle>{movie.title}</GS.MovieTitle>
                                </GS.ListItem>
                            )
                        })}
                    </GS.List>}
                </GS.MovieContainer>
            </GS.ListContainer>
            {/* 별점높은 영화 */}
            <GS.ListContainer>
                <GS.ListHeader>
                    <GS.ListTitle>별점높은 영화</GS.ListTitle>
                    <GS.ViewAll>전체 보기</GS.ViewAll>
                </GS.ListHeader>
                <GS.MovieContainer>
                    {state.topRated.length === 0 
                    ? 
                    <div>로딩중</div>
                    :
                    <GS.List cellHeight={'auto'} spacing={10} cols={getGridListCols()}>
                        {state.topRated.results.map((movie, i) => {
                            return(
                                <GS.ListItem id={movie.id} key={i} onClick={e=> {
                                    getDetail(e.currentTarget.id)
                                }}>
                                    <GS.ListItem posterPath={movie.poster_path === null ? nullImg : (backdropImg + movie.poster_path)}></GS.ListItem>
                                    <GS.MovieTitle>{movie.title}</GS.MovieTitle>
                                </GS.ListItem>
                            )
                        })}
                    </GS.List >}
                </GS.MovieContainer>
            </GS.ListContainer>
        </S.MainContainer>
    );
}

export default Main;
