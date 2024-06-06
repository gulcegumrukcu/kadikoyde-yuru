import React, { useState, useEffect } from 'react';

const Credits = ({ setIsPopupOpen }) => {
    const [creditsInfo, setCreditsInfo] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/credits')
            .then(response => response.json())
            .then(data => {
                setCreditsInfo(data);
            })
            .catch(error => console.error('Error fetching credits:', error));
    }, []); // Run this effect only once when the component mounts

    const handleCloseCredits = () => {
        console.log('Closing credits popup'); // Add this line to check if the function is being called
        setTimeout(() => {
            setIsPopupOpen(false);
        }, 500);
    };
    return (
        creditsInfo && (
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-20 z-50 flex items-center justify-center">
                <div className="bg-black bg-opacity-90 z-50 p-8 rounded-md text-white w-full max-w-screen-md mx-auto relative">
                    <button
                        className="absolute top-2 right-2 text-white cursor-pointer"
                        onClick={handleCloseCredits}
                    >
                        <img src="/images/close.svg" alt="Close Credits" className="w-8 h-8" />
                    </button>

                    <div className="mx-auto justify-center grid gap-6 text-xl font-normal mt-2">
                        <div className='font-press-start'>
                            <p className='font-kanit'>{creditsInfo.title1}</p>
                            <div className="text-yellow-200 font-bold">{creditsInfo.paragraph1}</div>
                        </div>
                        <div className='font-press-start'>
                            <p className='font-kanit'>{creditsInfo.title2}</p>
                            <div className="text-yellow-200 font-bold">{creditsInfo.paragraph2}</div>
                        </div>
                        <div className='font-press-start'>
                            <p className='font-kanit'>{creditsInfo.title3}</p>
                            <div className="text-yellow-200 font-bold">{creditsInfo.paragraph3}</div>
                            <div className="text-yellow-200 font-bold">{creditsInfo.paragraph4}</div>
                            <div className="text-yellow-200 font-bold">{creditsInfo.paragraph5}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
};

export default Credits;