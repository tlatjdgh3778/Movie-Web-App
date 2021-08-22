import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { backdropImg, nullImg } from "utils/constants";
import { fetchDetail } from "store/modules/detail";
import * as S from "./LikeList.style";
import * as GS from "style/componentstyle";

const LikeList = () => {
    const dispatch = useDispatch();
    const [del, setDel] = useState(true);
    const LikeMovies = Object.keys(localStorage);
    const history = useHistory();

    const getDetail = (e) => {
        dispatch(fetchDetail(e.currentTarget.id));
        history.push(`/Detail/${e.currentTarget.id}`);
    };

    const removeLike = (e) => {
        e.stopPropagation();
        // 로컬리스트 삭제
        localStorage.removeItem(e.currentTarget.id);
        setDel(!del);
    };
    return (
        <>
            <GS.ListMoviesWrapper>
                {LikeMovies.map((movie) => (
                    <GS.ListMovieWrapper
                        onClick={getDetail}
                        key={movie.id}
                        id={JSON.parse(localStorage.getItem(movie)).id}
                    >
                        <GS.ListMovieImg
                            alt={JSON.parse(localStorage.getItem(movie)).title}
                            src={
                                JSON.parse(localStorage.getItem(movie)).posterPath === null
                                    ? nullImg
                                    : backdropImg +
                                      JSON.parse(localStorage.getItem(movie)).posterPath
                            }
                        />
                        <GS.Title>{JSON.parse(localStorage.getItem(movie)).title}</GS.Title>
                        <S.CustomIconButton
                            id={JSON.parse(localStorage.getItem(movie)).id}
                            onClick={removeLike}
                        >
                            <S.CustomDeleteIcon />
                        </S.CustomIconButton>
                    </GS.ListMovieWrapper>
                ))}
            </GS.ListMoviesWrapper>
        </>
    );
};

export default LikeList;
