import React, { useContext } from 'react';
import styled from 'styled-components';
import { ModalStateContext } from 'contexts/modal';

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0,0,0,0.50);
    z-index: 0;
`;

const MenuContent = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    left: 50%;
    top: 40%;
    transform: transition(-50%, -50%);
    color: ${(props) => props.theme.color.bgColor};
    border: 1px solid white;
`;

const CloseBtn = styled.button`
    position: absolute;
    right: 0;
    padding: 1rem;
    margin: 1rem;
    color: white;
`;

const Menu = () => {
    const { state, actions } = useContext(ModalStateContext);
    
    const closeMenu = () => {
        actions.setIsOpen(!state.isOpen);
    }

    return(
        <>
            {state.isOpen ? 
            <Background>
                <CloseBtn onClick={closeMenu}>X</CloseBtn>
                <MenuContent>
                    <div>인기영화</div>
                    <div>좋은평가</div>
                    <div>상영중</div>
                    <div>좋아요</div>
                    <div>다크모드</div>
                </MenuContent>
            </Background> : null }
        </>
    );
}

export default Menu;