import React, { useState } from 'react';

const Credits = ({ setIsPopupOpen }) => {
    const [showCredits, setShowCredits] = useState(true);

    const handleCloseCredits = () => {
        setShowCredits(false);
        setTimeout(() => {
            setIsPopupOpen(false);
        }, 500);
    };

    return (
        showCredits && (
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
                            <p className='font-kanit'>fikir/kod/görseller/ses</p>
                            <div className="text-[#f5fdc3] font-bold">gülce g.</div>
                        </div>
                        <div className='font-press-start'>
                            <p className='font-kanit'>senaryo</p>
                            <div className="text-[#f5fdc3] font-bold">yiğit e.</div>
                        </div>
                        <div className='font-press-start'>
                            <p className='font-kanit'>tam destek</p>
                            <div className="text-[#f5fdc3] font-bold">alper ü.</div>
                            <div className="text-[#f5fdc3] font-bold">pelin t.</div>
                            <div className="text-[#f5fdc3] font-bold">tayfun e.</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
};

export default Credits;
