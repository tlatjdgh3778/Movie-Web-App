import React from 'react';
import { DetailIntro, DetailCast, DetailVideo, DetailRecommendation } from 'components/Detail/index';

const Detail = () => {
    return(
        <>
            <DetailIntro></DetailIntro>
            <DetailCast></DetailCast>
            <DetailVideo></DetailVideo>
            <DetailRecommendation></DetailRecommendation>
        </>
    );
}

export default Detail;
