import React, { useState, useEffect } from 'react';
import sound from '../audio/sound.mp3';
import music from '../audio/music.mp3';
import logo from '/images/logo.mp4';
import Menu from './Menu';
import SoundControl from './SoundControl';

function EntrancePage({ onReady, onToggleSound, isMuted }) {
    const [showButton, setShowButton] = useState(false);
    const audio = new Audio(sound);
    const backgroundMusic = new Audio(music);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowButton(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        backgroundMusic.play();
        backgroundMusic.loop = true;

        const playMusic = () => {
            backgroundMusic.play();
        };

        document.addEventListener('visibilitychange', playMusic);
        backgroundMusic.addEventListener('canplaythrough', playMusic);

        return () => {
            backgroundMusic.pause();
            backgroundMusic.currentTime = 0;
            document.removeEventListener('visibilitychange', playMusic);
            backgroundMusic.removeEventListener('canplaythrough', playMusic);
        };
    }, [backgroundMusic]);

    const handleReadyClick = () => {
        audio.play();
        onReady();
    };

    const handleTogglePopup = () => {
        console.log('Toggling Popup in EntrancePage');
        setIsPopupOpen((prevIsPopupOpen) => !prevIsPopupOpen);
    };

    console.log('isPopupOpen in EntrancePage:', isPopupOpen);

    return (
        <div className='min-h-screen flex flex-col items-center justify-center bg-black text-white'>
            <div className='fixed bottom-0 right-0 bg-black flex-row gap-4 rounded-none p-2 text-white flex mx-auto'>
                <SoundControl
                    onToggleSound={() => {
                        backgroundMusic.muted = !backgroundMusic.muted;
                        setIsMuted(backgroundMusic.muted);
                    }}
                    isMuted={backgroundMusic.muted}
                />

                <Menu setIsPopupOpen={setIsPopupOpen} onTogglePopup={handleTogglePopup} isPopupOpen={isPopupOpen} />
            </div>
            <video autoPlay loop muted className='w-[100%]'>
                <source src={logo} type='video/mp4' />
            </video>
            <div className='flex'>
                {showButton && (
                    <button
                        className='px-6 py-3 mt-6 bg-black hover:text-red-400 text-white font-bold rounded-lg focus:outline-none'
                        onClick={handleReadyClick}
                    >
                        Hazırım.
                    </button>
                )}
            </div>
        </div>
    );
}

export default EntrancePage;
