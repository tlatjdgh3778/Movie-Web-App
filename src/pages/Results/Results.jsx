import React from 'react';
import * as GS from 'style/componentstyle';
import { ResultList } from 'components/Results/index';
import { connect } from 'react-redux';

const Results = ({ getGridListCols, searchValue, searchResults }) => {

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
                <ResultList getGridListCols={getGridListCols} />
            </GS.MovieContainer>
            </>
        );
    }
}

const mapStateToProps = ({ search }) => {
    return {
        searchResults: search.searchResults,
        searchValue: search.searchValue
    }
}

export default connect(
    mapStateToProps
)(Results);