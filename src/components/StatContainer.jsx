// StatContainer.jsx
import StatBar from './StatBar';
import React, { useState, useEffect, useRef } from 'react'; import utils from './utils.jsx';


function StatContainer({ label, value, color, circleBorderColor, statMoneyChangeRef, statHealthChangeRef, statIntelligenceChangeRef, statMoodChangeRef }) {

    const [displayValue, setDisplayValue] = useState(value);


    useEffect(() => {
        // Inside handleStatChange function in StatContainer.jsx
        const handleStatChange = (statLabel, statChangeRef, setChangeAmount) => {
            if (statChangeRef && statChangeRef.current) {
                console.log(`Changing ${statLabel} - Display temporary change amount for 1 second: ${setChangeAmount}`);
                setDisplayValue(`${utils.getBackground() === 'green' ? '+' : '-'}${setChangeAmount}`);

                const timeoutId = setTimeout(() => {
                    console.log(`Reverting ${statLabel} - After 1 second. Current value: ${value}`);
                    // After 1 second, revert back to the original value
                    setDisplayValue(value);
                    statChangeRef.current = false; // Reset the statChangeRef 

                }, 1000);

                return () => {
                    clearTimeout(timeoutId);
                };
            }
        };


        // Pass the utility function to handleStatChange
        handleStatChange('Money', statMoneyChangeRef, 10);
        handleStatChange('Health', statHealthChangeRef, 10);
        handleStatChange('Intelligence', statIntelligenceChangeRef, 10);
        handleStatChange('Mood', statMoodChangeRef, 10);
    }, [statMoneyChangeRef, statHealthChangeRef, statIntelligenceChangeRef, statMoodChangeRef, value]);

    const statValueContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };


    return (
        <div className='lg:w-[160px]'>
            <div className='flex-col flex w-full gap-2 mx-auto'>
                <StatBar label={label} value={value} color={color} circleBorderColor={circleBorderColor} />
                <div style={statValueContainerStyle}>
                    <div className='text-md font-bold lg:text-xl mx-auto align-center flex'>{displayValue}</div>
                </div>
            </div>
        </div>
    );
}

export default StatContainer;

