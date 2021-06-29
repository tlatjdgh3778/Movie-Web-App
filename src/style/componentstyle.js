import styled from 'styled-components';
import { Button, GridList, GridListTile, GridListTileBar } from '@material-ui/core';

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
`;

const Movie = styled(GridListTile)`
    cursor: pointer;
`;
const MovieTitle = styled(GridListTileBar)`
    pointer-events: none;
    color: white;
`;
// 여기까지

export { ListContainer, ListHeader, ListTitle, ViewAll, MovieContainer, List, Movie, MovieTitle };