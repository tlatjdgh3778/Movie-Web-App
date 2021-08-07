import React from "react";
import GlobalStyle from "style/global";
import { ThemeProvider } from "styled-components";
import theme from "style/theme";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import Menu from "components/Menu/Menu";
import { StylesProvider } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { routes } from "pages/routes";

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
                            {routes.map(({ path, page, exact }, i) => (
                                <Route exact={exact} path={path} component={page} key={i} />
                            ))}
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
