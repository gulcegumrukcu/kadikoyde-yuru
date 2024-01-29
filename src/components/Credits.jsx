import React, { useState } from 'react';

const Credits = ({ setIsPopupOpen }) => {
    const [showCredits, setShowCredits] = useState(true); // Initial state is true to show credits

    const handleCloseCredits = () => {
        setShowCredits(false); // Close the credits
        setTimeout(() => {
            setIsPopupOpen(false); // Close the popup after the fade-out animation
        }, 500); // Adjust the timeout based on your fade-out animation duration
    };

    return (
        // Render the component only if showCredits is true
        showCredits && (
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-20 z-50 flex items-center justify-center">
                <div className="bg-black bg-opacity-90 z-50 p-8 rounded-md text-white w-full max-w-screen-md mx-auto relative">
                    <button
                        className="absolute top-2 right-2 text-white cursor-pointer"
                        onClick={handleCloseCredits}
                    >
                        <img src="/images/close.svg" alt="Close Credits" className="w-8 h-8" />
                    </button>

                    <div className="mx-auto justify-center grid gap-6 text-xl font-normal mt-8">
                        <div>
                            <p>fikir/kod/görseller/ses<div className="text-[#f5fdc3] font-bold">gülce</div></p>
                        </div>
                        <div>
                            <p>senaryo<div className="text-[#f5fdc3] font-bold">yiğit</div></p>
                        </div>
                        <div>
                            <p>tam destek<div className="text-[#f5fdc3] font-bold">alper</div></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
};

export default Credits;
