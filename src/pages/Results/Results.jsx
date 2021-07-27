import React from 'react';
import * as GS from 'style/componentstyle';
import { ResultList } from 'components/Results/index';
import { useSelector } from 'react-redux';

const Results = () => {
    const searchValue = useSelector(({ search }) => search.searchValue);
    const searchResults = useSelector(({ search }) => search.searchResults);

    if(searchResults.total_results === 0){
        return(
            <>
                <GS.ExceptionMsg>검색 결과가 없습니다.</GS.ExceptionMsg>
            </>
        );
    }else{
        return(
            <>
            {/* 영화 결과 */}
            <GS.ListMovieTitle>"{searchValue}" 검색 결과</GS.ListMovieTitle>
            <GS.MovieContainer>        
                <ResultList />
            </GS.MovieContainer>
            </>
        );
    }
}

export default Results;