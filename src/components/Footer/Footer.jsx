import React from 'react';
import * as S from './Footer.style';
import Typography from '@material-ui/core/Typography';

const toGithub = () => {
    const win = window.open("https://github.com/tlatjdgh3778/Movie-Web-App", "_blank");
    win.focus();
}  

const Footer = () => {
    return(
        <S.FooterContainer>
            <Typography>Made By SeongHo Shim</Typography>
            <S.CustomGithub onClick={toGithub} />
        </S.FooterContainer>
    );
}

export default Footer;