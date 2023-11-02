import React from 'react';

function ChoiceButton({ text, onClick, disabled, isSpecialQuestion }) {
    const buttonStyle = {
        width: 'auto', // Full width for larger screens
        margin: '24px', // Default margin for larger screens
        padding: '12px',
        backgroundColor: '#000', // Set background color to black
        color: '#fff', // Set text color to white
        borderRadius: '0', // Remove border-radius to make edges sharp
        height: 'auto', // Make the height flexible based on content
    };


    return (
        <div className={`flex items-center justify-${isSpecialQuestion ? 'start' : 'end'}`}>
            <button
                style={buttonStyle}
                className=' text-[8px]   sm:text-[20px]  items-center hover:bg-[#8f4830] bg-[#a4abc6] text-white border-none cursor-pointer'
                onClick={onClick}
                disabled={disabled}
            >
                {text}
            </button>
        </div>
    );
}

export default ChoiceButton;
