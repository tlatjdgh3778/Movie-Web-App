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
        fontColor: '#fff',
        bgColor: '#121212',
        fontHoverColor: '#c9c9c9',
        listBgColor: '#0d0c0c',
    }
}

const lightMode = {
    fontSize,
    device,
    color: {
        fontColor: '#121212',
        bgColor: '#fff',
        fontHoverColor: '#dbd9d3',
        listBgColor: '#0d0c0c',
    }
}

const theme = {
    darkMode,
    lightMode,
}

export default theme;