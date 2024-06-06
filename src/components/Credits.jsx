import React, { useState } from 'react';

const Credits = ({ setIsPopupOpen }) => {
    const [creditsInfo] = useState({
        title1: 'fikir/kod/görseller/ses',
        paragraph1: 'gülce g.',
        title2: 'senaryo',
        paragraph2: 'yiğit e.',
        title3: 'tam destek',
        paragraph3: 'alper ü.',
        paragraph4: 'pelin t.',
        paragraph5: 'tayfun e.',
    });

    const handleCloseCredits = () => {
        console.log('Closing credits popup');
        setIsPopupOpen(false);
    };

    return (
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
    );
};

export default Credits;
