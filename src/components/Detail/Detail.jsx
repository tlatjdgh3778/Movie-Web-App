import React, { useContext } from 'react';
import { MovieContext } from 'contexts/movie';
import { useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import * as S from './Detail.style';
import * as GS from 'style/componentstyle';

const Detail = () => {
    const theme = useTheme();
    const tabletMatches = useMediaQuery(theme.breakpoints.values.tablet);
    const mobileMatches = useMediaQuery(theme.breakpoints.values.mobile);

    const { detail } = useContext(MovieContext).state;
    const backdropImg = "https://image.tmdb.org/t/p/original/";

    console.log(tabletMatches);

    if(tabletMatches || mobileMatches) {
        return (
            <>
                <S.DetailMovieContainer backdropPath={backdropImg + detail.backdrop_path}>
                    <S.PosterContainer backdropPath={backdropImg + detail.backdrop_path}>
                        <S.Poster posterPath={backdropImg + detail.poster_path}></S.Poster>
                    </S.PosterContainer>
                </S.DetailMovieContainer>
                <S.MovieContentContainer>
                    <S.Title>{detail.title} ({detail.release_date.substring(0,4)})</S.Title>
                    <S.VoteAvg>평점 {detail.vote_average} / 10</S.VoteAvg>
                    {/* <S.Tagline>{detail.tagline}</S.Tagline> */}
                    <S.Overview>{detail.overview}</S.Overview>
                    {detail.genres.map((genre, i) => {
                        return <S.Genre key={i}>{genre.name} </S.Genre>
                    })}
                    <S.Runtime>{detail.runtime}분</S.Runtime>
                    <button>마음에 들어요</button>
                </S.MovieContentContainer>
            </>
        );
    }
    else{
        return(
            <>
                {/* 영화 상세 페이지 */}
                <div>
                    {detail.length === 0 
                    ? 
                    <div>로딩중</div>
                    :
                        <S.DetailMovieContainer backdropPath={backdropImg + detail.backdrop_path}>
                            <S.MovieContentContainer>
                                <S.Title>{detail.title} ({detail.release_date.substring(0,4)})</S.Title>
                                <S.VoteAvg>평점 {detail.vote_average} / 10</S.VoteAvg>
                                {/* <S.Tagline>{detail.tagline}</S.Tagline> */}
                                <S.Overview>{detail.overview}</S.Overview>
                                {detail.genres.map((genre, i) => {
                                    return <S.Genre key={i}>{genre.name} </S.Genre>
                                })}
                                <S.Runtime>{detail.runtime}분</S.Runtime>
                                <button>마음에 들어요</button>
                            </S.MovieContentContainer>
                            <S.PosterContainer backdropPath={backdropImg + detail.backdrop_path}>
                                <S.Poster posterPath={backdropImg + detail.poster_path}></S.Poster>
                            </S.PosterContainer>
                        </S.DetailMovieContainer>
                    }
                </div>
            </>
        );
    
    }
    }

export default Detail;