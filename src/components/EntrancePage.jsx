// EntrancePage.jsx

import React, { useState, useEffect } from 'react';
import click from '../audio/click.mp3';
import music from '../audio/music.mp3';
import logo from '/images/logo.mp4';
import Menu from './Menu';
import SoundControl from './SoundControl';
import Sound from './Sound'; // Import the Sound component

function EntrancePage({ onReady }) {
    const [showButton, setShowButton] = useState(false);
    const audio = new Audio(click);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isMuted, setIsMuted] = useState(false);

    // Declare the backgroundMusic variable
    const backgroundMusic = new Audio(music);
    backgroundMusic.muted = isMuted; // Set initial muted state

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowButton(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const handleReadyClick = () => {
        audio.play();
        onReady();
    };

    const handleTogglePopup = () => {
        setIsPopupOpen((prevIsPopupOpen) => !prevIsPopupOpen);
    };


    const handleToggleSound = () => {
        setIsMuted((prevIsMuted) => !prevIsMuted);
        backgroundMusic.muted = !backgroundMusic.muted; // Toggle the muted state
    };



    return (
        <div className='min-h-screen flex flex-col items-center justify-center bg-black text-white'>
            <div className='fixed bottom-0 right-0 bg-black flex-row gap-4 rounded-none p-2 text-white flex mx-auto'>
                <SoundControl
                    onToggleSound={handleToggleSound}
                    isMuted={isMuted}
                />
                <Menu setIsPopupOpen={setIsPopupOpen} onTogglePopup={handleTogglePopup} isPopupOpen={isPopupOpen} />
            </div>
            <video autoPlay muted loop className='w-[100%]'>
                <source src={logo} type='video/mp4' />
            </video>
            <div className='flex'>
                {showButton && (
                    <button
                        className='px-6 py-3 mt-6 bg-black hover:text-red-400 text-white text-xl rounded-lg focus:outline-none'
                        style={{ fontFamily: 'Kanit, sans-serif' }}
                        onClick={handleReadyClick}
                    >
                        Hazırım.
                    </button>
                )}
            </div>

            {/* Add the Sound component for background music */}
            <Sound audioSrc={music} isMuted={isMuted} loop />
        </div>
    );
}

export default EntrancePage;
