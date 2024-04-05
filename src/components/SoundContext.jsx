// SoundContext.js
import React, { createContext, useContext, useState } from 'react';

const SoundContext = createContext();

export const useSound = () => useContext(SoundContext);

export const SoundProvider = ({ children }) => {
    const [isMuted, setIsMuted] = useState(false);

    const toggleSound = () => {
        setIsMuted(prevState => !prevState);
    };

    return (
        <SoundContext.Provider value={{ isMuted, toggleSound }}>
            {children}
        </SoundContext.Provider>
    );
};