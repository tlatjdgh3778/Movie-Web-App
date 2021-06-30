import React, { useContext } from 'react';
import { MovieContext } from 'contexts/movie';
import { useMediaQuery } from '@material-ui/core';
import * as S from './DetailIntro.style';
import { useTheme } from '@material-ui/core/styles';
import { backdropImg } from 'utils/constants';

const DetailIntro = () => {
    const { detail } = useContext(MovieContext).state;

    const theme = useTheme();
    const mobileMatches = useMediaQuery(theme.breakpoints.values.mobile);
    const tabletMatches = useMediaQuery(theme.breakpoints.values.tablet);

    if(tabletMatches || mobileMatches) {
        return (
            <>
                {detail.length === 0 
                ? 
                <div>로딩중</div>
                :
                <>
                <S.DetailMovieContainer backdropPath={backdropImg + detail.backdrop_path}>
                    <S.PosterContainer>
                        <S.Poster $posterPath={backdropImg + detail.poster_path}></S.Poster>
                    </S.PosterContainer>
                </S.DetailMovieContainer>
                <S.MovieContentContainer>
                    <S.Title>{detail.title} ({detail.release_date.substring(0,4)})</S.Title>
                    <S.VoteAvg>평점 {detail.vote_average} / 10</S.VoteAvg>
                    <S.Overview>{detail.overview}</S.Overview>
                    {detail.genres.map((genre, i) => {
                        return <S.Genre key={i}>{genre.name} </S.Genre>
                    })}
                    <S.Runtime>{detail.runtime}분</S.Runtime>
                    <button>마음에 들어요</button>
                </S.MovieContentContainer>
                </>
                }
            </>
        );
    }else{
        return(
            <>
                <S.DetailMovieContainer backdropPath={backdropImg + detail.backdrop_path}>
                    <S.MovieContentContainer>
                        <S.Title>{detail.title} ({detail.release_date.substring(0,4)})</S.Title>
                        <S.VoteAvg>평점 {detail.vote_average} / 10</S.VoteAvg>
                        <S.Overview>{detail.overview}</S.Overview>
                        {detail.genres.map((genre, i) => {
                            return <S.Genre key={i}>{genre.name} </S.Genre>
                        })}
                        <S.Runtime>{detail.runtime}분</S.Runtime>
                        <button>마음에 들어요</button>
                    </S.MovieContentContainer>
                    <S.PosterContainer backdropPath={backdropImg + detail.backdrop_path}>
                        <S.Poster $posterPath={backdropImg + detail.poster_path}></S.Poster>
                    </S.PosterContainer>
                </S.DetailMovieContainer>
            </>
        );
    }
}

export default DetailIntro;