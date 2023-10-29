// StatContainer Do not delete this.

import React, { useState, useEffect } from 'react';
import StatBar from './StatBar';
import { useSelector, useDispatch } from 'react-redux';

function StatContainer({ label, value, color, animationValue }) {
    const { showMoodAnimation } = useSelector((state) => state.stats);
    const dispatch = useDispatch();
    const [showAnimation, setShowAnimation] = useState(false);

    useEffect(() => {
        if (animationValue !== 0 && animationValue !== value) {
            setShowAnimation(true);

            const timeoutId = setTimeout(() => {
                setShowAnimation(false);
                dispatch({ type: 'CHANGE_MOOD', payload: value });
            }, 2000);

            return () => {
                clearTimeout(timeoutId);
            };
        }
    }, [animationValue, value, dispatch]);


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
        color: showMoodAnimation > 0 ? 'green' : 'red', // Set the color based on the sign of the mood change
    };



    return (
        <div style={{ ...statContainerStyle }}>
            <div className='flex-row flex w-full gap-2 mx-auto'>
                <StatBar label={label} value={value} color={color} animationValue={animationValue} />
                <div style={statValueContainerStyle}>
                    <div style={statValueStyle}>{value}</div>
                    {showAnimation && (
                        <div style={animationStyle}>

                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default StatContainer;
