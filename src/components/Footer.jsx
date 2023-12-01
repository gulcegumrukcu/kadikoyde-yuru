// FOOTER Do no delete this.

import React from 'react';
import StatContainer from './StatContainer';
import useAnimation from './useAnimation'


const Footer = ({ showFooter, onToggleSound, onMenuClick, characterStats, showMoodAnimation, showHealthAnimation, showIntelligenceAnimation, showIntelligenceCheckAnimation, showMoneyAnimation, statMoneyChangeRef, statHealthChangeRef, statIntelligenceChangeRef, statMoodChangeRef }) => {

    const showIntelligenceCheckAnimationValue = useAnimation(showIntelligenceCheckAnimation.text);
    if (!showFooter) {
        return null;
    }





    return (
        <>
            <div style={{ ...footerStyle, ...mobileStyle }}>
                <div className='flex h-[160px] justify-between items-center'>
                    <div className='grid grid-cols-4 gap-4  lg:mx-auto   justify-center '>
                        {characterStats && (
                            <StatContainer
                                label='Sağlık'
                                value={characterStats.health}
                                color='#8E2F2C'
                                circleBorderColor='#8E2F2C'
                                statHealthChangeRef={statHealthChangeRef}

                            />
                        )}
                        {characterStats && (
                            <StatContainer
                                label='Ruh Hali'
                                value={characterStats.mood}
                                color='#BFA437'
                                circleBorderColor='#BFA437'  // For the circular stat
                                statMoodChangeRef={statMoodChangeRef}

                            />
                        )}
                        {characterStats && (
                            <StatContainer
                                label='Para'
                                value={characterStats.money}
                                color='#496F5D'
                                circleBorderColor='#496F5D'
                                statMoneyChangeRef={statMoneyChangeRef}

                            />
                        )}

                        {characterStats && (
                            <StatContainer
                                label='Zeka'
                                value={characterStats.intelligence}
                                color='#26408B'
                                circleBorderColor='#26408B'
                                statIntelligenceChangeRef={statIntelligenceChangeRef}

                            />
                        )}


                        {showMoodAnimation && (
                            <>
                                <div className='text-white font-bold absolute lg:right-16 right-2 top-16 text-md lg:text-2xl '>
                                    {showMoodAnimation}
                                </div>

                            </>


                        )}
                        {showIntelligenceAnimation && (
                            <>
                                <div className='text-white font-bold absolute lg:right-16 right-2 top-16 text-md lg:text-2xl '>
                                    {showIntelligenceAnimation}
                                </div>

                            </>


                        )}
                        {showHealthAnimation && (
                            <>
                                <div className='text-white font-bold absolute lg:right-16 right-2 top-16 text-md lg:text-2xl '>
                                    {showHealthAnimation}
                                </div>

                            </>


                        )}
                        {showMoneyAnimation && (
                            <>
                                <div className='text-white font-bold absolute lg:right-16 right-2 top-16 text-md lg:text-2xl '>
                                    {showMoneyAnimation}
                                </div>
                            </>
                        )}


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
    padding: '0 20px',
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