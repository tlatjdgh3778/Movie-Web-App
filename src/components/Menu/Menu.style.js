import styled from 'styled-components';
import { Typography, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Brightness4Icon from '@material-ui/icons/Brightness4'; // Brightness4Icon 다크모드로
import Brightness7Icon from '@material-ui/icons/Brightness7'; // Brightness7Icon 라이트모드로

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 0;
    display: flex;
    align-items: center;
`;

const MenuContent = styled.div`
    position: fixed;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;
`;

const MenuItem = styled(Typography)`
    color: white;
    font-size: 5vw;
    font-weight: 700;
    margin-bottom: 2rem;
`;

const CloseIconButton = styled(IconButton)`
    position: absolute;
    top: 0;
    right: 0;
    margin: 1rem;
    color: white;
    z-index: 1000;
`;

const CloseBtn = styled(CloseIcon)`
    font-size: 6vw;
`;

const ModeIconButton = styled(IconButton)`
    position: absolute;
    top: 0;
    left: 0;
    margin: 1rem;
    color: white;
    z-index: 1000;
`;

const DarkMode = styled(Brightness4Icon)`
    font-size: 6vw;
`;

const LightMode = styled(Brightness7Icon)`
    font-size: 6vw;
`;
export { Background, MenuContent, CloseIconButton, CloseBtn, MenuItem, ModeIconButton, DarkMode, LightMode };