import React, { useContext } from 'react';
import { ModalStateContext } from 'contexts/modal';
import { ModeContext } from 'contexts/mode';
import { NavLink } from 'react-router-dom';
import * as S from './Menu.style';

const Menu = () => {
    const { state, actions } = useContext(ModalStateContext);
    const { isDark } = useContext(ModeContext).state;
    const { setIsDark } = useContext(ModeContext).actions;

    const closeMenu = () => {
        actions.setIsOpen(!state.isOpen);
    }

    const changeMode = () => {
        setIsDark(!isDark);
    }
    console.log(isDark);
    return(
        <>
            {state.isOpen ? 
            <S.Background>
                <S.ModeIconButton onClick={changeMode}>
                    {isDark ? <S.LightMode /> : <S.DarkMode /> }
                </S.ModeIconButton>
                <S.CloseIconButton onClick={closeMenu}>
                    <S.CloseBtn />
                </S.CloseIconButton>
                <S.MenuContent>
                    <NavLink to="/" onClick={closeMenu}><S.MenuItem>메인화면</S.MenuItem></NavLink>
                    <NavLink to="/Popular" onClick={closeMenu}><S.MenuItem>인기영화</S.MenuItem></NavLink>
                    <NavLink to="/TopRated" onClick={closeMenu}><S.MenuItem>좋은평가</S.MenuItem></NavLink>
                    <NavLink to="/NowPlaying" onClick={closeMenu}><S.MenuItem>상영중</S.MenuItem></NavLink>
                    <NavLink to="/Likes" onClick={closeMenu}><S.MenuItem>좋아요</S.MenuItem></NavLink>
                </S.MenuContent>
            </S.Background> : null }
        </>
    );
}

export default Menu;