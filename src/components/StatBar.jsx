import React from 'react';

const StatBar = ({ label, value, color, circleBorderColor }) => {
    const statBarStyle = {
        fontSize: '24px',
        color: color || '#ddd',

    };



    const gaugeContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };

    const circleStyle = {

        borderRadius: '50%',
        border: `1px solid ${circleBorderColor}`,
        overflow: 'hidden',
        position: 'relative',

    };

    const fillStyle = {
        position: 'absolute',
        bottom: '0',
        left: '0',
        width: '100%',
        height: `${value}%`,
        background: color || '#ddd',
    };

    return (
        <div style={gaugeContainerStyle}>
            <div className='text-sm font-bold mb-2  lg:text-[18px] lg:font-bold'>{label}</div>
            <div style={statBarStyle}>
                <div className='lg:w-20 lg:h-20 h-16 w-16' style={circleStyle}>
                    <div style={fillStyle}></div>
                </div>
            </div>
        </div>
    );
};

export default StatBar;