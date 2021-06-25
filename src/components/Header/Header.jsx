import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { ModalStateContext } from 'contexts/modal';
import { ResultContext } from 'contexts/results';
import { AppBar, Typography, Toolbar, IconButton, InputBase } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Brightness4OutlinedIcon from '@material-ui/icons/Brightness4Outlined';
import { getSearchMovie } from 'apis/getMovieData';
import { useHistory } from 'react-router-dom';

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border: 1px solid black;
    height: 2rem;
`;

const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
`;

const Header = () => {
    const history = useHistory();

    const { state, actions } = useContext(ModalStateContext);
    const { results } = useContext(ResultContext).state;
    const { setResults } = useContext(ResultContext).actions;

    const [value, setValue] = useState("");

    const menuOpen = () => {
        actions.setIsOpen(true);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const search = await getSearchMovie(value);
        setResults();
        setResults(search);
        history.push("/Results");
    };

    const onChange = e => {
        setValue(e.target.value)
    };

    return(
        <HeaderContainer>
            <IconButton onClick={menuOpen}>
                <MenuIcon/>
            </IconButton>
            <Typography>Movie Web</Typography>
            <SearchContainer>
                <SearchIcon/>
                <form onSubmit={onSubmit}>
                    <InputBase
                    placeholder="Search.."
                    onChange={onChange}
                    value={value}
                    >
                    </InputBase>
                </form>
            </SearchContainer>
        </HeaderContainer>
    );
}

export default Header;