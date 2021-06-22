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
import Menu from 'components/Menu/Menu';
import { StylesProvider } from '@material-ui/core';
import { ModalStateProvider } from 'contexts/modal';
import { MovieProvider } from 'contexts/movie';
import { Switch, Route } from 'react-router-dom';

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <>
    <ThemeProvider theme={isDark ? theme.darkMode : theme.lightMode}>
      <GlobalStyle />
        <div className="App">
          <StylesProvider injectFirst>
            <MovieProvider>
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
              </Switch>
              <Menu></Menu>
              <Footer></Footer>
            </ModalStateProvider>
            </MovieProvider>
          </StylesProvider>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
