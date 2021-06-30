import { BackgroundImage } from 'style/componentstyle';
import styled from 'styled-components';

const DetailMovieContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 40vw;
    ${BackgroundImage};

    ${(props) => props.theme.device.Tablet}{
        flex-direction: column-reverse;
        height: 80vw;
    }
`;

const PosterContainer = styled.div`
    padding: 2vw;
    display: flex;
    justify-content: center;
    position: relative;

    ${(props) => props.theme.device.Tablet}{
        ${BackgroundImage};
        height: 100%;
    }
`;

const Poster = styled.div`
    width: 20vw;
    background-image: url(${({ $posterPath }) => $posterPath });
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;

    ${(props) => props.theme.device.Tablet}{
        position: relative;
        height: 100%;
        width: 45vw;
    }
`;

const MovieContentContainer = styled.div`
    padding-left: 5vw;
    position: relative;
    ${(props) => props.theme.device.Tablet}{
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

const Overview = styled.div`
    font-size: 1.5vw;
    padding-top: 1vw;
    padding-bottom: 1vw;
    ${(props) => props.theme.device.Tablet}{
        font-size: 2.5vw;
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

export { DetailMovieContainer, PosterContainer, Poster, MovieContentContainer, Title, VoteAvg, Overview, Genre, Runtime};