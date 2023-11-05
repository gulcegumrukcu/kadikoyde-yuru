// FOOTER Do no delete this.

import React from 'react';
import StatContainer from './StatContainer';
import useAnimation from './useAnimation'


const Footer = ({ showFooter, onToggleSound, onMenuClick, characterStats, showMoodAnimation }) => {

    const showAnimation = useAnimation(
        showMoodAnimation !== 0 ? `${showMoodAnimation > 0 ? '+' : '-'}${showMoodAnimation} Ruh Hali` : ''
    );

    if (!showFooter) {
        return null;
    }

    console.log('Footer - characterStats:', characterStats);
    console.log('Footer - showMoodAnimation:', showMoodAnimation);
    return (
        <>
            <div style={{ ...footerStyle, ...mobileStyle }}>
                <div className='flex justify-between items-center '>
                    <div className='flex gap-20 mx-auto justify-center     '>
                        {characterStats && (
                            <StatContainer
                                label='Sağlık'
                                value={characterStats.health}
                                color='#F34203'
                                circleBorderColor='#F34203'
                                animationValue={showAnimation}
                            />
                        )}
                        {characterStats && (
                            <StatContainer
                                label='Ruh Hali'
                                value={characterStats.mood}
                                color='#FEE440'
                                circleBorderColor='#FEE440'  // For the circular stat
                                showAnimation={showAnimation}
                                animationValue={showAnimation}
                            />
                        )}
                        {characterStats && (
                            <StatContainer
                                label='Para'
                                value={characterStats.money}
                                color='#496F5D'
                                circleBorderColor='#496F5D'
                                animationValue={showAnimation}
                            />
                        )}

                        {characterStats && (
                            <StatContainer
                                label='Zeka'
                                value={characterStats.intelligence}
                                color='#26408B'
                                circleBorderColor='#26408B'
                                animationValue={showAnimation}
                            />
                        )}

                    </div>
                </div>
            </div>
        </>
    );
};

const footerStyle = {
    position: 'fixed',
    top: 0,
    width: '100%',
    justifyContent: 'space-between',
    padding: '0 20px',
    backgroundColor: 'rgba(00, 00, 00, 0.99)',
    color: '#fff',
    height: '160px',
};

const mobileStyle = {
    '@media (maxWidth: 768px)': {
        flexDirection: 'column',
        padding: '10px',
    },
};

export default Footer;