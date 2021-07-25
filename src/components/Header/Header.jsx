import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './Header.style';
import { connect } from 'react-redux';
import { toggleModal } from 'store/modules/modal';
import { fetchSearchResult } from 'store/modules/search';

const Header = ({ toggleModal, fetchSearchResult }) => {
    const history = useHistory();


    const [value, setValue] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();
        if(value.length !== 0) {
            fetchSearchResult(value);
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
            <S.MenuIconButton onClick={toggleModal}>
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

const mapDispatchToProps = (dispatch) => {
    return {
        toggleModal: () => dispatch(toggleModal()),
        fetchSearchResult: (search) => dispatch(fetchSearchResult(search)),
    }
}

export default connect( 
    null,
    mapDispatchToProps
)(Header);