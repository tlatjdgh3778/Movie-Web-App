import React from 'react';
import { NavLink } from 'react-router-dom';
import * as S from './Menu.style';
import { connect } from 'react-redux';
import { changeMode } from 'store/modules/mode';
import { toggleModal } from 'store/modules/modal';

const Menu = ({ isDark, isOpen, changeMode, toggleModal }) => {

    return(
        <>
            {isOpen ? 
            <S.Background>
                <S.ModeIconButton onClick={changeMode}>
                    {isDark ? <S.LightMode /> : <S.DarkMode /> }
                </S.ModeIconButton>
                <S.CloseIconButton onClick={toggleModal}>
                    <S.CloseBtn />
                </S.CloseIconButton>
                <S.MenuContent>
                    <NavLink to="/" onClick={toggleModal}><S.MenuItem>메인화면</S.MenuItem></NavLink>
                    <NavLink to="/Popular" onClick={toggleModal}><S.MenuItem>인기영화</S.MenuItem></NavLink>
                    <NavLink to="/TopRated" onClick={toggleModal}><S.MenuItem>좋은평가</S.MenuItem></NavLink>
                    <NavLink to="/NowPlaying" onClick={toggleModal}><S.MenuItem>상영중</S.MenuItem></NavLink>
                    <NavLink to="/Likes" onClick={toggleModal}><S.MenuItem>좋아요</S.MenuItem></NavLink>
                </S.MenuContent>
            </S.Background> : null }
        </>
    );
}

const mapStateToProps = ({ mode, modal }) => {
    return {
        isDark: mode.isDark,
        isOpen: modal.isOpen,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeMode: () => dispatch(changeMode()),
        toggleModal: () => dispatch(toggleModal()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu);