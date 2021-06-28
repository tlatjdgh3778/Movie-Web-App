import styled from 'styled-components';

// 메인화면, 영화 상세페이지 큰 화면
const DetailMovieContainer = styled.div`
    /* width: 100%; */
    margin: 1px;
    display: flex;
    height: 40vw;
    background-image: url(${({ backdropPath }) => backdropPath});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    opacity: 1;
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
    ${(props) => props.theme.device.Tablet}{
        flex-direction: column-reverse;
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
    font-size: 1vw;
`;

const Genre = styled.span`
    font-size: 1.5vw;
`;

const Runtime = styled.div`
    font-size: 1.5vw;
`;

const Overview = styled.div`
    font-size: 1.5vw;
`;

const Tagline = styled.div`
    font-size: 3vw;
`;

const PosterContainer = styled.div`
    padding-top: 4vw;
    padding-right: 4vw;
    padding-left: 2vw;
    border: 1px solid blue;
    position: relative;
    ${(props) => props.theme.device.Tablet}{
        
    }
`;

const Poster = styled.div`
    width: 20vw;
    height: 30vw;
    background-image: url(${({ posterPath }) => posterPath });
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
`;

export { DetailMovieContainer, MovieContentContainer, Title, Overview, Tagline, PosterContainer, Poster, VoteAvg, Genre, Runtime };