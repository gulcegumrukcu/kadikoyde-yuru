import React from 'react';
import sound from '../assets/sound.wav'

function ChoiceButton({ text, onClick, disabled, isSpecialQuestion }) {
    const audio = new Audio(sound)




    return (
        <div className="flex items-center">
            <button
                className=" min-h-[100px] max-h-[68px] min-w-[100px] lg:h-[150px] lg:w-48 max-w-48 m-4 p-2 font-bold  lg:p-4  bg-black text-white rounded-none border-2 border-white text-xs lg:text-xl mx-auto flex justify-center items-center hover:bg-opacity-10 hover:border-black hover:border-4 hover:text-white hover:text-bold"
                onClick={() => {
                    audio.play();
                    onClick();
                }}
                disabled={disabled}
            >
                {text}
            </button>
        </div>
    );
}

export default ChoiceButton;
