// FOOTER Do no delete this.

import React from 'react';
import StatContainer from './StatContainer';
import useAnimation from './useAnimation'


const Footer = ({ showFooter, characterStats, showMoodAnimation, showHealthAnimation, showIntelligenceAnimation, showIntelligenceCheckAnimation, showMoneyAnimation, statMoneyChangeRef, statHealthChangeRef, statIntelligenceChangeRef, statMoodChangeRef, initialAlertText }) => {

    const showIntelligenceCheckAnimationValue = useAnimation(showIntelligenceCheckAnimation.text);
    if (!showFooter) {
        return null;
    }



    const animations = [showMoodAnimation, showIntelligenceAnimation, showHealthAnimation, showMoneyAnimation].filter(Boolean);




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

                        <div className='text-white font-bold absolute lg:right-16 right-2 top-4 text-md lg:text-2xl' style={{ display: 'flex', flexDirection: animations.length > 1 ? 'column' : 'row' }}>
                            {animations.map((animation, index) => (
                                <div key={index} style={{ margin: animations.length > 1 ? '10px 0' : '40 0px' }}>
                                    {animation}
                                </div>
                            ))}
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