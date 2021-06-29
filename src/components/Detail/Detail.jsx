import React, { useContext } from 'react';
import { MovieContext } from 'contexts/movie';
import { useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import * as S from './Detail.style';
import * as GS from 'style/componentstyle';

const Detail = () => {
    const { detail, credit, recommendation, video } = useContext(MovieContext).state;

    const theme = useTheme();
    const mobileMatches = useMediaQuery(theme.breakpoints.values.mobile);
    const tabletMatches = useMediaQuery(theme.breakpoints.values.tablet);
    const laptopMatches = useMediaQuery(theme.breakpoints.values.laptop);
    const desktopMatches = useMediaQuery(theme.breakpoints.values.desktop);

    

    const getGridListCols = () => {
        if(mobileMatches){
            return 2;
        }
        if(tabletMatches){
            return 3;
        }
        if(laptopMatches){
            return 4;
        }
        if(desktopMatches){
            return 5;
        }
    }

    const backdropImg = "https://image.tmdb.org/t/p/original/";
    const nullImg = "http://collaboparty1004.cafe24.com/xe/files/attach/images/139/483/d8c711f2e76e6be056d911b8fbed47fd.jpg";
    const youtubeLink = "https://www.youtube.com/watch?v=";
    const thumbnail ="https://i.ytimg.com/vi/";

    console.log(video);
// 
    // 타블렛 모바일 화면
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
                            <S.Poster posterPath={backdropImg + detail.poster_path}></S.Poster>
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
                    {/* 출연진 */}
                    <GS.ListContainer>
                        <GS.ListHeader>
                            <GS.ListTitle>출연진</GS.ListTitle>
                        </GS.ListHeader>
                        <GS.MovieContainer>
                            <GS.List cellHeight={'auto'} spacing={10} cols={getGridListCols()}>
                                {credit.cast.map((character, i) => {
                                    return (
                                        <GS.ListItem key={i}>
                                            <GS.ListItem posterPath={character.profile_path === null ? nullImg : (backdropImg + character.profile_path)}></GS.ListItem>
                                            <GS.ListItemTitle>{character.name}</GS.ListItemTitle>
                                            <GS.ListItemTitle>{character.character}</GS.ListItemTitle>
                                        </GS.ListItem>
                                    )
                                })}
                            </GS.List>
                        </GS.MovieContainer>
                    </GS.ListContainer>
                    {/* 추천 영화 */}
                    <GS.ListContainer>
                        <GS.ListHeader>
                            <GS.ListTitle>추천 영화</GS.ListTitle>
                        </GS.ListHeader>
                        {recommendation.total_results === 0 ? <div>추천 영화가 없습니다.</div> 
                        :
                        <>
                        <GS.MovieContainer>
                            <GS.List cellHeight={'auto'} spacing={10} cols={getGridListCols()}>
                                {recommendation.results.map((recommendation, i) => {
                                    return (
                                        <GS.ListItem key={i}>
                                            <GS.ListItem posterPath={recommendation.poster_path === null ? nullImg : (backdropImg + recommendation.poster_path)}></GS.ListItem>
                                            <GS.ListItemTitle>{recommendation.title}</GS.ListItemTitle>            
                                        </GS.ListItem>
                                    )
                                })}
                            </GS.List>
                        </GS.MovieContainer>
                        </>
                        }
                    </GS.ListContainer>
                </>
                }
            </>
        );
    }
    // 데스크탑 화면
    else{
        return(
            <>
                {/* 영화 상세 페이지 */}
                <div>
                    {detail.length === 0 
                    ? 
                    <div>로딩중</div>
                    :
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
                                    <S.Poster posterPath={backdropImg + detail.poster_path}></S.Poster>
                                </S.PosterContainer>
                        </S.DetailMovieContainer>
                        {/* 출연진 */}
                        <GS.ListContainer>
                        <GS.ListHeader>
                            <GS.ListTitle>출연진</GS.ListTitle>
                        </GS.ListHeader>
                        <GS.MovieContainer>
                            <GS.List cellHeight={'auto'} spacing={10} cols={getGridListCols()}>
                                {credit.cast.map((character, i) => {
                                    return (
                                        <GS.ListItem key={i}>
                                            <GS.ListItem posterPath={character.profile_path === null ? nullImg : (backdropImg + character.profile_path)}></GS.ListItem>
                                            <GS.ListItemTitle>{character.name}</GS.ListItemTitle>
                                            <GS.ListItemTitle>{character.character} 역</GS.ListItemTitle>
                                        </GS.ListItem>
                                    )
                                })}
                            </GS.List>
                        </GS.MovieContainer>
                        </GS.ListContainer>
                        {/* 예고편 */}
                        <GS.ListContainer>
                            <GS.ListHeader>
                                <GS.ListTitle>예고편</GS.ListTitle>
                            </GS.ListHeader>
                            {video.results.length === 0 ? <div>예고편이 없습니다..</div> 
                            :
                            <>
                            <GS.MovieContainer>
                                <GS.List cellHeight={'auto'} spacing={10} cols={getGridListCols()}>
                                    {video.results.map((video, i) => {
                                        return (
                                            <GS.ListItemVideo key={i}>
                                                <GS.ListItemVideo posterPath={video.key === null ? nullImg : (thumbnail + video.key + "/sddefault.jpg")}></GS.ListItemVideo>
                                                <GS.ListItemTitle>{video.name}</GS.ListItemTitle>            
                                            </GS.ListItemVideo>
                                        )
                                    })}
                                </GS.List>
                            </GS.MovieContainer>
                            </>
                            }
                        </GS.ListContainer> 
                        {/* 추천 영화 */}
                        <GS.ListContainer>
                            <GS.ListHeader>
                                <GS.ListTitle>추천 영화</GS.ListTitle>
                            </GS.ListHeader>
                            {recommendation.total_results === 0 ? <div>추천 영화가 없습니다.</div> 
                            :
                            <>
                            <GS.MovieContainer>
                                <GS.List cellHeight={'auto'} spacing={10} cols={getGridListCols()}>
                                    {recommendation.results.map((recommendation, i) => {
                                        return (
                                            <GS.ListItem key={i}>
                                                <GS.ListItem posterPath={recommendation.poster_path === null ? nullImg : (backdropImg + recommendation.poster_path)}></GS.ListItem>
                                                <GS.ListItemTitle>{recommendation.title}</GS.ListItemTitle>            
                                            </GS.ListItem>
                                        )
                                    })}
                                </GS.List>
                            </GS.MovieContainer>
                            </>
                            }
                        </GS.ListContainer>     
                    </>
                    }
                </div>
            </>
        );
    
    }
}

export default Detail;