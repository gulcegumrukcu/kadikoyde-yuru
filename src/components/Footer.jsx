// FOOTER Do no delete this.

import React from 'react';
import StatContainer from './StatContainer';
import useAnimation from './useAnimation'


const Footer = ({ showFooter, onToggleSound, onMenuClick, characterStats, showMoodAnimation, showIntelligenceAnimation, showMoneyAnimation }) => {

    const showIntelligenceAnimationValue = useAnimation(showIntelligenceAnimation.text);
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
                                color='#F34203'
                                circleBorderColor='#F34203'

                            />
                        )}
                        {characterStats && (
                            <StatContainer
                                label='Ruh Hali'
                                value={characterStats.mood}
                                color='#FEE440'
                                circleBorderColor='#FEE440'  // For the circular stat


                            />
                        )}
                        {characterStats && (
                            <StatContainer
                                label='Para'
                                value={characterStats.money}
                                color='#496F5D'
                                circleBorderColor='#496F5D'


                            />
                        )}

                        {characterStats && (
                            <StatContainer
                                label='Zeka'
                                value={characterStats.intelligence}
                                color='#26408B'
                                circleBorderColor='#26408B'


                            />
                        )}


                        {showMoodAnimation && (
                            <>
                                <div className='text-white font-bold absolute lg:right-16 right-2 top-16 text-md lg:text-2xl '>
                                    {showMoodAnimation}
                                </div>

                                {console.log('footer - showMoodAnimation:', showMoodAnimation)}
                            </>


                        )}
                        {showMoneyAnimation && (
                            <>
                                <div className='text-white font-bold absolute lg:right-16 right-2 top-16 text-md lg:text-2xl '>
                                    {showMoneyAnimation}
                                </div>
                                {console.log('footer - showMoneyAnimation:', showMoneyAnimation)}
                            </>
                        )}


                        {showIntelligenceAnimation && showIntelligenceAnimationValue && (
                            <>
                                <div className='text-white font-bold absolute lg:right-16 right-2 top-16 text-md lg:text-2xl '>
                                    {showIntelligenceAnimationValue}
                                </div>

                            </>
                        )}



                    </div>

                </div>
            </div>
        </>
    );
};
console.log('footer - showMoodAnimation type:', typeof showMoodAnimation);
console.log('footer - showMoneyAnimation type:', typeof showMoneyAnimation);

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