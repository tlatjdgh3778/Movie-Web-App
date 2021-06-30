import React from 'react';
import DetailIntro from './DetailIntro/DetailIntro';
import DetailCast from './DetailCast/DetailCast';
import DetailVideo from './DetailVideo/DetailVideo';
import DetailRecommendation from './DetailRecommendation/DetailRecommendation';

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
