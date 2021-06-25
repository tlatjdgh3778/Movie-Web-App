import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import { MovieContext } from 'contexts/movie';
import { getPopularMovie, getNowplayingMovie, getTopratedMovie, getTrendingMovie } from 'apis/getMovieData';

// MainContainer는 상세 페이지랑.. 목록에도 사용이 가능하지 않나 ?
const MainContainer = styled.div`
    border: 1px solid black;
`;

const Main = () => {
    const { state, actions } = useContext(MovieContext);


    useEffect(() => {
        const fetchData = async () => {
            const popular = await getPopularMovie();
            const playing = await getNowplayingMovie();
            const rated = await getTopratedMovie();
            const trend = await getTrendingMovie();
    
            actions.setPopular(popular);
            actions.setNowPlaying(playing);
            actions.setTopRated(rated);
            actions.setTrend(trend);
        }
        fetchData();
    }, []);

    return(
        <MainContainer>
            {/* 트렌드 영화 컴포넌트 */}
            <div>
                {state.trend.length === 0 
                ? 
                <div>로딩중</div>
                :
                <div>
                    <div>{state.trend.results[5].title}</div>
                    <div>{state.trend.results[5].overview}</div>
                    <div>{state.trend.results[5].id}</div>
                </div>}
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
        </MainContainer>
    );
}

export default Main;

