import React from 'react';

function StatBar({ label, value, color, circleBorderColor }) {
    const statBarStyle = {
        fontSize: '24px',
        color: color || '#ddd',


    };

    const statBarAnimation = {
        fontSize: '14px',
        fontWeight: 'bold',
        alignItems: 'center',
        marginTop: '10px',
        color: 'white',
    };

    const gaugeContainerStyle = {
        display: 'flex',
        flexDirection: 'column', // Stack the circles vertically
        alignItems: 'center', // Center the circles horizontally
    };

    const circleStyle = {
        height: '80px', // Adjust the height according to your design
        width: '72px', // Fixed width for the gauge
        borderRadius: '50%',
        border: `1px solid ${circleBorderColor}`,
        overflow: 'hidden', // Clip the overflowing part of the circle

        position: 'relative', // Enable positioning for the fill
    };

    const fillStyle = {
        position: 'absolute',
        bottom: '0', // Start filling from the bottom
        left: '0',
        width: '100%',
        height: `${value}%`, // Adjust the height to represent the value
        background: color || '#ddd',
    };

    return (
        <div style={gaugeContainerStyle}>
            <div style={statBarAnimation}>{label}</div>
            <div style={statBarStyle}>
                <div style={circleStyle}>
                    <div style={fillStyle}></div>
                </div>
            </div>
        </div>
    );
}

export default StatBar;
