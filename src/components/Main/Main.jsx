import React from 'react';
import styled from 'styled-components';

// MainContainer는 상세 페이지랑.. 목록에도 사용이 가능하지 않나 ?
const MainContainer = styled.div`
    border: 1px solid black;
`;
const Main = () => {
    return(
        <MainContainer>This is Main</MainContainer>
    );
}

export default Main;