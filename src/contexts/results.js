import React, { createContext, useState } from 'react';

const ResultContext = createContext({
    state: {
        results: [],
    },
    actions: {
        setResults: () => {},
    },
});

const ResultProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    
    const value = {
        state: { results },
        actions: { setResults },
    };

    return(
        <ResultContext.Provider value={value}>{children}</ResultContext.Provider>
    );
};

export { ResultProvider, ResultContext };