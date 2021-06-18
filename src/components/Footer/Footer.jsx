import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2rem;
`;

const Footer = () => {
    return(
        <FooterContainer>
            <div>Made By SeongHo Shim</div>
        </FooterContainer>
    );
}

export default Footer;