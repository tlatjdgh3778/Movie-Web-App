import React, { useState } from 'react';
import GlobalStyle from 'style/global';
import { ThemeProvider } from 'styled-components';
import theme from 'style/theme';
import Header from 'components/Header/Header';
import Main from 'components/Main/Main';
import Footer from 'components/Footer/Footer';
import { StylesProvider } from '@material-ui/core';

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <>
    <ThemeProvider theme={isDark ? theme.darkMode : theme.lightMode}>
      <GlobalStyle />
        <div className="App">
          <StylesProvider injectFirst>
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
          </StylesProvider>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
