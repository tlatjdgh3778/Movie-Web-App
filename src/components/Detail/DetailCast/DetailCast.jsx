import React from "react";

import * as GS from "style/componentstyle";
import { backdropImg } from "utils/constants";
import { useSelector } from "react-redux";
import { sliderSettings } from "utils/constants";
const DetailCast = () => {
    const credit = useSelector(({ detail }) => detail.credit.results);

    return (
        // 출연진  DetailCast
        <>
            <GS.ListContainer>
                <GS.ListHeader>
                    <GS.ListTitle>출연진</GS.ListTitle>
                </GS.ListHeader>
                <GS.MovieContainer>
                    <GS.CustomSlider {...sliderSettings}>
                        {credit.cast.map((character) => (
                            <GS.MovieWrapper key={character.id}>
                                <GS.MovieImg
                                    alt={character.name}
                                    src={backdropImg + character.profile_path}
                                />
                                <GS.Title>{character.name}</GS.Title>
                                <GS.SubTitle>{character.character + " 역"}</GS.SubTitle>
                            </GS.MovieWrapper>
                        ))}
                    </GS.CustomSlider>
                </GS.MovieContainer>
            </GS.ListContainer>
        </>
    );
};

export default DetailCast;
