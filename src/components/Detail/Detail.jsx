import React, { useContext } from 'react';
import { MovieContext } from 'contexts/movie';
import { useHistory } from 'react-router-dom';
import { getMovieDetail, getMovieCredit, getMovieRecommendation, getMovieVideo } from 'apis/getMovieData';
import DetailIntro from './DetailIntro/DetailIntro';
import DetailCast from './DetailCast/DetailCast';
import DetailVideo from './DetailVideo/DetailVideo';
import DetailRecommendation from './DetailRecommendation/DetailRecommendation';

const Detail = ({ getGridListCols }) => {
    const { setDetail, setCredit, setRecommendation, setVideo } = useContext(MovieContext).actions;

    const history = useHistory();

    const getDetail = async (id) => {
        const detail = await getMovieDetail(id);
        const credit = await getMovieCredit(id);
        const recommendation = await getMovieRecommendation(id);
        const video = await getMovieVideo(id);

        await setDetail(detail);
        await setCredit(credit);
        await setRecommendation(recommendation);
        await setVideo(video);
        history.push(`/Detail/${id}`);
    };

    return(
        <>
            <DetailIntro getGridListCols={getGridListCols}></DetailIntro>
            <DetailCast getGridListCols={getGridListCols}></DetailCast>
            <DetailVideo getGridListCols={getGridListCols}></DetailVideo>
            <DetailRecommendation getDetail={getDetail} getGridListCols={getGridListCols}></DetailRecommendation>
        </>
    );
}

export default Detail;
