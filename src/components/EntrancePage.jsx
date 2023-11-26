import React, { useState, useEffect } from 'react';
import sound from '../assets/sound.wav'
import logo from '/images/logoo.png';
import Settings from './Settings';

function EntrancePage({ onReady }) {
    const [showButton, setShowButton] = useState(false);
    const audio = new Audio(sound)
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowButton(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const handleReadyClick = () => {
        // Play the sound when the button is clicked
        audio.play();

        // Call the onReady function
        onReady();
    };

    return (
        <div
            className='min-h-screen flex flex-col items-center justify-center bg-black text-white'
            style={{
                position: 'relative',
            }}
        >
            <Settings></Settings>
            <img src={logo} alt='Logo' className='h-32 w-160' />
            <div className='flex'>
                {showButton && (
                    <button
                        className='px-6 py-3 mt-6 bg-black hover:text-red-400 text-white font-bold rounded-lg focus:outline-none'
                        onClick={handleReadyClick} // Use the new handler
                    >
                        Hazırım.
                    </button>
                )}
            </div>
        </div>
    );
}

export default EntrancePage;