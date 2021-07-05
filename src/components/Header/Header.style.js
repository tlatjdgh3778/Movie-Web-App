import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { InputBase, Typography, IconButton} from '@material-ui/core';

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    height: 2rem;
    background-color: ${(props) => props.theme.color.headerColor};
`;

const SearchContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-radius: 5px;
    background-color: ${(props) => props.theme.color.searchContainer};
    width: 12rem;
`;

const MenuIconButton = styled(IconButton)`

    ${(props) => props.theme.device.Tablet} {
        padding: 0;
    }
`;

const CustomMenuIcon = styled(MenuIcon)`
    color: ${(props) => props.theme.color.fontColor};
    font-size: 2.5rem;

    ${(props) => props.theme.device.Mobile} {
        font-size: 1.5rem;
    }
`;

const CustomInputBase = styled(InputBase)`
    padding: 0.3rem 0;
    color: ${(props) => props.theme.color.fontColor};
    width: 80%;
`;

const CustomSearchIcon = styled(SearchIcon)`
    padding: 0 0.5rem;
    color: ${(props) => props.theme.color.fontColor};
`;

const Title = styled(Typography)`
    font-weight: 700;
    padding: 0 1rem;
`;

export { HeaderContainer, SearchContainer, CustomMenuIcon, CustomSearchIcon, CustomInputBase, Title, MenuIconButton };