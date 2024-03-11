// Sound.jsx

import React, { useEffect, useRef, useState } from 'react';
import {useMainContext} from "../context/main-context.jsx";

const Sound = ({ audioSrc, loop }) => {

    const {isMuted} = useMainContext();
    const audioRef = useRef(null);
    const isMounted = useRef(true);

    useEffect(() => {
        // Set the mounted flag to true when the component is mounted
        isMounted.current = true;

        // Cleanup function to set the mounted flag to false when the component is unmounted
        return () => {
            isMounted.current = false;
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
            }
        };
    }, []);

    useEffect(() => {
        const playAudio = async () => {
            if (audioRef.current && !isMuted && isMounted.current) {
                try {
                    await audioRef.current.play();
                    // Automatic playback started!
                    // You can add any logic here for UI changes if needed.
                    // For example, you might want to show a "playing" UI.
                } catch (error) {
                    // Auto-play was prevented
                    // You can add any logic here for UI changes if needed.
                    // For example, you might want to show a "paused" UI.
                    console.error('Error playing audio:', error);
                }
            }
        };

        // Autoplay on initial render
        playAudio();
    }, [isMuted, audioSrc]);

    return <audio ref={audioRef} src={audioSrc} muted={isMuted} loop={loop} />;
};

export default Sound;
