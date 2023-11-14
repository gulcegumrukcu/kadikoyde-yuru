// utils.js
import correct from '../assets/correct.mp3'
import wrong from '../assets/wrong.mp3'

const correctAudio = new Audio(correct)
const wrongAudio = new Audio(wrong)

const handleMoneyAnimation = (dispatch, amount, setShowMoneyAnimation, statMoneyChangeRef, increase = true) => {
    console.log(`Handling money animation - Amount: ${amount}, Increase: ${increase}`);
    const backgroundColor = increase ? 'green' : 'red';
    const initialAlertText = amount !== 0 ? (
        <span style={{ backgroundColor, padding: '6px' }}>{`${increase ? '+' : '-'}${Math.abs(amount)} Para`}</span>
    ) : '';
    if (amount !== 0) {
        setShowMoneyAnimation(initialAlertText);
    }
    const clampedAmount = 10;
    setTimeout(() => {
        const moneyChange = increase ? Math.floor(clampedAmount) : Math.ceil(clampedAmount);
        dispatch({ type: 'CHANGE_MONEY', payload: moneyChange });
        statMoneyChangeRef.current = true; // Notify about the stat change
        setShowMoneyAnimation('');
    }, 1000);
    return () => {
        setShowMoneyAnimation(increase ? clampedAmount : 0);
    };
};

const handleIntelligenceAnimation = (dispatch, amount, setShowIntelligenceAnimation, statIntelligenceChangeRef, increase = true) => {
    const backgroundColor = increase ? 'green' : 'red';
    const initialAlertText = amount !== 0
        ? <span style={{ backgroundColor, padding: '6px' }}>{`${increase ? '+' : '-'}${Math.abs(amount)} Zeka`}</span>
        : '';

    if (amount !== 0) {
        setShowIntelligenceAnimation(initialAlertText);
    }

    const clampedAmount = 10;

    setTimeout(() => {
        const intelligenceChange = increase ? Math.floor(clampedAmount) : Math.ceil(clampedAmount);
        dispatch({ type: 'CHANGE_INTELLIGENCE', payload: intelligenceChange });
        statIntelligenceChangeRef.current = true;
        setShowIntelligenceAnimation('');
    }, 1000);

    return () => {
        setShowIntelligenceAnimation(increase ? clampedAmount : 0);
    };
};

const handleMoodAnimation = (dispatch, amount, setShowMoodAnimation, statMoodChangeRef, increase = true) => {
    const backgroundColor = increase ? 'green' : 'red';
    const initialAlertText = amount !== 0
        ? <span style={{ backgroundColor, padding: '6px' }}>{`${increase ? '+' : '-'}${Math.abs(amount)} Ruh Hali`}</span>
        : '';
    if (amount !== 0) {
        setShowMoodAnimation(initialAlertText);
    }
    const clampedAmount = 10;
    setTimeout(() => {
        console.log('Timer completed - Hiding Mood Animation');
        const moodChange = increase ? Math.floor(clampedAmount) : Math.ceil(clampedAmount);
        dispatch({ type: 'CHANGE_MOOD', payload: moodChange });
        setShowMoodAnimation('');
        statMoodChangeRef.current = true;
    }, 1000);

    return () => {
        setShowMoodAnimation(increase ? clampedAmount : 0);
    };
};

const handleHealthAnimation = (dispatch, amount, setShowHealthAnimation, statHealthChangeRef, increase = true) => {
    const backgroundColor = increase ? 'green' : 'red';
    const initialAlertText = amount !== 0
        ? <span style={{ backgroundColor, padding: '6px' }}>{`${increase ? '+' : '-'}${Math.abs(amount)} Sağlık`}</span>
        : '';
    if (amount !== 0) {
        setShowHealthAnimation(initialAlertText);
    }
    const clampedAmount = 10;
    setTimeout(() => {
        const healthChange = increase ? Math.floor(clampedAmount) : Math.ceil(clampedAmount);
        dispatch({ type: 'CHANGE_HEALTH', payload: healthChange });
        statHealthChangeRef.current = true;
        setShowHealthAnimation('');
    }, 1000);

    return () => {
        setShowHealthAnimation(increase ? clampedAmount : 0);
    };
};

async function handleIntelligenceCheckAnimation(dispatch, intelligenceCheckResult, setShowIntelligenceCheckAnimation) {
    const backgroundColor = intelligenceCheckResult ? 'green' : 'red';
    const audioToPlay = intelligenceCheckResult ? correctAudio : wrongAudio;
    const initialAlertText = intelligenceCheckResult
        ? <span style={{ backgroundColor, padding: '6px' }}>Zeka Kontrol Başarılı!</span>
        : <span style={{ backgroundColor, padding: '6px' }}>Zeka Kontrol Başarısız!</span>;

    setShowIntelligenceCheckAnimation({
        text: initialAlertText,
        style: {
            backgroundColor,
            padding: '6px',
        },
    });

    audioToPlay.play();

    return new Promise((resolve) => {
        setTimeout(() => {
            setShowIntelligenceCheckAnimation('');
            resolve(true);
        }, 1000);
    });
}

export default {
    handleMoodAnimation,
    handleMoneyAnimation,
    handleHealthAnimation,
    handleIntelligenceAnimation,
    handleIntelligenceCheckAnimation,
};
