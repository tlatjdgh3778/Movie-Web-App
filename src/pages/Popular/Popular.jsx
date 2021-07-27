import React from 'react';
import * as GS from 'style/componentstyle';
import { PopularList } from 'components/Popular/index';

const Popular = () => {
    return(
        <>
            <GS.ListMovieTitle>인기 영화 목록</GS.ListMovieTitle>
            <GS.MovieContainer>        
                <PopularList />
            </GS.MovieContainer>
        </>
    );
}

export default Popular;

