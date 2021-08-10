import React from "react";
import * as GS from "style/componentstyle";
import { backdropImg, nullImg } from "utils/constants";
import { GridListTile, GridListTileBar } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { fetchDetail } from "store/modules/detail";
import { useGetGridListCols } from "hooks/useGetGridListCols";

const MainPopular = () => {
    const cols = useGetGridListCols();

    const popular = useSelector(({ movies }) => movies.popular.results);
    const history = useHistory();
    const dispatch = useDispatch();

    const getDetail = (e) => {
        dispatch(fetchDetail(e.currentTarget.id));
        history.push(`/Detail/${e.currentTarget.id}`);
    };

    return (
        <GS.ListContainer>
            <GS.ListHeader>
                <GS.ListTitle>인기있는 영화</GS.ListTitle>
                <GS.ViewAll
                    id="Popular"
                    onClick={(e) => {
                        history.push(`/${e.currentTarget.id}`);
                    }}
                >
                    전체 보기
                </GS.ViewAll>
            </GS.ListHeader>
            <GS.MovieContainer>
                <GS.List cellHeight={"auto"} spacing={20} cols={cols}>
                    {popular.results.map((movie) => {
                        return (
                            <GridListTile id={movie.id} key={movie.id} onClick={getDetail}>
                                <img
                                    alt={movie.title}
                                    src={
                                        movie.poster_path === null
                                            ? nullImg
                                            : backdropImg + movie.poster_path
                                    }
                                ></img>
                                <GridListTileBar title={movie.title}></GridListTileBar>
                            </GridListTile>
                        );
                    })}
                </GS.List>
            </GS.MovieContainer>
        </GS.ListContainer>
    );
};

export default MainPopular;
