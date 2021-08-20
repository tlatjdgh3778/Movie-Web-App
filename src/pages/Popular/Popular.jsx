import React from "react";
import * as GS from "style/componentstyle";
import { PopularList } from "components/Popular/index";
import { useSelector } from "react-redux";
import Loading from "components/Loading/Loading";
import { useRender } from "hooks/useRender";

const Popular = () => {
    useRender("popular");

    const loading = useSelector(({ movies }) => movies.popular.loading);

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <>
                    <GS.MovieContainer>
                        <GS.ListMovieTitle>인기 영화 목록</GS.ListMovieTitle>
                        <PopularList />
                    </GS.MovieContainer>
                </>
            )}
        </>
    );
};

export default Popular;
