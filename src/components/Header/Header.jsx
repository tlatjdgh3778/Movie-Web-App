import React, { useState, useContext } from 'react';
import { ModalStateContext } from 'contexts/modal';
import { ResultContext } from 'contexts/results';
import { getSearchMovie } from 'apis/getMovieData';
import { useHistory } from 'react-router-dom';
import * as S from './Header.style';

const Header = () => {
    const history = useHistory();

    const { actions } = useContext(ModalStateContext);
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
            <S.MenuIconButton onClick={menuOpen}>
                <S.CustomMenuIcon/>
            </S.MenuIconButton>
            <S.Title>Movie Web</S.Title>
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