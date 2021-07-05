import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
:root {
    --scrollbarThumb-color: #403d3d;
    --scrollbarBtn-color: #403d3d;
    --scrollbarTrack-color: #262424;
    --scrollbarHover-color: #6b6666;
}
* {
    font-family: 'Noto Sans KR', 'Roboto', sans-serif !important;
    margin: 0;
    padding: 0;

    /* scroll-behavior: smooth; */

    &::-webkit-scrollbar {
        width: 12px;
        height: 12px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: var(--scrollbarThumb-color); 
        border-radius: 10px;
        background-clip: padding-box;
        border: 3px solid transparent;

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

.loading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.MuiRating-iconFilled {
    color: rgba(255, 255, 255, 0.8);

    ${(props) => props.theme.device.Tablet}{
        color: ${(props) => props.theme.color.fontSubColor};
    }
}

.MuiRating-iconEmpty {
    color: ${(props) => props.theme.color.listBgColor};
}

.MuiRating-root {
    font-size: 3vw;
}
`;

export default GlobalStyle; 