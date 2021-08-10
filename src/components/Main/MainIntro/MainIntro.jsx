import React, { useEffect } from "react";
import * as S from "./MainIntro.style";
import { backdropImg } from "utils/constants";
import { useSelector, useDispatch } from "react-redux";
import { fetchDetail } from "store/modules/detail";
import { useHistory } from "react-router-dom";

const MainIntro = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const trend = useSelector(({ movies }) => movies.trend.results);
    const detail = useSelector(({ detail }) => detail.details.results);

    useEffect(() => {
        dispatch(fetchDetail(trend.results[0].id));
    }, [dispatch, trend.results]);

    const getDetail = (e) => {
        dispatch(fetchDetail(e.currentTarget.id));
        history.push(`/Detail/${e.currentTarget.id}`);
    };

    return (
        // MainIntro
        <div>
            <S.MainMovieContainer backdropPath={backdropImg + detail.backdrop_path}>
                <div>
                    <S.Title>{detail.title}</S.Title>
                    <S.Tagline>{detail.tagline}</S.Tagline>
                    <S.MoreBtn id={detail.id} onClick={getDetail}>
                        더보기
                    </S.MoreBtn>
                </div>
            </S.MainMovieContainer>
        </div>
    );
};

export default MainIntro;
