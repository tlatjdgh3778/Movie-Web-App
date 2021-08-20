import React from "react";
import * as GS from "style/componentstyle";
import { ResultList } from "components/Results/index";
import { useSelector } from "react-redux";
import Loading from "components/Loading/Loading";

const Results = () => {
    const searchValue = useSelector(({ search }) => search.searchValue);
    const searchResults = useSelector(({ search }) => search.searchResults);
    const loading = useSelector(({ search }) => search.loading);

    if (searchResults.total_results === 0) {
        return (
            <>
                <GS.ExceptionMsg>"{searchValue}" 검색 결과가 없습니다.</GS.ExceptionMsg>
            </>
        );
    } else {
        return (
            <>
                {loading ? (
                    <Loading />
                ) : (
                    <>
                        <GS.MovieContainer>
                            <GS.ListMovieTitle>"{searchValue}" 검색 결과</GS.ListMovieTitle>
                            <ResultList />
                        </GS.MovieContainer>
                    </>
                )}
            </>
        );
    }
};

export default Results;
