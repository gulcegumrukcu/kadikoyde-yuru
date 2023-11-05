// StatContainer Do not delete this.

import React, { useState, useEffect } from 'react';
import StatBar from './StatBar';
import { useSelector, useDispatch } from 'react-redux';
import useAnimation from './useAnimation';

function StatContainer({ label, value, color, animationValue, circleBorderColor }) {


    const animationInfo = useAnimation(animationValue);

    const statContainerStyle = {
        borderRadius: '10px',
        padding: '10px',
        margin: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        width: '150px',
    };

    const statValueContainerStyle = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center', // Align statValue in the center
    };

    const statValueStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: '5px',
    };


    return (
        <div style={{ ...statContainerStyle }}>
            <div className='flex-row flex w-full gap-2 mx-auto'>
                <StatBar label={label} value={value} color={color} circleBorderColor={circleBorderColor} />
                <div style={statValueContainerStyle}>
                    <div style={statValueStyle}>
                        {value}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default StatContainer;
