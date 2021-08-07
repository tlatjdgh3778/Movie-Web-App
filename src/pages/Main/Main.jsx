import React from "react";
import * as S from "./Main.style";
import { MainIntro, MainPopular, MainNowPlaying, MainTopRated } from "components/Main/index";
import { useSelector } from "react-redux";
import Loading from "components/Loading/Loading";
import { useRender } from "hooks/useRender";

const Main = () => {
    // initial Render
    useRender("trend");
    useRender("popular");
    useRender("now_playing");
    useRender("top_rated");

    const trendLoading = useSelector(({ movies }) => movies.trend.results);
    const popularLoading = useSelector(({ movies }) => movies.popular.results);
    const nowPlayingLoading = useSelector(({ movies }) => movies.nowPlaying.results);
    const topRatedLoading = useSelector(({ movies }) => movies.topRated.results);

    console.log(trendLoading);
    // console.log(popularLoading);
    // console.log(nowPlayingLoading);
    // console.log(topRatedLoading);
    return (
        <>
            <>
                <S.MainContainer>
                    {trendLoading.length === 0 ? <Loading /> : <MainIntro />}
                    {popularLoading.length === 0 ? <Loading /> : <MainPopular />}
                    {nowPlayingLoading.length === 0 ? <Loading /> : <MainNowPlaying />}
                    {topRatedLoading.length === 0 ? <Loading /> : <MainTopRated />}
                </S.MainContainer>
            </>
        </>
    );
};

export default Main;
