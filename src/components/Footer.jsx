// FOOTER Do no delete this.

import React from 'react';
import StatContainer from './StatContainer';
import useAnimation from './useAnimation'


const Footer = ({ showFooter, onToggleSound, onMenuClick, characterStats, showMoodAnimation, showHealthAnimation, showIntelligenceAnimation, showIntelligenceCheckAnimation, showMoneyAnimation, statMoneyChangeRef, statHealthChangeRef, statIntelligenceChangeRef, statMoodChangeRef, initialAlertText }) => {

    const showIntelligenceCheckAnimationValue = useAnimation(showIntelligenceCheckAnimation.text);
    if (!showFooter) {
        return null;
    }


    const calculateTopValue = (index) => {
        const baseTop = 0; // Initial top value
        const spacing = 20; // Adjust the spacing as needed
        const previousAnimations = [showMoodAnimation, showIntelligenceAnimation, showHealthAnimation, showMoneyAnimation];

        // Filter out the undefined (falsy) animations
        const activeAnimations = previousAnimations.filter(animation => animation);

        // Calculate the total top offset based on the number of active animations
        const totalTopOffset = activeAnimations.length * spacing;

        // Calculate the dynamic top value
        return `${baseTop + totalTopOffset + index * spacing}px`;
    };

    return (
        <>
            <div style={{ ...footerStyle, ...mobileStyle }}>
                <div className='flex h-[160px] justify-between items-center'>
                    <div className='grid grid-cols-4 gap-2 mt-2  lg:mx-auto   justify-center '>
                        {characterStats && (
                            <StatContainer
                                label='Sağlık'
                                value={characterStats.health}
                                color='#8E2F2C'
                                circleBorderColor='#8E2F2C'
                                statHealthChangeRef={statHealthChangeRef}
                                initialAlertText={initialAlertText}
                            />
                        )}
                        {characterStats && (
                            <StatContainer
                                label='Ruh Hali'
                                value={characterStats.mood}
                                color='#BFA437'
                                circleBorderColor='#BFA437'  // For the circular stat
                                statMoodChangeRef={statMoodChangeRef}
                                initialAlertText={initialAlertText}
                            />
                        )}
                        {characterStats && (
                            <StatContainer
                                label='Para'
                                value={characterStats.money}
                                color='#496F5D'
                                circleBorderColor='#496F5D'
                                statMoneyChangeRef={statMoneyChangeRef}
                                initialAlertText={initialAlertText}
                            />
                        )}

                        {characterStats && (
                            <StatContainer
                                label='Zeka'
                                value={characterStats.intelligence}
                                color='#26408B'
                                circleBorderColor='#26408B'
                                statIntelligenceChangeRef={statIntelligenceChangeRef}
                                initialAlertText={initialAlertText}
                            />
                        )}

                        <div className=''>
                            {showMoodAnimation && (
                                <div className='text-white font-bold absolute lg:right-16 right-2 top-16 text-md lg:text-2xl' style={{ top: calculateTopValue(0) }}>
                                    {showMoodAnimation}
                                </div>
                            )}

                            {showIntelligenceAnimation && (
                                <div className='text-white font-bold absolute lg:right-16 right-2 top-16 text-md lg:text-2xl' style={{ top: calculateTopValue(1) }}>
                                    {showIntelligenceAnimation}
                                </div>
                            )}

                            {showHealthAnimation && (
                                <div className='text-white font-bold absolute lg:right-16 right-2 top-16 text-md lg:text-2xl' style={{ top: calculateTopValue(2) }}>
                                    {showHealthAnimation}
                                </div>
                            )}

                            {showMoneyAnimation && (
                                <div className='text-white font-bold absolute lg:right-16 right-2 top-16 text-md lg:text-2xl' style={{ top: calculateTopValue(3) }}>
                                    {showMoneyAnimation}
                                </div>
                            )}


                        </div>


                        {showIntelligenceCheckAnimation && showIntelligenceCheckAnimationValue && (
                            <>
                                <div className='text-white font-bold absolute lg:right-16 right-2 top-16 text-md lg:text-2xl '>
                                    {showIntelligenceCheckAnimationValue}
                                </div>

                            </>
                        )}



                    </div>

                </div>
            </div>
        </>
    );
};

const footerStyle = {

    width: '100%',
    justifyContent: 'space-between',
    padding: '0 10px',
    backgroundColor: 'rgba(00, 00, 00, 0.99)',
    color: '#fff',

};

const mobileStyle = {
    '@media (maxWidth: 768px)': {
        flexDirection: 'column',
        padding: '10px',
    },
};

export default Footer;