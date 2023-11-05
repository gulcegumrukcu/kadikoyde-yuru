// Menu.jsx
import React from 'react';

const Menu = ({ onClick }) => {
    return (
        <svg
            className="w-10 h-10 cursor-pointer"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            onClick={onClick}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
            />
        </svg>
    );
};

export default Menu;
