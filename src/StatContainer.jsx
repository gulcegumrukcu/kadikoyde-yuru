import React from 'react';
import StatBar from './StatBar';

function StatContainer({ label, value, color, showAnimation, animationValue }) {


    const statContainerStyle = {
        borderRadius: '10px',
        padding: '10px',
        margin: '10px',
        display: 'flex',
        flexDirection: 'column', // Change to column
        alignItems: 'center',
        width: '150px',
    };

    const statValueContainerStyle = {
        display: 'flex',
        flexDirection: 'column', // Change to column
        alignItems: 'center', // Add this line to center the content
    };

    const statValueStyle = {
        fontSize: '14px',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: '5px',
    };

    return (
        <div style={statContainerStyle}>
            <div style={statValueContainerStyle}>
                <div style={statValueStyle}>{label}</div>
            </div>
            <div className='flex-row flex w-full gap-2'>
                <StatBar label={label} value={value} color={color} />
                <div style={statValueStyle}>{value}</div>
            </div>
            {showAnimation && (
                <div style={animationStyle}>
                    +{animationValue} Mood
                </div>
            )}
        </div>
    );
}

export default StatContainer;