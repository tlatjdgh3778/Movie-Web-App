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
import { StylesProvider, ThemeProvider as MuiThemeProvider, useMediaQuery } from '@material-ui/core';
import { createMuiTheme, useTheme } from '@material-ui/core/styles';
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
  const mobileMatches = useMediaQuery('(max-width:480px)');
  const tabletMatches = useMediaQuery('(min-width:481px) and (max-width:768px)');
  const laptopMatches = useMediaQuery('(min-width:769px) and (max-width:1024px)');
  const desktopMatches = useMediaQuery('(min-width:1025px)');

  const getGridListCols = () => {
      if(mobileMatches){
          return 2;
      }
      if(tabletMatches){
          return 3;
      }
      if(laptopMatches){
          return 4;
      }
      if(desktopMatches){
          return 5;
      }
  }
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
                  <Main getGridListCols={getGridListCols}></Main>
                </Route>
                <Route exact path="/Popular">
                  <Popular getGridListCols={getGridListCols}></Popular>
                </Route>
                <Route exact path="/NowPlaying">
                  <NowPlaying getGridListCols={getGridListCols}></NowPlaying>
                </Route>
                <Route exact path="/TopRated">
                  <TopRated getGridListCols={getGridListCols}></TopRated>
                </Route>
                <Route exact path="/Likes">
                  <Likes getGridListCols={getGridListCols}></Likes>
                </Route>
                <Route exact path="/Results">
                  <Results getGridListCols={getGridListCols}></Results>
                </Route>
                <Route path="/Detail">
                  <Detail getGridListCols={getGridListCols}></Detail>
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
