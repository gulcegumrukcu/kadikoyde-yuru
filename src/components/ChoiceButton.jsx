import React from 'react';
import sound from '../assets/sound.wav'

function ChoiceButton({ text, onClick, disabled, isSpecialQuestion }) {
    const audio = new Audio(sound)




    return (
        <div className="flex items-center">
            <button
                className=" min-h-[150px] max-h-[180px] min-w-[140px] lg:h-[220px] lg:w-52 max-w-48 m-4 p-2 font-bold  lg:p-4  bg-black text-white rounded-none border-2 border-white text-xs lg:text-xl mx-auto flex justify-center items-center hover:bg-opacity-50 hover:border-black hover:border-2 hover:text-white hover:text-bold"
                onClick={() => {
                    audio.play();
                    onClick();
                }}
                disabled={disabled}
            >
                <div className='whitespace-pre-line'>
                    {text}
                </div>

            </button>
        </div>
    );
}

export default ChoiceButton;
