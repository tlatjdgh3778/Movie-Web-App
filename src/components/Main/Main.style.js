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
const MovieList = styled(GridList)`
    flex-wrap: nowrap;
`;

const Movie = styled(GridListTile)`
    cursor: pointer;
`;
const MovieTitle = styled(GridListTileBar)`
    color: white;
`;
// 여기까지

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
    transition: all 0.2s ease 0s;
    /* display: inline-block; */
    position: relative;
    /* inset: 0px; */
`;

const Title = styled.div`
    font-size: 5vw;
    padding-top: 10vw;
    padding-left: 5vw;
    font-weight: 700;
    color: ${(props) => props.theme.color.fontColor};
`;

const Content = styled.div`
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


export { MainMovieContainer, MainContainer, Title, Content, MoreBtn, MovieList, Movie, MovieContainer, MovieTitle, ListContainer, ViewAll, ListTitle, ListHeader };