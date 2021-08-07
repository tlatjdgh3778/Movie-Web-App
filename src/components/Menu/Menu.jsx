import React from "react";
import { NavLink } from "react-router-dom";
import * as S from "./Menu.style";
import { changeMode } from "store/modules/mode";
import { toggleModal } from "store/modules/modal";
import { useSelector, useDispatch } from "react-redux";

const Menu = () => {
    const dispatch = useDispatch();
    const isDark = useSelector(({ mode }) => mode.isDark);
    const isOpen = useSelector(({ modal }) => modal.isOpen);

    const onChangeMode = () => {
        dispatch(changeMode());
    };
    const onToggleModal = () => {
        dispatch(toggleModal());
    };

    return (
        <>
            {isOpen ? (
                <S.Background>
                    <S.ModeIconButton onClick={onChangeMode}>
                        {isDark ? <S.LightMode /> : <S.DarkMode />}
                    </S.ModeIconButton>
                    <S.CloseIconButton onClick={onToggleModal}>
                        <S.CloseBtn />
                    </S.CloseIconButton>
                    <S.MenuContent>
                        <NavLink to="/" onClick={onToggleModal}>
                            <S.MenuItem>메인화면</S.MenuItem>
                        </NavLink>
                        <NavLink to="/Popular" onClick={onToggleModal}>
                            <S.MenuItem>인기영화</S.MenuItem>
                        </NavLink>
                        <NavLink to="/TopRated" onClick={onToggleModal}>
                            <S.MenuItem>좋은평가</S.MenuItem>
                        </NavLink>
                        <NavLink to="/NowPlaying" onClick={onToggleModal}>
                            <S.MenuItem>상영중</S.MenuItem>
                        </NavLink>
                        <NavLink to="/Likes" onClick={onToggleModal}>
                            <S.MenuItem>좋아요</S.MenuItem>
                        </NavLink>
                    </S.MenuContent>
                </S.Background>
            ) : null}
        </>
    );
};

export default Menu;
