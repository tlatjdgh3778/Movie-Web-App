import React, { useState } from 'react';
import Rating from '@material-ui/lab/Rating';
import { useMediaQuery } from '@material-ui/core';
import * as S from './DetailIntro.style';
import { backdropImg } from 'utils/constants';
import { useSelector } from 'react-redux';

const DetailIntro = () => {
    const detail = useSelector(({ detail }) => detail.details.results);

    const [like, setLike] = useState(false);

    const mobileMatches = useMediaQuery('(max-width:480px)');
    const tabletMatches = useMediaQuery('(min-width:481px) and (max-width:768px)');

    const addLocal = () => {
        localStorage.setItem(detail.id, JSON.stringify({
            title: detail.title,
            id: detail.id,
            posterPath: detail.poster_path,
        }));
        setLike(true);
    }

    const deleteLocal = () => {
        localStorage.removeItem(detail.id);
        setLike(false);
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
                    {detail.genres.map((genre) => {
                        return <S.Genre key={genre.id}>{genre.name} </S.Genre>
                    })}
                    <S.LikeBtn onClick={like ? deleteLocal : addLocal}>
                        {localStorage.getItem(detail.id) ? <S.CustomDoneIcon /> : <S.CustomAddIcon />}
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
                        <S.LikeBtn onClick={like ? deleteLocal : addLocal}>
                            {localStorage.getItem(detail.id) ? <S.CustomDoneIcon /> : <S.CustomAddIcon />}
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