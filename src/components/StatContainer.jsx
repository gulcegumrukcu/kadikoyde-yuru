// StatContainer.jsx
import StatBar from './StatBar';
import React, { useState, useEffect, useRef } from 'react'; import utils from './utils.jsx';


function StatContainer({ label, value, color, circleBorderColor, statMoneyChangeRef, statHealthChangeRef, statIntelligenceChangeRef, statMoodChangeRef }) {

    const [displayValue, setDisplayValue] = useState(value);


    useEffect(() => {
        const background = utils.getBackground();

        const handleStatChange = (statLabel, statChangeRef, setChangeAmount, backgroundColor) => {
            if (statChangeRef && statChangeRef.current) {
                console.log(`Changing ${statLabel} - Display temporary change amount for 1 second: ${setChangeAmount}`);

                // Determine the sign based on the change amount
                const changeAmount = backgroundColor === 'green' ? setChangeAmount : -setChangeAmount;

                // Calculate the displayed value based on the change amount and the original value
                const displayAmount = `${changeAmount > 0 ? '+' : ''}${changeAmount}`;
                console.log(`Display ${statLabel} Value before setting: ${displayAmount}`);
                console.log(`background for ${statLabel} is: ${backgroundColor}`);

                setDisplayValue(displayAmount);

                const timeoutId = setTimeout(() => {
                    console.log(`Reverting ${statLabel} - After 1 second. Current value: ${value}`);
                    // After 1 second, revert back to the original value
                    setDisplayValue(value);
                    statChangeRef.current = false; // Reset the statChangeRef 

                    console.log(`Display Value after reverting: ${value}`);
                }, 3000);

                return () => {
                    clearTimeout(timeoutId);
                };
            }
        };



        // Pass the background color to handleStatChange

        handleStatChange('Health', statHealthChangeRef, 10, background);
        handleStatChange('Intelligence', statIntelligenceChangeRef, 10, background);
        handleStatChange('Mood', statMoodChangeRef, 10, background);
        handleStatChange('Money', statMoneyChangeRef, 10, background);
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

