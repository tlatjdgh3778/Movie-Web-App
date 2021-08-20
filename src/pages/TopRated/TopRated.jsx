import React from "react";
import * as GS from "style/componentstyle";
import { TopRatedList } from "components/TopRated/index";
import { useSelector } from "react-redux";
import Loading from "components/Loading/Loading";
import { useRender } from "hooks/useRender";

const TopRated = () => {
    useRender("top_rated");

    const loading = useSelector(({ movies }) => movies.topRated.loading);

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <>
                    <GS.MovieContainer>
                        <GS.ListMovieTitle>별점이 높은 영화 목록</GS.ListMovieTitle>
                        <TopRatedList />
                    </GS.MovieContainer>
                </>
            )}
        </>
    );
};

export default TopRated;
