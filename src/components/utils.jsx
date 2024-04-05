
import animation from '../audio/animation.mp3'

import Sound from './Sound'


const animationAudio = new Audio(animation)


export const createInitialAlertText = (amount, increase) => {
    const backgroundColor = increase ? 'green' : 'red';
    const jsxAlertText = amount !== 0
        ? <span style={{ backgroundColor, display: 'flex' }}>{`${increase ? '+' : '-'}${Math.abs(amount)}`}</span>
        : '';

    const stringAlertText = amount !== 0
        ? `${increase ? '+' : '-'}${Math.abs(amount)}`
        : '';

    return { jsxAlertText, stringAlertText };
};

let backgrounds = [];

const setBackground = (color) => {
    backgrounds.push(color);
};

const getBackground = () => backgrounds.pop() || '';




export const handleAnimationSound = (isMuted) => {

    console.log('Is sound muted?', isMuted);
    if (!isMuted) {
        animationAudio.play();
    } else {
        animationAudio.pause();
        animationAudio.currentTime = 0;
    }
};
const handleIntelligenceAnimation = (dispatch, amount, setShowIntelligenceAnimation, statIntelligenceChangeRef, increase = true, delay = 0, isMuted) => {
    const backgroundColor = increase ? 'green' : 'red';
    setBackground(backgroundColor); // Correct assignment

    const initialAlertText = amount !== 0
        ? <span style={{ backgroundColor, padding: '6px', display: 'flex', fontFamily: 'Kanit, sans-serif !important', }}>{`${increase ? '+' : '-'}${Math.abs(amount)} Zeka`}</span>
        : '';

    if (amount !== 0) {
        setShowIntelligenceAnimation(initialAlertText);
    }

    const clampedAmount = 10;
    animationAudio.play();
    setTimeout(() => {
        const intelligenceChange = increase ? Math.floor(clampedAmount) : Math.ceil(clampedAmount);
        dispatch({ type: 'CHANGE_INTELLIGENCE', payload: intelligenceChange });
        statIntelligenceChangeRef.current = true;
        setShowIntelligenceAnimation('');
    }, 2000 + delay);

    return () => {
        setShowIntelligenceAnimation(increase ? clampedAmount : 0);
        console.log('Calling handleAnimationSound from handleIntelligenceAnimation...');
        handleAnimationSound(animationAudio, isMuted);
    };
};

const handleMoodAnimation = (dispatch, amount, setShowMoodAnimation, statMoodChangeRef, increase = true, delay = 0, isMuted) => {
    const backgroundColor = increase ? 'green' : 'red';
    setBackground(backgroundColor); // Correct assignment

    const initialAlertText = amount !== 0
        ? <span style={{ backgroundColor, padding: '6px', display: 'flex', fontFamily: 'Kanit, sans-serif !important', fontFamily: 'Kanit, sans-serif !important', }}>{`${increase ? '+' : '-'}${Math.abs(amount)} Ruh Hali`}</span>
        : '';

    if (amount !== 0) {
        setShowMoodAnimation(initialAlertText);
    }

    const clampedAmount = 10;
    animationAudio.play();
    setTimeout(() => {
        const moodChange = increase ? Math.floor(clampedAmount) : Math.ceil(clampedAmount);
        dispatch({ type: 'CHANGE_MOOD', payload: moodChange });
        setShowMoodAnimation('');
        statMoodChangeRef.current = true;
    }, 2000 + delay);

    return () => {
        setShowMoodAnimation(increase ? clampedAmount : 0);
        console.log('Calling handleAnimationSound from handleMoodAnimation...');
        handleAnimationSound(animationAudio, isMuted);
    };
};

const handleMoneyAnimation = (dispatch, amount, setShowMoneyAnimation, statMoneyChangeRef, increase = true, delay = 0, isMuted) => {
    const backgroundColor = increase ? 'green' : 'red';
    setBackground(backgroundColor);

    const initialAlertText = amount !== 0 ? (
        <span style={{ backgroundColor, padding: '6px', display: 'flex', fontFamily: 'Kanit, sans-serif !important', fontFamily: 'Kanit, sans-serif !important', }}>{`${increase ? '+' : '-'}${Math.abs(amount)} Para`}</span>
    ) : '';

    if (amount !== 0) {
        setShowMoneyAnimation(initialAlertText);
    }

    const clampedAmount = 10;
    animationAudio.play();
    setTimeout(() => {
        const moneyChange = increase ? Math.floor(clampedAmount) : Math.ceil(clampedAmount);
        dispatch({ type: 'CHANGE_MONEY', payload: moneyChange });
        statMoneyChangeRef.current = true;
        setShowMoneyAnimation('');
    }, 2000 + delay); // Adjust the delay here

    return () => {
        setShowMoneyAnimation(increase ? clampedAmount : 0);
        console.log('Calling handleAnimationSound from handleMoneyAnimation...');
        handleAnimationSound(animationAudio, isMuted);

    };
};
const handleHealthAnimation = (dispatch, amount, setShowHealthAnimation, statHealthChangeRef, increase = true, delay = 0, isMuted) => {
    const backgroundColor = increase ? 'green' : 'red';
    setBackground(backgroundColor); // Correct assignment

    const initialAlertText = amount !== 0
        ? <span style={{ backgroundColor, padding: '6px', display: 'flex', fontFamily: 'Kanit, sans-serif !important', }}>{`${increase ? '+' : '-'}${Math.abs(amount)} Sağlık`}</span>
        : '';

    if (amount !== 0) {
        setShowHealthAnimation(initialAlertText);
    }

    const clampedAmount = 10;
    animationAudio.play();
    setTimeout(() => {
        const healthChange = increase ? Math.floor(clampedAmount) : Math.ceil(clampedAmount);
        dispatch({ type: 'CHANGE_HEALTH', payload: healthChange });
        statHealthChangeRef.current = true;
        setShowHealthAnimation('');
    }, 2000 + delay);

    return () => {
        setShowHealthAnimation(increase ? clampedAmount : 0);
        console.log('Calling handleAnimationSound from handleHealthAnimation...');
        handleAnimationSound(animationAudio, isMuted);
    };
};

async function handleIntelligenceCheckAnimation(dispatch, intelligenceCheckResult, setShowIntelligenceCheckAnimation,) {
    const backgroundColor = intelligenceCheckResult ? 'green' : 'red';
    const audioToPlay = intelligenceCheckResult ? correctAudio : wrongAudio;
    handleAnimationSound(audioToPlay, isMuted);
    const initialAlertText = intelligenceCheckResult
        ? <span style={{ backgroundColor, padding: '6px', display: 'flex', fontFamily: 'Kanit, sans-serif !important', }}>Zeka Kontrol Başarılı!</span>
        : <span style={{ backgroundColor, padding: '6px', display: 'flex', fontFamily: 'Kanit, sans-serif !important', }}>Zeka Kontrol Başarısız!</span>;

    setShowIntelligenceCheckAnimation({
        text: initialAlertText,
        style: {
            backgroundColor,
            padding: '6px',
            display: 'flex', fontFamily: 'Kanit, sans-serif !important',
        },
    });


    return new Promise((resolve) => {
        setTimeout(() => {
            setShowIntelligenceCheckAnimation('');
            resolve(true);
        }, 3000);
    });
}

export default {
    createInitialAlertText,
    handleMoodAnimation,
    handleMoneyAnimation,
    handleHealthAnimation,
    handleIntelligenceAnimation,
    handleIntelligenceCheckAnimation,
    setBackground,
    getBackground,
    Sound,
    handleAnimationSound,
};
