import React, { createContext, useState } from 'react';

const MovieContext = createContext({
    state: {
        popular: [],
        nowPlaying: [],
        topRated: [],
        trend: [],
        detail: [],
        credit: [],
        recommendation: [],
    },
    actions: {
        setPopular: () => {},
        setNowPlaying: () => {},
        setTopRated: () => {},
        setTrend: () => {},
        setDetail: () => {},
        setCredit: () => {},
        setRecommendation: () => {},
    },
});

const MovieProvider = ({ children }) => {
    const [popular, setPopular] = useState([]);
    const [nowPlaying, setNowPlaying] = useState([]);
    const [topRated, setTopRated] = useState([]);
    const [trend, setTrend] = useState([]);
    const [detail, setDetail] = useState([]);
    const [credit, setCredit] = useState([]);
    const [recommendation, setRecommendation] = useState([]);

    const value = {
        state: { popular, nowPlaying, topRated, trend, detail, credit, recommendation },
        actions: { setPopular, setNowPlaying, setTopRated, setTrend, setDetail, setCredit, setRecommendation },
    };

    return(
        <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
    );
};

export { MovieProvider, MovieContext };