import React, { useState, useContext } from 'react';
import { ModalStateContext } from 'contexts/modal';
import { ResultContext } from 'contexts/results';
import { Typography, IconButton, InputBase } from '@material-ui/core';
import Brightness4OutlinedIcon from '@material-ui/icons/Brightness4Outlined';
import { getSearchMovie } from 'apis/getMovieData';
import { useHistory } from 'react-router-dom';
import * as S from './Header.style';

const Header = () => {
    const history = useHistory();

    const { state, actions } = useContext(ModalStateContext);
    const { results } = useContext(ResultContext).state;
    const { setResults, setSearchValue } = useContext(ResultContext).actions;

    const [value, setValue] = useState("");

    const menuOpen = () => {
        actions.setIsOpen(true);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if(value.length !== 0) {
            const search = await getSearchMovie(value);
            setResults(search);
            setSearchValue(value);
            if(history.location.pathname !== "/Results"){
                history.push("/Results");
            }
        }else{
            console.log("한 글자 이상 입력해주세요");
        }
    };

    const onChange = e => {
        setValue(e.target.value);
    };

    return(
        <S.HeaderContainer>
            <IconButton onClick={menuOpen}>
                <S.CustomMenuIcon/>
            </IconButton>
            <Typography>Movie Web</Typography>
            <S.SearchContainer>
                <S.CustomSearchIcon/>
                <form onSubmit={onSubmit}>
                    <S.CustomInputBase
                    placeholder="Search.."
                    onChange={onChange}
                    value={value}
                    >
                    </S.CustomInputBase>
                </form>
            </S.SearchContainer>
        </S.HeaderContainer>
    );
}

export default Header;