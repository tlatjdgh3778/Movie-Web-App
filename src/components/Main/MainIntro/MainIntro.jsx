import React, { useContext } from 'react';
import { MovieContext } from 'contexts/movie';
import * as S from './MainIntro.style';
import { backdropImg } from 'utils/constants';

const MainIntro = ({ getDetail }) => {
    const { trend, detail } = useContext(MovieContext).state;

    return(
        // MainIntro
            <div>
                {trend.length === 0 
                ? 
                <div>로딩중</div>
                :
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
                }
            </div>
    );
}

export default MainIntro;