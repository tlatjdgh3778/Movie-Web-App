import React from 'react';
import * as GS from 'style/componentstyle';
import { TopRatedList } from 'components/TopRated/index';

const TopRated = () => {

    return(
        <>
            <GS.ListMovieTitle>별점이 높은 영화 목록</GS.ListMovieTitle>
            <GS.MovieContainer>        
                <TopRatedList />
            </GS.MovieContainer>
        </>
    );
}

export default TopRated;