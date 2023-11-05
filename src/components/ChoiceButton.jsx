import React from 'react';

function ChoiceButton({ text, onClick, disabled, isSpecialQuestion }) {


    const buttonStyle = {
        width: 'auto',
        margin: '24px 0',
        padding: '12px 18px',
        backgroundColor: '#000',
        color: '#fff',
        borderRadius: '0',
        height: 'auto',
        border: '2px solid white',
    };

    return (
        <div className={`flex items-center `}>
            <button
                style={buttonStyle}

                onClick={onClick}
                disabled={disabled}
            >
                {text}
            </button>
        </div>
    );
}

export default ChoiceButton;
