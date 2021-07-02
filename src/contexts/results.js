import React, { createContext, useState } from 'react';

const ResultContext = createContext({
    state: {
        results: [],
        searchValue: [],
    },
    actions: {
        setResults: () => {},
        setSearchValue: () => {},
    },
});

const ResultProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [searchValue, setSearchValue] = useState([]);
    
    const value = {
        state: { results, searchValue },
        actions: { setResults, setSearchValue },
    };

    return(
        <ResultContext.Provider value={value}>{children}</ResultContext.Provider>
    );
};

export { ResultProvider, ResultContext };