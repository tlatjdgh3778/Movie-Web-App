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
`;
const ViewAll = styled.div`
    cursor: pointer;
    color: ${(props) => props.theme.color.fontColor};
    
    &:hover {
        transition: all 0.2s ease;
        color: ${(props) => props.theme.color.fontHoverColor};
    }
`;

const MovieContainer = styled.div`
    padding: 1vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    overflow: hidden;
`;
const List = styled(GridList)`
    flex-wrap: nowrap;
    overflow-y: hidden;
    transform: translateZ(0);
`;

const ListItem = styled(GridListTile)`
    cursor: pointer;
    /* width: 20vw; */
    height: 28vw;
    background-image: url(${({ $posterPath }) => $posterPath });
    background-size: cover;
    /* background-position: center center; */
    background-repeat: no-repeat;

    &:hover {
    }

    ${(props) => props.theme.device.Tablet}{
        position: relative;
        height: 100%;
        width: 45vw;
    }
`;

const ListItemVideo = styled(GridListTile)`
    cursor: pointer;
    /* width: 20vw; */
    height: 10vw;
    background-image: url(${({ $posterPath }) => $posterPath });
    background-size: contain;
    /* background-position: center center; */
    background-repeat: no-repeat;

    &:hover {
    }

    ${(props) => props.theme.device.Tablet}{
        position: relative;
        height: 100%;
        width: 45vw;
    }
`;

const ListItemTitle = styled.div`
    color: white;
`;
// 여기까지



export { ListContainer, ListHeader, ListTitle, ViewAll, MovieContainer, List, ListItem, ListItemTitle, BackgroundImage, ListItemVideo };