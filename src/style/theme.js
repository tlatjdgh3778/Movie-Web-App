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
    Desktop: '1440px',
}

const device = {
    Mobile: `@media (max-width: ${deviceSize.Mobile})`,
    Tablet: `@media (max-width: ${deviceSize.Tablet})`,
    Desktop: `@media (max-width: ${deviceSize.Desktop})`,
}

const darkMode = {
    fontSize,
    device,
    color: {
        fontColor: '#fff',
        bgColor: '#121212',
    }
}

const lightMode = {
    fontSize,
    device,
    color: {
        fontColor: '#121212',
        bgColor: '#fff',
    }
}

const theme = {
    darkMode,
    lightMode,
}

export default theme;