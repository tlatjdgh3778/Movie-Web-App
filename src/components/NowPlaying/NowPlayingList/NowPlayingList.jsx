import React from "react";
import { GridListTile, GridListTileBar } from "@material-ui/core";
import * as GS from "style/componentstyle";
import { backdropImg, nullImg } from "utils/constants";
import { useHistory } from "react-router-dom";
import { useGetGridListCols } from "hooks/useGetGridListCols";
import { useSelector, useDispatch } from "react-redux";
import { fetchDetail } from "store/modules/detail";

const NowPlayingList = () => {
    const cols = useGetGridListCols();
    const dispatch = useDispatch();
    const nowPlaying = useSelector(({ movies }) => movies.nowPlaying.results);
    const history = useHistory();

    return (
        <>
            <GS.ListMovie cellHeight={"auto"} cols={cols} spacing={30}>
                {nowPlaying.results.map((movie) => (
                    <GridListTile
                        onClick={(e) => {
                            dispatch(fetchDetail(e.currentTarget.id));
                            history.push(`/Detail/${e.currentTarget.id}`);
                        }}
                        key={movie.id}
                        id={movie.id}
                    >
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

export default NowPlayingList;
