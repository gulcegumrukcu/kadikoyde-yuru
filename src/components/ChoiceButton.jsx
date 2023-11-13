import React from 'react';
import sound from '../assets/sound.wav'

function ChoiceButton({ text, onClick, disabled, isSpecialQuestion }) {
    const audio = new Audio(sound)


    const buttonStyle = {
        width: 'auto',
        margin: '24px 0',
        padding: '12px 18px',
        backgroundColor: '#000',
        color: '#fff',
        borderRadius: '0px',
        height: 'auto',
        border: '2px solid white',
    };

    return (
        <div className={`flex items-center `}>
            <button
                style={buttonStyle}

                onClick={() => {
                    audio.play()
                    onClick()


                }}
                disabled={disabled}
            >
                {text}
            </button>
        </div>
    );
}

export default ChoiceButton;
