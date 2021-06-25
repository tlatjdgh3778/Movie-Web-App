import React, { createContext, useState } from 'react';

const MovieContext = createContext({
    state: {
        popular: [],
        nowPlaying: [],
        topRated: [],
        trend: [],
        detail: [],
    },
    actions: {
        setPopular: () => {},
        setNowPlaying: () => {},
        setTopRated: () => {},
        setTrend: () => {},
        setDetail: () => {},
    },
});

const MovieProvider = ({ children }) => {
    const [popular, setPopular] = useState([]);
    const [nowPlaying, setNowPlaying] = useState([]);
    const [topRated, setTopRated] = useState([]);
    const [trend, setTrend] = useState([]);
    const [detail, setDetail] = useState([]);

    const value = {
        state: { popular, nowPlaying, topRated, trend, detail },
        actions: { setPopular, setNowPlaying, setTopRated, setTrend, setDetail },
    };

    return(
        <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
    );
};

export { MovieProvider, MovieContext };