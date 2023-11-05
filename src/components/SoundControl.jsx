// SoundControl.jsx
import React from 'react';

const SoundControl = ({ onToggleSound }) => {
    return (
        <svg
            className='w-10 h-10 cursor-pointer'
            viewBox='0 0 64 64'
            xmlns='http://www.w3.org/2000/svg'
            strokeWidth='3'
            stroke='#ffffff'
            fill='none'
            onClick={onToggleSound}
        >
            <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
            <g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
            <g id='SVGRepo_iconCarrier'>
                <path d='M35.36,49.2,21.65,39.32h-8.4V24H20.8l14.58-9.2a.39.39,0,0,1,.59.33V48.88A.39.39,0,0,1,35.36,49.2Z' strokeLinecap='square'></path>
                <line x1='40.64' y1='26.73' x2='51.19' y2='37.27'></line>
                <line x1='40.64' y1='37.27' x2='51.19' y2='26.73'></line>
            </g>
        </svg>
    );
};

export default SoundControl;
