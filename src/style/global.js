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

img {
    border-radius: 5px;
}

.MuiGridList-root {
    height: 25vw;
    width: 100%;

    ${(props) => props.theme.device.Tablet} {
        height: 55vw;
    }

    ${(props) => props.theme.device.Mobile} {
        height: 70vw;
    }
}
.MuiGridListTile-imgFullWidth {
    top: 50%;
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateY(-50%);
    cursor: pointer;
}
.MuiGridListTile-imgFullHeight {
    left: 0;
    top: 50%;
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateY(-50%);
    cursor: pointer;
}
`;

export default GlobalStyle; 