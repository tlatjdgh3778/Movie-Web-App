import React from "react";
import * as GS from "style/componentstyle";
import { NowPlayingList } from "components/NowPlaying/index";
import { useSelector } from "react-redux";
import Loading from "components/Loading/Loading";
import { useRender } from "hooks/useRender";

const NowPlaying = () => {
    useRender("now_playing");
    const loading = useSelector(({ movies }) => movies.nowPlaying.loading);

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <>
                    <GS.ListMovieTitle>상영중인 영화 목록</GS.ListMovieTitle>
                    <GS.MovieContainer>
                        <NowPlayingList />
                    </GS.MovieContainer>
                </>
            )}
        </>
    );
};

export default NowPlaying;
