import React, { createContext, useState } from 'react';

const ModeContext = createContext({
    state: {
        isDark: true,
    },
    actions: {
        setIsDark: () => {},
    },
});

const ModeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(true);

    const value = {
        state: { isDark },
        actions: { setIsDark },
    };

    return(
        <ModeContext.Provider value={value}>{children}</ModeContext.Provider>
    );
};

export { ModeProvider, ModeContext };