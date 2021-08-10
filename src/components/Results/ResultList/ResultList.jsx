import React from "react";
import { useHistory } from "react-router-dom";
import { GridListTile, GridListTileBar } from "@material-ui/core";
import * as GS from "style/componentstyle";
import { backdropImg, nullImg } from "utils/constants";
import { useGetGridListCols } from "hooks/useGetGridListCols";
import { useSelector, useDispatch } from "react-redux";
import { fetchDetail } from "store/modules/detail";

const ResultList = () => {
    const cols = useGetGridListCols();
    const dispatch = useDispatch();
    const searchResults = useSelector(({ search }) => search.searchResults);
    const history = useHistory();

    const getDetail = (e) => {
        dispatch(fetchDetail(e.currentTarget.id));
        history.push(`/Detail/${e.currentTarget.id}`);
    };

    return (
        <>
            <GS.ListMovie cellHeight={"auto"} cols={cols} spacing={30}>
                {searchResults.results.map((movie) => (
                    <GridListTile onClick={getDetail} key={movie.id} id={movie.id}>
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
                ))}
            </GS.ListMovie>
        </>
    );
};

export default ResultList;
