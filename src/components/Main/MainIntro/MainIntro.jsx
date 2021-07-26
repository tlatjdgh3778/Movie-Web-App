import React, { useEffect } from 'react';
import * as S from './MainIntro.style';
import { backdropImg } from 'utils/constants';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDetail } from 'store/modules/detail';
import { random } from 'utils/constants';

const MainIntro = ({ getDetail }) => {
    const dispatch = useDispatch();
    const trend = useSelector(({ movies }) => movies.trend.results);
    const detail = useSelector(({ detail }) => detail.results);
    
    useEffect(() => {
        dispatch(fetchDetail(trend.results[random].id))
    }, [dispatch, trend.results])

    return(
        // MainIntro
            <div>
                <S.MainMovieContainer backdropPath={backdropImg + detail.backdrop_path}
                >
                    <div>
                        <S.Title>{detail.title}</S.Title>
                        <S.Tagline>{detail.tagline}</S.Tagline>
                        <S.MoreBtn id={detail.id} onClick={e=>{
                            getDetail(e.currentTarget.id);
                        }}>더보기</S.MoreBtn>
                    </div>
                </S.MainMovieContainer>
            </div>
    );
}

export default MainIntro;