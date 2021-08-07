import React from "react";
import {
    DetailIntro,
    DetailCast,
    DetailVideo,
    DetailRecommendation,
} from "components/Detail/index";
import Loading from "components/Loading/Loading";
import { useSelector } from "react-redux";

const Detail = () => {
    const loading = useSelector(({ detail }) => detail.details.loading);

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <>
                    <DetailIntro></DetailIntro>
                    <DetailCast></DetailCast>
                    <DetailVideo></DetailVideo>
                    <DetailRecommendation></DetailRecommendation>
                </>
            )}
        </>
    );
};

export default Detail;
