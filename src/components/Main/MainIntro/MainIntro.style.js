import styled from 'styled-components';
import { Button } from '@material-ui/core';

// 메인화면, 영화 상세페이지 큰 화면
const MainMovieContainer = styled.div`
    display: flex;
    height: 40vw;
    background-image: url(${({ backdropPath }) => backdropPath});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    opacity: 1;
    transition: all 0.2s ease 0s;
    position: relative;
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

// 영화 제목
const Title = styled.div`
    position: relative;
    font-size: 5vw;
    padding-top: 10vw;
    padding-left: 5vw;
    font-weight: 700;
    color: ${(props) => props.theme.color.fontColor};
`;

const Tagline = styled.div`
    position: relative;
    font-size: 3vw;
    padding-left: 5vw;
`;

const MoreBtn = styled(Button)`
    color: ${(props) => props.theme.color.fontColor};
    font-size: 3vw;
    margin-left: 5vw;
    position: absolute;
    bottom: 0.5vw;

    &:hover {
        background-color: ${(props) => props.theme.color.fontColor};
        color: ${(props) => props.theme.color.bgColor};
    }
`;

export { MainMovieContainer, Tagline, MoreBtn, Title };