import React, { useContext } from 'react';
import { ModalStateContext } from 'contexts/modal';
import { NavLink } from 'react-router-dom';
import * as S from './Menu.style';

const Menu = () => {
    const { state, actions } = useContext(ModalStateContext);
    
    const closeMenu = () => {
        actions.setIsOpen(!state.isOpen);
    }

    return(
        <>
            {state.isOpen ? 
            <S.Background>
                <S.CustomIconButton onClick={closeMenu}>
                    <S.CloseBtn></S.CloseBtn>
                </S.CustomIconButton>
                <S.MenuContent>
                    <NavLink to="/"><S.MenuItem>메인화면</S.MenuItem></NavLink>
                    <NavLink to="/Popular"><S.MenuItem>인기영화</S.MenuItem></NavLink>
                    <NavLink to="/TopRated"><S.MenuItem>좋은평가</S.MenuItem></NavLink>
                    <NavLink to="/NowPlaying"><S.MenuItem>상영중</S.MenuItem></NavLink>
                    <NavLink to="/Likes"><S.MenuItem>좋아요</S.MenuItem></NavLink>
                </S.MenuContent>
            </S.Background> : null }
        </>
    );
}

export default Menu;