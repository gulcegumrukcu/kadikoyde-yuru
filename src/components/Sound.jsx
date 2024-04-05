// Sound.jsx
import React, { useEffect, useRef } from 'react';

const Sound = ({ audioSrc, isMuted, loop }) => {
    const audioRef = useRef(null);

    useEffect(() => {
        const playAudio = async () => {
            if (audioRef.current && !isMuted) {
                try {
                    await audioRef.current.play();
                } catch (error) {
                    console.error('Error playing audio:', error);
                }
            } else {
                if (audioRef.current) {
                    audioRef.current.pause();
                    audioRef.current.currentTime = 0;
                }
            }
        };

        playAudio();
    }, [isMuted, audioSrc]);

    return <audio ref={audioRef} src={audioSrc} loop={loop} />;
};

export default Sound;
