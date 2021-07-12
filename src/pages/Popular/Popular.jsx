import React from 'react';
import * as GS from 'style/componentstyle';
import { PopularList } from 'components/Popular/index';

const Popular = ({ getGridListCols }) => {
    return(
        <>
            <GS.ListMovieTitle>인기 영화 목록</GS.ListMovieTitle>
            <GS.MovieContainer>        
                <PopularList getGridListCols={getGridListCols} />
            </GS.MovieContainer>
        </>
    );
}

export default Popular;

