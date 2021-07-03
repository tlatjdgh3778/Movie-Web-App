import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
:root {
    --scrollbarThumb-color: #666;
    --scrollbarBtn-color: #666;
    --scrollbarTrack-color: black;
    --scrollbarHover-color: #121212;
}
* {
    font-family: 'Noto Sans KR', 'Roboto', sans-serif !important;
    margin: 0;
    padding: 0;

    &::-webkit-scrollbar {
        width: 15px;
        height: 10px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: var(--scrollbarThumb-color); 
        border-radius: 10px;

        &:hover {
            background-color: var(--scrollbarHover-color);
        }
        &:focus {
            background-color: var(--scrollbarHover-color);
        }
    }
    &::-webkit-scrollbar-track {
        background-color: var(--scrollbarTrack-color);
        border-radius: 10px;
    }

    &::-webkit-scrollbar-button { 
        background-color: var(--scrollbarBtn-color); 
    }
}

body {
    box-sizing: border-box;
    color: ${(props) => props.theme.color.fontColor};
    background-color: ${(props) => props.theme.color.bgColor};
}

img {
    border-radius: 5px;
}
a {
    text-decoration: none;
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
.MuiGridListTileBar-root {
    color: black;
}

.MuiListSubheader-root {
    color: ${(props) => props.theme.color.fontColor};
}


`;

export default GlobalStyle; 