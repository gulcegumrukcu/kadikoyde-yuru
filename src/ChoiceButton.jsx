import React from 'react';

function ChoiceButton({ text, onClick, disabled, isSpecialQuestion }) {
    const buttonStyle = {
        width: '100%', // Default width for larger screens
        margin: '4px', // Default width for larger screens
    };

    // Add a media query for devices with a width less than 600px
    if (window.innerWidth < 600) {
        buttonStyle.width = isSpecialQuestion ? '50px' : '60px';
        buttonStyle.height = isSpecialQuestion ? '59px' : '80px';

        buttonStyle.marginTop = isSpecialQuestion ? '20px' : '70px';
        buttonStyle.marginBottom = isSpecialQuestion ? '30px' : '70px';
        buttonStyle.fontSize = isSpecialQuestion ? '9px' : '14px';
    } else {
        buttonStyle.width = isSpecialQuestion ? '120px' : '90px';
        buttonStyle.height = isSpecialQuestion ? '130px' : '70px';
        buttonStyle.marginTop = isSpecialQuestion ? '130px' : '70px';
        buttonStyle.marginBottom = isSpecialQuestion ? '100px' : '70px';

    }

    return (
        <div className='flex items-center justify-center flex-row gap-2'>
            <button
                style={buttonStyle}
                className='w-12 text-[8px] h-12 sm:w-44 mt-4 sm:h-24 sm:text-[20px] justify-center items-center hover:bg-[#8f4830] bg-[#ec612e] text-white border-none cursor-pointer'
                onClick={onClick}
                disabled={disabled}
            >
                {text}
            </button>
        </div>
    );
}

export default ChoiceButton;
