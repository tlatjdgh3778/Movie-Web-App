const fontSize = {
    ssm: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
}

const deviceSize = {
    Mobile: '480px',
    Tablet: '768px',
    LapTop: '1024px',
    Desktop: '1440px',
}

const device = {
    Mobile: `@media (max-width: ${deviceSize.Mobile})`,
    Tablet: `@media (max-width: ${deviceSize.Tablet})`,
    LapTop: `@media (max-width: ${deviceSize.LapTop})`,
    Desktop: `@media (max-width: ${deviceSize.Desktop})`,
}

const darkMode = {
    fontSize,
    device,
    color: {
        headerColor: '#1d1d1d',
        fontColor: '#fff',
        // 장르, 별점 이런 애들
        fontSubColor: 'rgba(255, 255, 255, 0.8)',
        bgColor: '#121212',
        fontHoverColor: '#c9c9c9',
        listBgColor: '#1d1d1d',
        searchContainer: '#515151',
        imageCover: 'black',
    }
}

const lightMode = {
    fontSize,
    device,
    color: {
        headerColor: '#fbfbfb',
        fontColor: '#000',
        fontSubColor: '#121212',
        bgColor: '#ececec',
        fontHoverColor: '#575757',
        listBgColor: '#fbfbfb',
        searchContainer: '#e6e8ea',
    }
}

const theme = {
    darkMode,
    lightMode,
}

export default theme;