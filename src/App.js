import React from 'react';
import GlobalStyle from 'style/global';
import { ThemeProvider } from 'styled-components';
import theme from 'style/theme';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import { Detail, Likes, Main, NowPlaying, Popular, Results, TopRated } from 'pages/index';
import Menu from 'components/Menu/Menu';
import { StylesProvider } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

function App() {
  const isDark = useSelector(({ mode }) => mode.isDark);
  
  return (
    <>
    <StylesProvider injectFirst>
    <ThemeProvider theme={isDark ? theme.darkMode : theme.lightMode}>
      <GlobalStyle />
        <div className="App">
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
        </div>
      </ThemeProvider>
      </StylesProvider>
    </>
  );
}

export default App;
