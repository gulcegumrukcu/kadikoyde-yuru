import React, { useState, useEffect } from 'react';

import logo from '/images/logo1.png';

function EntrancePage({ onReady }) {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowButton(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className='min-h-screen flex flex-col items-center justify-center bg-black text-white'
            style={{
                position: 'relative',
            }}
        >
            <img src={logo} alt='Logo' className='' />
            <div className='flex'>
                {showButton && (
                    <button
                        className='px-6 py-3 mt-6 bg-black hover:text-red-400 text-white font-bold rounded-lg focus:outline-none'
                        onClick={onReady}
                    >
                        Hazırım.
                    </button>
                )}
            </div>

        </div>
    );
}

export default EntrancePage;
