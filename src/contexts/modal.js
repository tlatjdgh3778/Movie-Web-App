import React, { createContext, useState } from 'react';

const ModalStateContext = createContext({
    state: {
        isOpen: false,
    },
    actions: {
        setIsOpen: () => {},
    },
});

const ModalStateProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const value = {
        state: { isOpen },
        actions: { setIsOpen },
    };

    return(
        <ModalStateContext.Provider value={value}>{children}</ModalStateContext.Provider>
    );
};

export { ModalStateProvider, ModalStateContext };