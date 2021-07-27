import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './Header.style';
import { toggleModal } from 'store/modules/modal';
import { fetchSearchResult } from 'store/modules/search';
import { useDispatch } from 'react-redux';

const Header = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [value, setValue] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();
        if(value.length !== 0) {
            dispatch(fetchSearchResult(value));
            if(history.location.pathname !== "/Results"){
                history.push("/Results");
            }
        }else{
            console.log("한 글자 이상 입력해주세요");
        }
    };

    return(
        <S.HeaderContainer>
            <S.MenuIconButton onClick={() => dispatch(toggleModal())}>
                <S.CustomMenuIcon/>
            </S.MenuIconButton>
            <S.Title>Movie Web</S.Title>
            <S.SearchContainer>
                <S.CustomSearchIcon/>
                <form onSubmit={onSubmit}>
                    <S.CustomInputBase
                    placeholder="Search.."
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                    >
                    </S.CustomInputBase>
                </form>
            </S.SearchContainer>
        </S.HeaderContainer>
    );
}

export default Header;