import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { IconButton } from '@material-ui/core';

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
    color: ${(props) => props.theme.color.bgColor};
`;

const MenuItem = styled(Typography)`
    color: ${(props) => props.theme.color.fontColor};
    font-size: 5vw;
    font-weight: 700;
    margin-bottom: 2rem;
`;

const CustomIconButton = styled(IconButton)`
    position: absolute;
    top: 0;
    right: 0;
    margin: 1rem;
    color: ${(props) => props.theme.color.fontColor};
    z-index: 1000;
`;

const CloseBtn = styled(CloseIcon)`
    color: ${(props) => props.theme.color.fontColor};
    font-size: 6vw;
`;


export { Background, MenuContent, CustomIconButton, CloseBtn, MenuItem };