import React, { useState } from 'react';
import Credits from './Credits';

const Menu = ({ isPopupOpen, setIsPopupOpen, setTypewriterEnabled, typewriterEnabled }) => {
    const [showCredits, setShowCredits] = useState(false);
    const handlePopupToggle = () => {
        console.log('Menu toggle clicked');
        setIsPopupOpen((prevIsPopupOpen) => !prevIsPopupOpen);
    };

    const handleRestart = () => {
        console.log('Restart clicked');
        setIsPopupOpen(false);
        window.location.reload();
    };

    const handleShowCredits = () => {
        console.log('Show credits clicked');
        setShowCredits(true);
        setIsPopupOpen(false); // Close the menu when opening credits
    };

    const handleTypewriterToggle = () => {
        console.log('Typewriter toggle clicked');
        setTypewriterEnabled((prevEnabled) => !prevEnabled);
    };

    const handleCloseCredits = () => {
        console.log('Close credits clicked');
        setShowCredits(false);
    };

    return (
        <>
            <img
                src="/images/menu.svg"
                onClick={handlePopupToggle}
                alt="Open Menu"
                className="w-8 h-8 mt-1 cursor-pointer"
            />

            {isPopupOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-50 flex items-center justify-center">
                    <div className="bg-black bg-opacity-90 z-50 p-8 gap-2 rounded-md text-white w-auto mx-auto relative">
                        <button
                            className="absolute top-2 right-2 text-white cursor-pointer"
                            onClick={() => setIsPopupOpen(false)}
                        >
                            <img src="/images/close.svg" alt="Close Menu" className="w-8 h-8" />
                        </button>

                        <div className="mx-auto justify-center grid gap-12 text-xl font-bold mt-8">
                            <button className="block border border-[#f5fdc3] text-white p-8" onClick={handleRestart}>
                                YENİDEN BAŞLA
                            </button>

                            <button className="block border border-[#f5fdc3] text-white p-8" onClick={handleShowCredits}>
                                KİMLER KİMLER?
                            </button>

                            <button className="block border border-[#f5fdc3] text-white p-8">
                                <a href="mailto:gumrukcugulce@gmail.com">MAIL</a>
                            </button>
                            <div className="flex items-center">
                                <label htmlFor="typewriterToggle" className="text-white mr-4">Daktilo Efekti</label>
                                <div className="relative">
                                    <input
                                        id="typewriterToggle"
                                        type="checkbox"
                                        checked={typewriterEnabled}
                                        onChange={handleTypewriterToggle}
                                        className="sr-only"
                                    />
                                    <div
                                        className={`w-12 h-6 bg-gray-300 rounded-full flex items-center px-1 ${typewriterEnabled ? 'bg-green-500 justify-end' : 'justify-start'}`}
                                        onClick={handleTypewriterToggle}
                                    >
                                        <div className="w-6 h-6 bg-black rounded-full shadow-md"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {showCredits && <Credits setIsPopupOpen={handleCloseCredits} />}
        </>
    );
};

export default Menu;
