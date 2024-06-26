// ChoiceButton.jsx

import React from 'react';
import sound from '../audio/click.mp3';
import Sound from './Sound';

function ChoiceButton({ text, onClick, disabled }) {
    const soundSrc = sound;

    return (
        <div className="flex items-center mb-2 lg:mb-0 lg:mx-[auto] mt-2 ">
            <button
                className={`min-h-[150px] max-h-[180px] min-w-[140px] max-w-[230px] lg:h-[220px] lg:w-64 max-w-48 m-4 p-2 lg:p-4 bg-black text-[#d8d8d8] rounded-none border border-[#f5fdc3] text-xs lg:text-xl mx-auto flex justify-center items-center ${window.innerWidth < 480 ? '' : 'hover:bg-opacity-50 hover:border-black hover:border-2 hover:text-[#f5fdc3] hover:text-bold'
                    }`}
                onClick={() => {
                    onClick();
                }}
                disabled={disabled}
            >
                <div className="whitespace-pre-line">{text}</div>
                <Sound src={soundSrc} play={!disabled} />
            </button>
        </div>
    );
}

export default ChoiceButton;
