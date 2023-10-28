// StatContainer Do no delete this.

import React, { useState, useEffect } from 'react';
import StatBar from './StatBar';

function StatContainer({ label, value, color, animationValue }) {
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
        flexDirection: 'column',
        alignItems: 'center', // Align statValue in the center

    };

    const statValueStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: '5px',



    };

    const animationStyle = {
        fontSize: '12px',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: '5px',
        color: 'green', // Set the color for the animation

    };

    const [showAnimation, setShowAnimation] = useState(false);

    useEffect(() => {
        if (animationValue) {
            setShowAnimation(true);
            const timeoutId = setTimeout(() => {
                setShowAnimation(false);
            }, 2000); // Adjust the duration as needed

            return () => {
                clearTimeout(timeoutId);
            };
        }
    }, [animationValue]);

    return (
        <div style={{ ...statContainerStyle, display: 'flex', }}>
            <div className='flex-row flex w-full gap-2 mx-auto'>
                <StatBar label={label} value={value} color={color} animationValue={animationValue} />
                <div style={statValueContainerStyle}>
                    <div style={statValueStyle}>{value}</div>
                    {showAnimation && (
                        <div style={animationStyle}>
                            {animationValue}
                        </div>
                    )}
                </div>
            </div>
        </div >
    );
}

export default StatContainer;
