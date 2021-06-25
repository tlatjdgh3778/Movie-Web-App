import React, { useContext } from 'react';
import { ResultContext } from 'contexts/results';

const Results = () => {
    const { state } = useContext(ResultContext);

    if(state.results.total_results === 0){
        return(
            <>
                <div>검색 결과가 없습니다.</div>
            </>
        );
    }else{
        return(
            <>
            {/* 영화 결과 */}
            <div>
                    {state.results.length === 0 
                    ? 
                    <div>로딩중</div>
                    :
                    <div>
                        {state.results.results.map((movie, i) => {
                            return (
                                <div key={i}>
                                    <div>{movie.title}</div>
                                    <div>{movie.overview}</div>
                                </div>
                            )
                        })}
                    </div>}
                </div>
            </>
        );
    }
}

export default Results;