import styled, { css } from "styled-components";
import { GridList } from "@material-ui/core";

const BackgroundImage = css`
    background-image: url(${({ backdropPath }) => backdropPath});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    /* transition: all 0.1s ease 0s; */
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

// 영화 리스트 재활용 가능..
const ListContainer = styled.div`
    background-color: ${(props) => props.theme.color.listBgColor};
    padding: 1rem 2rem;
    margin: 1rem;
`;
const ListHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
`;

const ListTitle = styled.div`
    color: ${(props) => props.theme.color.fontColor};
    font-weight: 700;
    font-size: ${(props) => props.theme.fontSize.xl};

    ${(props) => props.theme.device.Tablet} {
        font-size: ${(props) => props.theme.fontSize.md};
    }
`;
const ViewAll = styled.div`
    cursor: pointer;
    color: ${(props) => props.theme.color.fontColor};
    font-weight: 700;

    &:hover {
        transition: all 0.2s ease;
        color: ${(props) => props.theme.color.fontHoverColor};
    }

    ${(props) => props.theme.device.Tablet} {
        font-size: ${(props) => props.theme.fontSize.sm};
    }
`;

const MovieContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    overflow: hidden;
`;
const List = styled(GridList)`
    flex-wrap: nowrap;
    overflow-y: hidden;
    transform: translateZ(0);
    margin: 0 !important;
    height: 30vw;
    width: 100%;

    ${(props) => props.theme.device.LapTop} {
        height: 40vw;
    }

    ${(props) => props.theme.device.Tablet} {
        height: 55vw;
    }

    ${(props) => props.theme.device.Mobile} {
        height: 80vw;
    }
`;
const ListMovie = styled(GridList)`
    padding: 3vw;
    width: 100%;
`;

const ListMovieTitle = styled.div`
    text-align: center;
    font-weight: 700;
    padding: 2vw;
    font-size: 3vw;
    color: ${(props) => props.theme.color.fontColor};
`;

const ExceptionMsg = styled.div`
    padding: 1rem 0;
    text-align: center;
    color: ${(props) => props.theme.color.fontColor};
    font-size: ${(props) => props.theme.fontSize.lg};
    font-weight: 700;
`;

export {
    ListContainer,
    ListHeader,
    ListTitle,
    ViewAll,
    MovieContainer,
    List,
    BackgroundImage,
    ListMovie,
    ListMovieTitle,
    ExceptionMsg,
};
