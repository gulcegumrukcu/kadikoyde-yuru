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
                    <div className='flex gap-20 mx-auto justify-center  mt-[100px]   '>
                        {characterStats && (
                            <StatContainer
                                label='Sağlık'
                                value={characterStats.health}
                                color='#e74c3c'
                            />
                        )}
                        {characterStats && (
                            <StatContainer
                                label='Para'
                                value={characterStats.money}
                                color='#f39c12'
                            />
                        )}
                        {characterStats && (
                            <StatContainer
                                label='Ruh Hali'
                                value={characterStats.mood}
                                color='#3498db'
                                showAnimation={() => setShowAnimation(true)}
                                animationValue={
                                    showAnimation && showMoodAnimation !== 0
                                        ? `${showMoodAnimation > 0 ? '+' : '-'}${showMoodAnimation} Ruh Hali`
                                        : ''
                                }
                            />
                        )}
                        {characterStats && (
                            <StatContainer
                                label='Zeka'
                                value={characterStats.intelligence}
                                color='#9b59b6'
                            />
                        )}
                        {characterStats && (
                            <StatContainer
                                label='Zaman'
                                value={characterStats.time}
                                color='#2ecc71'
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
    bottom: 0,
    width: '100%',
    justifyContent: 'space-between',
    padding: '0 20px',
    backgroundColor: 'black',
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