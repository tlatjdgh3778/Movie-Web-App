import React from "react";

import * as GS from "style/componentstyle";
import { backdropImg } from "utils/constants";
import { useSelector, useDispatch } from "react-redux";
import { fetchDetail } from "store/modules/detail";
import { useHistory } from "react-router";
import { sliderSettings } from "utils/constants";

const DetailRecommendation = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const recommendation = useSelector(({ detail }) => detail.recommendation.results);

    const getDetail = (e) => {
        dispatch(fetchDetail(e.currentTarget.id));
        history.push(`/Detail/${e.currentTarget.id}`);
    };

    return (
        // 추천 영화  DetailRecommendation
        <>
            <GS.ListContainer>
                <GS.ListHeader>
                    <GS.ListTitle>추천 영화</GS.ListTitle>
                </GS.ListHeader>
                {recommendation.total_results === 0 ? (
                    <GS.ExceptionMsg>추천 영화가 없습니다..</GS.ExceptionMsg>
                ) : (
                    <>
                        <GS.MovieContainer>
                            <GS.CustomSlider {...sliderSettings}>
                                {recommendation.results.map((movie) => (
                                    <GS.MovieWrapper
                                        onClick={getDetail}
                                        key={movie.id}
                                        id={movie.id}
                                    >
                                        <GS.MovieImg
                                            alt={movie.title}
                                            src={backdropImg + movie.poster_path}
                                        />
                                        {/* movie.poster_path === null
                                                    ? nullImg
                                                    : backdropImg + movie.poster_path */}
                                        <GS.Title>{movie.title}</GS.Title>
                                    </GS.MovieWrapper>
                                ))}
                            </GS.CustomSlider>
                        </GS.MovieContainer>
                    </>
                )}
            </GS.ListContainer>
        </>
    );
};

export default DetailRecommendation;
