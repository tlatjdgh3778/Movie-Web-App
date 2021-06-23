import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { ModalStateContext } from 'contexts/modal';
import { AppBar, Typography, Toolbar, IconButton, InputBase } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Brightness4OutlinedIcon from '@material-ui/icons/Brightness4Outlined';
import { getSearchMovie } from 'apis/getMovieData';

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
    const { state, actions } = useContext(ModalStateContext);
    const [value, setValue] = useState("");

    const menuOpen = () => {
        actions.setIsOpen(true);
    }

    const onSubmit = e => {
        e.preventDefault();
        console.log(value);
        getSearchMovie(value);
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
                
                {/* <IconButton>
                    <Brightness4OutlinedIcon/>
                </IconButton> */}
            </SearchContainer>
        </HeaderContainer>
    );
}

export default Header;