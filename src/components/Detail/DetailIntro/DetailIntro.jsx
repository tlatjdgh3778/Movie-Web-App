import React, { useContext } from 'react';
import { MovieContext } from 'contexts/movie';
import Rating from '@material-ui/lab/Rating';
import { useMediaQuery } from '@material-ui/core';
import * as S from './DetailIntro.style';
import { useTheme } from '@material-ui/core/styles';
import { backdropImg } from 'utils/constants';

const DetailIntro = () => {
    const { detail } = useContext(MovieContext).state;

    const theme = useTheme();
    const mobileMatches = useMediaQuery(theme.breakpoints.values.mobile);
    const tabletMatches = useMediaQuery(theme.breakpoints.values.tablet);

    const addLocal = () => {
        localStorage.setItem(detail.id, JSON.stringify({
            title: detail.title,
            id: detail.id,
            posterPath: detail.poster_path,
        }));
    }

    const deleteLocal = () => {
        localStorage.removeItem(detail.id);
    }

    if(tabletMatches || mobileMatches) {
        return (
            <>
                <>
                <S.DetailMovieContainer backdropPath={backdropImg + detail.backdrop_path}>
                    <S.PosterContainer>
                        <S.Poster $posterPath={backdropImg + detail.poster_path}></S.Poster>
                    </S.PosterContainer>
                </S.DetailMovieContainer>
                <S.MovieContentContainer>
                    <S.Title>{detail.title} ({detail.release_date.substring(0,4)})</S.Title>
                    <S.VoteAndRuntime>
                        <S.VoteBox>
                            <Rating name="read" value={detail.vote_average/2} emptyIcon={<S.CustomStarBorderIcon fontSize="inherit" />} readOnly></Rating>
                            <S.VoteAvg>{detail.vote_average}</S.VoteAvg>
                        </S.VoteBox>
                            <S.Runtime>{detail.runtime}분</S.Runtime>
                    </S.VoteAndRuntime>
                    <S.Overview>{detail.overview}</S.Overview>
                    {detail.genres.map((genre, i) => {
                        return <S.Genre key={i}>{genre.name} </S.Genre>
                    })}
                    <S.LikeBtn onClick={addLocal}>
                        <S.CustomAddIcon />
                        <span>마음에 들어요</span>
                    </S.LikeBtn>
                </S.MovieContentContainer>
                </>
            </>
        );
    }else{
        return(
            <>
                <S.DetailMovieContainer backdropPath={backdropImg + detail.backdrop_path}>
                    <S.MovieContentContainer>
                        <S.Title>{detail.title} ({detail.release_date.substring(0,4)})</S.Title>
                        <S.VoteAndRuntime>
                            <S.VoteBox>
                                <Rating name="read" value={detail.vote_average/2} emptyIcon={<S.CustomStarBorderIcon fontSize="inherit" />} readOnly></Rating>
                                <S.VoteAvg>{detail.vote_average}</S.VoteAvg>
                            </S.VoteBox>
                            <S.Runtime>{detail.runtime}분</S.Runtime>
                        </S.VoteAndRuntime>
                        <S.Overview>{detail.overview}</S.Overview>
                        {detail.genres.map((genre, i) => {
                            return <S.Genre key={i}>{genre.name} </S.Genre>
                        })}
                        <S.LikeBtn onClick={addLocal}>
                            <S.CustomAddIcon />
                            <span>마음에 들어요</span>
                        </S.LikeBtn>
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