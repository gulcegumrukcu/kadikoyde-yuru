import React, { useState, useEffect } from 'react';
import click from '../audio/click.mp3';
import music from '../audio/music.mp3';
import logo from '/images/logo.mp4';
import Menu from './Menu';
import SoundControl from './SoundControl';
import Sound from './Sound'; // Import the Sound component
import Credits from './Credits'; // Import the Credits component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadphones } from '@fortawesome/free-solid-svg-icons'; // Import the headphones icon

function EntrancePage({ onReady }) {
    const [showButton, setShowButton] = useState(false);
    const audio = new Audio(click);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [showCredits, setShowCredits] = useState(false);
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
        console.log('Ready button clicked');
        audio.play();
        onReady();
    };

    const handleTogglePopup = () => {
        console.log('Toggle popup clicked');
        setIsPopupOpen((prevIsPopupOpen) => !prevIsPopupOpen);
    };

    const handleToggleSound = () => {
        console.log('Toggle sound clicked');
        setIsMuted((prevIsMuted) => !prevIsMuted);
        backgroundMusic.muted = !backgroundMusic.muted; // Toggle the muted state
    };

    const handleShowCredits = () => {
        console.log('Show credits clicked');
        setShowCredits(true);
        setIsPopupOpen(false); // Close the menu when opening credits
    };

    const handleCloseCredits = () => {
        console.log('Close credits clicked');
        setShowCredits(false);
    };


    return (
        <div className='min-h-screen flex flex-col items-center justify-center bg-black text-white'>
            <div className='fixed bottom-0 right-0 bg-black flex-row gap-4 rounded-none p-2 text-white flex mx-auto'>
                <SoundControl
                    onToggleSound={handleToggleSound}
                    isMuted={isMuted}
                />
                <Menu
                    setIsPopupOpen={setIsPopupOpen}
                    onTogglePopup={handleTogglePopup}
                    isPopupOpen={isPopupOpen}
                    setShowCredits={setShowCredits} // Pass the showCredits handler
                    showCredits={showCredits}
                />
            </div>
            <video autoPlay muted loop className='w-[100%]'>
                <source src={logo} type='video/mp4' />
            </video>
            <div className='flex flex-col items-center'>
                {showButton && (
                    <button
                        className='px-6 py-3 mt-6 bg-black hover:text-red-400 text-white text-2xl rounded-lg focus:outline-none'
                        style={{ fontFamily: 'Kanit, sans-serif' }}
                        onClick={handleReadyClick}
                    >
                        Hazırım.
                    </button>
                )}
                <div className='mt-4 text-sm flex items-center text-lg'>
                    <FontAwesomeIcon icon={faHeadphones} className='mr-2' />
                    <span style={{ fontFamily: 'Press Start 2P, cursive' }}>Kulaklık tavsiye edilir.</span>
                </div>
            </div>



            {/* Add the Sound component for background music */}
            <Sound audioSrc={music} isMuted={isMuted} loop />

            {/* Show Credits Popup */}
            {showCredits && <Credits setIsPopupOpen={handleCloseCredits} />}
        </div>
    );
}

export default EntrancePage;
