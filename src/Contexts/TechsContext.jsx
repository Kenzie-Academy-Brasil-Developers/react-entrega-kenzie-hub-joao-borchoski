import { createContext, useState } from "react";

export const TechsContext = createContext({});

export const TechsProvider = ({ children }) => {
    const [modal, setModal] = useState(false);

    const [updateModal, setUpdateModal] = useState(false);

    const [observer, setObserver] = useState(0);

    const [width, setWidth] = useState(0);


    window.addEventListener("resize", () => {
        setWidth(window.screen.width);
    });

    return (
        <TechsContext.Provider
            value={{
                modal,
                setModal,
                observer,
                setObserver,
                width,
                updateModal,
                setUpdateModal,
            }}
        >
            {children}
        </TechsContext.Provider>
    );
};
