import styled, { css } from 'styled-components';

// 메인화면, 영화 상세페이지 큰 화면

const BackgroundImage = css`
    background-image: url(${({ backdropPath }) => backdropPath});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    transition: all 0.2s ease 0s;
    /* display: inline-block; */
    position: relative;
    /* inset: 0px; */

    &::before {
        content: "";
        opacity: 0.5;
        position: absolute;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        background-color: #000;
    }
`;

const DetailMovieContainer = styled.div`
    display: flex;
    height: 40vw;
    ${BackgroundImage};

    ${(props) => props.theme.device.Tablet}{
        flex-direction: column-reverse;
        background-image: none;
        height: 80vw;
    }
`;

const MovieContentContainer = styled.div`
    padding-left: 5vw;
    border: 1px solid blue;
    position: relative;
    ${(props) => props.theme.device.Tablet}{
        border: 1px solid red;
    }
`;

const Title = styled.div`
    font-size: 4vw;
    padding-top: 4vw;
    font-weight: 700;
    color: ${(props) => props.theme.color.fontColor};
`;

const VoteAvg = styled.div`
    font-size: 1.5vw;
    ${(props) => props.theme.device.Tablet}{
        font-size: 2vw;
    }
`;

const Genre = styled.span`
    font-size: 1.5vw;
    ${(props) => props.theme.device.Tablet}{
        font-size: 2.5vw;
    }
`;

const Runtime = styled.div`
    font-size: 1.5vw;
    padding-top: 0.5vw;
    ${(props) => props.theme.device.Tablet}{
        font-size: 2.5vw;
    }
`;

const Overview = styled.div`
    font-size: 1.5vw;
    padding-top: 1vw;
    padding-bottom: 1vw;
    ${(props) => props.theme.device.Tablet}{
        font-size: 2.5vw;
    }
`;

const Tagline = styled.div`
    font-size: 3vw;
`;

const PosterContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 3vw;
    border: 1px solid blue;
    position: relative;

    ${(props) => props.theme.device.Tablet}{
        ${BackgroundImage};
        height: 100%;
    }
`;

const Poster = styled.div`
    width: 20vw;
    height: 30vw;
    background-image: url(${({ posterPath }) => posterPath });
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;

    ${(props) => props.theme.device.Tablet}{
        position: relative;
        height: 100%;
        width: 45vw;
    }
`;

export { DetailMovieContainer, MovieContentContainer, Title, Overview, Tagline, PosterContainer, Poster, VoteAvg, Genre, Runtime };