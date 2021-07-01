import styled, { css } from 'styled-components';
import { Button, GridList, GridListTile, GridListTileBar } from '@material-ui/core';

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

// 영화 리스트 재활용 가능..
const ListContainer = styled.div`
    background-color: ${(props) => props.theme.color.listBgColor};
`;
const ListHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1vw;
`;
const ListTitle = styled.div`
    color: ${(props) => props.theme.color.fontColor};
    padding: 0 10px;
`;
const ViewAll = styled.div`
    cursor: pointer;
    color: ${(props) => props.theme.color.fontColor};
    padding: 0 10px;
    
    &:hover {
        transition: all 0.2s ease;
        color: ${(props) => props.theme.color.fontHoverColor};
    }
`;

const MovieContainer = styled.div`
    padding: 1vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    overflow: hidden;
`;
const List = styled(GridList)`
    flex-wrap: nowrap;
    overflow-y: hidden;
    transform: translateZ(0);
`;

export { ListContainer, ListHeader, ListTitle, ViewAll, MovieContainer, List, BackgroundImage };