import React from 'react';
import * as GS from 'style/componentstyle';
import { LikeList } from 'components/Likes/index';

const Likes = ({ getGridListCols }) => {
    return(
        <>
            <GS.ListMovieTitle>좋아요 누른 영화</GS.ListMovieTitle>
            <GS.MovieContainer>        
                <LikeList getGridListCols={getGridListCols} />
            </GS.MovieContainer>
        </>
    );
}

export default Likes;