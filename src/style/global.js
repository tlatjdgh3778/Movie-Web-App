import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    font-family: 'Noto Sans KR', sans-serif;
    margin: 0;
    padding: 0;
}

body {
    box-sizing: border-box;
    color: ${(props) => props.theme.color.fontColor};
    background-color: ${(props) => props.theme.color.bgColor};
}
`;

export default GlobalStyle; 