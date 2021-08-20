import React from "react";
import * as GS from "style/componentstyle";
import { LikeList } from "components/Likes/index";

const Likes = () => {
    return (
        <>
            <GS.MovieContainer>
                <GS.ListMovieTitle>좋아요 누른 영화</GS.ListMovieTitle>
                <LikeList />
            </GS.MovieContainer>
        </>
    );
};

export default Likes;
