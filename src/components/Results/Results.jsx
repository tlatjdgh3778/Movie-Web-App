import React, { useContext } from 'react';
import { ResultContext } from 'contexts/results';

const Results = () => {
    const { state } = useContext(ResultContext);

    console.log(state.results);
    
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

export default Results;