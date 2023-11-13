import React from 'react';
import sound from '../assets/sound.wav'

function ChoiceButton({ text, onClick, disabled, isSpecialQuestion }) {
    const audio = new Audio(sound)




    return (
        <div className="flex items-center">
            <button
                className=" min-h-[80px] max-h-[68px] min-w-[100px] lg:h-[140px] lg:w-48 max-w-48 m-4 p-2 font-bold  lg:p-4  bg-black text-white rounded-none border-2 border-white text-xs lg:text-xl mx-auto flex justify-center items-center hover:bg-white hover:border-black hover:border-2 hover:text-black"
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
