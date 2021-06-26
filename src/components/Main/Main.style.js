import styled from 'styled-components';
import { Typography } from '@material-ui/core';

const MainContainer = styled.div`
    border: 1px solid black;
`;

const MainMovieContainer = styled.div`
    /* width: 100%; */
    height: 40vw;
    background-image: url(${({ backdropPath }) => backdropPath});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    opacity: 1;
    transition: all 420ms ease 0s;
    /* display: inline-block; */
    /* position: absolute; */
    /* inset: 0px; */
`;

const Title = styled.div`
    font-size: 5vw;
    padding-top: 10vw;
    padding-left: 5vw;
    font-weight: 700;
    color: ${(props) => props.theme.color.fontColor};

`;
const Contet = styled.div`
    font-size: 3vw;
    padding-left: 5vw;
`;

export { MainMovieContainer, MainContainer, Title, Contet };