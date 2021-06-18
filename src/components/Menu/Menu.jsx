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

const Menu = () => {
    const { isOpen } = useContext(ModalStateContext).state;

    return(
        <div>{isOpen?"true":"false"}</div>
    );
}

export default Menu;