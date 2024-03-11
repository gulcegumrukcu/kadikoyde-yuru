import {createContext, useContext, useState} from "react";

const MainContext = createContext();

export const MainProvider = ({ children }) => {

    const [isMuted, setIsMuted] = useState(true)

    return (
        <MainContext.Provider
            value={{
                isMuted,
                setIsMuted
            }}
        >
            {children}
        </MainContext.Provider>
    )
};

export const useMainContext = () => {
    return useContext(MainContext);
}

export default MainContext;