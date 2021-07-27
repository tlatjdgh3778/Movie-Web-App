import React from 'react';
import * as GS from 'style/componentstyle';
import { NowPlayingList } from 'components/NowPlaying/index';

const NowPlaying = () => {
    return(
        <>
            <GS.ListMovieTitle>상영중인 영화 목록</GS.ListMovieTitle>
            <GS.MovieContainer>        
                <NowPlayingList />
            </GS.MovieContainer>
        </>
    );
}

export default NowPlaying;