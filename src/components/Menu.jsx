import React, { useState } from 'react';
import Credits from './Credits';

const Menu = ({ isPopupOpen, setIsPopupOpen }) => {
    const [showCredits, setShowCredits] = useState(false);

    const handlePopupToggle = () => {
        setIsPopupOpen((prevIsPopupOpen) => !prevIsPopupOpen);
        setShowCredits(false); // Close credits when opening the menu
    };

    const handleRestart = () => {
        setIsPopupOpen(false);
        window.location.reload();
    };

    const handleShowCredits = () => {
        setIsPopupOpen(false); // Close the menu first
        setShowCredits(true); // Show the credits after closing the menu
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
                                CREDITS
                            </button>

                            <button className="block border border-[#f5fdc3] text-white p-8">
                                <a href="mailto:gumrukcugulce@gmail.com">MAIL</a>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {showCredits && <Credits setIsPopupOpen={setIsPopupOpen} />}
        </>
    );
};

export default Menu;
