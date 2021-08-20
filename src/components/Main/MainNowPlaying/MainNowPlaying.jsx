import React from "react";

import * as GS from "style/componentstyle";
import { backdropImg, nullImg } from "utils/constants";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { fetchDetail } from "store/modules/detail";
import { sliderSettings } from "utils/constants";

const MainNowPlaying = () => {
    const nowPlaying = useSelector(({ movies }) => movies.nowPlaying.results);
    const history = useHistory();
    const dispatch = useDispatch();

    const getDetail = (e) => {
        dispatch(fetchDetail(e.currentTarget.id));
        history.push(`/Detail/${e.currentTarget.id}`);
    };

    return (
        <GS.ListContainer>
            <GS.ListHeader>
                <GS.ListTitle>상영중인 영화</GS.ListTitle>
                <GS.ViewAll
                    id="NowPlaying"
                    onClick={(e) => {
                        history.push(`/${e.currentTarget.id}`);
                    }}
                >
                    전체 보기
                </GS.ViewAll>
            </GS.ListHeader>
            <GS.MovieContainer>
                <GS.CustomSlider {...sliderSettings}>
                    {nowPlaying.results.map((movie) => (
                        <GS.MovieWrapper onClick={getDetail} key={movie.id} id={movie.id}>
                            <GS.MovieImg
                                alt={movie.title}
                                src={
                                    movie.poster_path === null
                                        ? nullImg
                                        : backdropImg + movie.poster_path
                                }
                            />
                            <GS.Title>{movie.title}</GS.Title>
                        </GS.MovieWrapper>
                    ))}
                </GS.CustomSlider>
            </GS.MovieContainer>
        </GS.ListContainer>
    );
};

export default MainNowPlaying;
