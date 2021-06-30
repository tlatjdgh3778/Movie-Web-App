import React, { useState } from 'react';
import GlobalStyle from 'style/global';
import { ThemeProvider } from 'styled-components';
import theme from 'style/theme';
import Header from 'components/Header/Header';
import Main from 'components/Main/Main';
import Popular from 'components/Popular/Popular';
import NowPlaying from 'components/NowPlaying/NowPlaying';
import TopRated from 'components/TopRated/TopRated';
import Likes from 'components/Likes/Likes';
import Footer from 'components/Footer/Footer';
import Results from 'components/Results/Results';
import Detail from 'components/Detail/Detail';
import Menu from 'components/Menu/Menu';
import { StylesProvider, ThemeProvider as MuiThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ModalStateProvider } from 'contexts/modal';
import { ResultProvider } from 'contexts/results';
import { MovieProvider } from 'contexts/movie';
import { Switch, Route } from 'react-router-dom';

function App() {
  const [isDark, setIsDark] = useState(true);
  const themeBreakPoint = createMuiTheme({
    breakpoints: {
      values: {
        mobile: '(max-width:480px)',
        tablet: '(min-width:481px) and (max-width:768px)',
        laptop: '(min-width:769px) and (max-width:1024px)',
        desktop: '(min-width:1025px)',
      },
    },
  });
  
  return (
    <>
    <StylesProvider injectFirst>
    <ThemeProvider theme={isDark ? theme.darkMode : theme.lightMode}>
      <MuiThemeProvider theme={themeBreakPoint}>
      <GlobalStyle />
        <div className="App">
            <MovieProvider>
            <ResultProvider>
            <ModalStateProvider>
              <Header></Header>
              <Switch>
                <Route exact path="/">
                  <Main></Main>
                </Route>
                <Route exact path="/Popular">
                  <Popular></Popular>
                </Route>
                <Route exact path="/NowPlaying">
                  <NowPlaying></NowPlaying>
                </Route>
                <Route exact path="/TopRated">
                  <TopRated></TopRated>
                </Route>
                <Route exact path="/Likes">
                  <Likes></Likes>
                </Route>
                <Route exact path="/Results">
                  <Results></Results>
                </Route>
                <Route path="/Detail">
                  <Detail></Detail>
                </Route>
              </Switch>
              <Menu></Menu>
              <Footer></Footer>
            </ModalStateProvider>
            </ResultProvider>
            </MovieProvider>
        </div>
        </MuiThemeProvider>
      </ThemeProvider>
      </StylesProvider>
    </>
  );
}

export default App;
