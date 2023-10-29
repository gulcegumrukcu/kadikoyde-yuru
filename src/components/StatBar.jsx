// StatBar Do no delete this.

import React from 'react';

function StatBar({ label, value, color, animationValue }) {
    const barHeight = `${value}px`;

    const statBarStyle = {
        height: barHeight,
        width: '20px', // You can adjust the width if needed
        backgroundColor: color || '#ddd', // Use the provided color or default to '#ddd'
        borderRadius: '5px',
        transform: 'rotate(180deg)', // Rotate the bar 180 degrees
        transformOrigin: 'top', // Set the rotation origin to the bottom left

    };

    const statBarAnimation = {
        fontSize: '14px',
        fontWeight: 'bold',

        alignItems: 'center',
        marginTop: '10px',
        color: 'white',
    };

    return (
        <>
            <div className='flex flex-row '>
                <div style={{ ...statBarAnimation, }}>{label}</div>
                <div className='stat-bar' style={statBarStyle}>




                </div>
            </div>


        </>

    );
}

export default StatBar;