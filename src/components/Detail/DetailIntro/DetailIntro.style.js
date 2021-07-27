import { BackgroundImage } from 'style/componentstyle';
import styled from 'styled-components';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DoneIcon from '@material-ui/icons/Done';

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
    width: 25vw;
    background-image: url(${({ $posterPath }) => $posterPath });
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;

    ${(props) => props.theme.device.Tablet}{
        position: relative;
        height: 100%;
        width: 45vw;
    }
`;

const MovieContentContainer = styled.div`
    padding: 0 5vw;
    position: relative;
`;

const Title = styled.div`
    font-size: 4vw;
    padding-top: 4vw;
    font-weight: 700;
    color: white;

    ${(props) => props.theme.device.Tablet}{
        color: ${(props) => props.theme.color.fontColor};
    }
`;

const VoteAndRuntime = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const VoteBox = styled.div`
    display: flex;
    align-items: center;
`;

const VoteAvg = styled.div`
    padding-left: 10px;
    font-size: 1.5vw;
    color: rgba(255, 255, 255, 0.8);
    
    ${(props) => props.theme.device.Tablet}{
        font-size: 2vw;
        color: ${(props) => props.theme.color.fontSubColor};
    }
`;

const CustomStarBorderIcon = styled(StarBorderIcon)`
    color: rgba(255, 255, 255, 0.8);

    ${(props) => props.theme.device.Tablet} {
        color: ${(props) => props.theme.color.fontSubColor};
    }
`;

const Overview = styled.div`
    font-size: 1.5vw;
    padding-top: 1vw;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    overflow: hidden;
    color: white;

    ${(props) => props.theme.device.Tablet}{
        font-size: 2.5vw;
        -webkit-line-clamp: 6;
        color: ${(props) => props.theme.color.fontSubColor};
    }
`;

const Genre = styled.span`
    font-size: 1.5vw;
    color: rgba(255, 255, 255, 0.8);
    
    ${(props) => props.theme.device.Tablet}{
        font-size: 2.5vw;
        color: ${(props) => props.theme.color.fontSubColor};
    }
`;

const Runtime = styled.div`
    font-size: 2vw;
    padding-top: 0.5vw;
    color: rgba(255, 255, 255, 0.8);
    
    ${(props) => props.theme.device.Tablet}{
        font-size: 2.5vw;
        color: ${(props) => props.theme.color.fontSubColor};
    }
`;

const LikeBtn = styled(Button)`
    color: white;
    display: flex;
    font-size: 2vw;
    bottom: 0.5vw;
    margin: 1rem 0;
    padding-right: 0.6rem;
    background-color: rgba(255,255,255,0.1);

    &:hover {
        background-color: white;
        color: black;
    }

    ${(props) => props.theme.device.Tablet}{
        color: ${(props) => props.theme.color.fontSubColor};

        &:hover {
        background-color: ${(props) => props.theme.color.fontColor};
        color: ${(props) => props.theme.color.bgColor};
    }
    }
`;

const CustomAddIcon = styled(AddIcon)`
    font-size: 3vw;
`;

const CustomDoneIcon = styled(DoneIcon)`
    font-size: 3vw;
`;

export { DetailMovieContainer, PosterContainer, Poster, MovieContentContainer, Title, VoteAvg, Overview, Genre, Runtime, VoteBox, CustomStarBorderIcon, VoteAndRuntime, LikeBtn, CustomAddIcon, CustomDoneIcon };