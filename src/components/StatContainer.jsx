// StatContainer.jsx
import StatBar from './StatBar';
import React, { useState, useEffect, useRef } from 'react';
import { createInitialAlertText } from './utils.jsx'; // Correct import statement
import utils from './utils.jsx';

function StatContainer({ label, value, color, circleBorderColor, statMoneyChangeRef, statHealthChangeRef, statIntelligenceChangeRef, statMoodChangeRef }) {

    const [displayValue, setDisplayValue] = useState(value);

    useEffect(() => {
        const background = utils.getBackground();

        const handleStatChange = (statLabel, statChangeRef) => {
            if (statChangeRef && statChangeRef.current) {
                const { jsxAlertText, stringAlertText } = createInitialAlertText(10, background === 'green', background, statLabel);

                // You can use jsxAlertText in your component
                setDisplayValue(jsxAlertText);

                // You can also use stringAlertText for other purposes
                console.log`text of ${label} ${stringAlertText}`;

                const timeoutId = setTimeout(() => {
                    setDisplayValue(value);
                    statChangeRef.current = false;
                }, 2000);

                return () => {
                    clearTimeout(timeoutId);
                };
            }
        };

        handleStatChange('Health', statHealthChangeRef);
        handleStatChange('Intelligence', statIntelligenceChangeRef);
        handleStatChange('Mood', statMoodChangeRef);
        handleStatChange('Money', statMoneyChangeRef);
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
