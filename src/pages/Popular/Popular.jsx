import React from 'react';
import * as GS from 'style/componentstyle';
import { PopularList } from 'components/Popular/index';
import { useSelector } from 'react-redux';
import Loading from 'components/Loading/Loading';

const Popular = () => {
    const loading = useSelector(({ movies }) => movies.popular.loading);

    return(
        <>
        {loading ? <Loading /> : 
            <>
            <GS.ListMovieTitle>인기 영화 목록</GS.ListMovieTitle>
            <GS.MovieContainer>        
                <PopularList />
            </GS.MovieContainer>
            </>
        }  
        </>
    );
}

export default Popular;

