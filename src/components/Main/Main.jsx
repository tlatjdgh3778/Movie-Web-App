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

    if(state.popular.length === 0){
        // console.log("null !!");
    }else{
        console.log(state.popular);
    }
    // if(state.nowPlaying.length === 0){
    //     // console.log("null !!");
    // }else{
    //     console.log(state.nowPlaying);
    // }
    // if(state.topRated.length === 0){
    //     // console.log("null !!");
    // }else{
    //     console.log(state.topRated);
    // }
    // if(state.trend.length === 0){
    //     // console.log("null !!");
    // }else{
    //     console.log(state.trend);
    // }

    return(
        <MainContainer>
            <div>
                {state.popular.length === 0 
                ? 
                <div>로딩중</div>
                :
                <div>{state.popular.results.map(title => {
                    return <div>title</div>
                })}</div>}
            </div>
            <div>
                {state.nowPlaying.length === 0 
                ? 
                <div>로딩중</div>
                :
                <div>now</div>}
            </div>
            <div>
                {state.topRated.length === 0 
                ? 
                <div>로딩중</div>
                :
                <div>top</div>}
            </div>
            <div>
                {state.trend.length === 0 
                ? 
                <div>로딩중</div>
                :
                <div>trend</div>}
            </div>
        </MainContainer>
    );
}

export default Main;