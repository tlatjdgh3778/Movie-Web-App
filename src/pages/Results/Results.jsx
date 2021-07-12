import React, { useContext } from 'react';
import { ResultContext } from 'contexts/results';
import * as GS from 'style/componentstyle';
import { ResultList } from 'components/Results/index';

const Results = ({ getGridListCols }) => {
    const { results, searchValue } = useContext(ResultContext).state;

    if(results.total_results === 0){
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
                <ResultList getGridListCols={getGridListCols} />
            </GS.MovieContainer>
            </>
        );
    }
}

export default Results;