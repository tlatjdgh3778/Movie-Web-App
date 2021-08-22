import React from "react";
import Rating from "@material-ui/lab/Rating";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { backdropImg, nullImg } from "utils/constants";
import { fetchDetail } from "store/modules/detail";
import * as GS from "style/componentstyle";

const MovieItem = ({ movie }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const getDetail = (e) => {
        dispatch(fetchDetail(e.currentTarget.id));
        history.push(`/Detail/${e.currentTarget.id}`);
    };

    return (
        <div>
            <GS.ListMovieWrapper onClick={getDetail} key={movie.id} id={movie.id}>
                <GS.ListMovieImg
                    alt={movie.title}
                    src={movie.poster_path === null ? nullImg : backdropImg + movie.poster_path}
                />
                <GS.Title>{movie.title}</GS.Title>
                <GS.RatingBox>
                    <Rating
                        name="read"
                        value={movie.vote_average / 2}
                        emptyIcon={<GS.CustomStarBorderIcon fontSize="inherit" />}
                        readOnly
                    ></Rating>
                </GS.RatingBox>
            </GS.ListMovieWrapper>
        </div>
    );
};

export default MovieItem;
