import React from 'react';
import styled from 'styled-components';
import { AppBar, Typography, Toolbar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Brightness4OutlinedIcon from '@material-ui/icons/Brightness4Outlined';

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border: 1px solid black;
    height: 2rem;

`;

const Header = () => {
    return(
        <HeaderContainer>
            <IconButton>
                <MenuIcon/>
            </IconButton>
            <Typography>Movie Web</Typography>
            <div>
                <IconButton>
                    <SearchIcon/>
                </IconButton>
                <IconButton>
                    <Brightness4OutlinedIcon/>
                </IconButton>
            </div>
        </HeaderContainer>
    );
}

export default Header;