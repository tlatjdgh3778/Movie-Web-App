import React from "react";
import * as GS from "style/componentstyle";
import { youtubeLink, thumbnail } from "utils/constants";
import { useSelector } from "react-redux";
import { sliderSettings } from "utils/constants";

const DetailVideo = () => {
    const video = useSelector(({ detail }) => detail.video.results);

    const toYoutube = (link) => {
        const win = window.open(link, "_blank");
        win.focus();
    };

    return (
        //  예고편  DetailVideo
        <GS.ListContainer>
            <GS.ListHeader>
                <GS.ListTitle>예고편</GS.ListTitle>
            </GS.ListHeader>
            {video.results.length === 0 ? (
                <GS.ExceptionMsg>예고편이 없습니다..</GS.ExceptionMsg>
            ) : (
                <>
                    <GS.MovieContainer>
                        <GS.CustomSlider {...sliderSettings}>
                            {video.results.map((video) => (
                                <GS.MovieWrapper
                                    key={video.id}
                                    onClick={() => {
                                        toYoutube(youtubeLink + video.key);
                                    }}
                                >
                                    <GS.MovieVideo
                                        alt={video.name}
                                        src={thumbnail + video.key + "/sddefault.jpg"}
                                    />
                                    <GS.Title>{video.name}</GS.Title>
                                </GS.MovieWrapper>
                            ))}
                        </GS.CustomSlider>
                    </GS.MovieContainer>
                </>
            )}
        </GS.ListContainer>
    );
};

export default DetailVideo;
