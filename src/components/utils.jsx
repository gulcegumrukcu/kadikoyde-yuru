// utils.js
const handleMoneyAnimation = (dispatch, amount, setShowMoneyAnimation, increase = true) => {
    // Set an initial alert text based on the increase/decrease with color
    const backgroundColor = increase ? 'green' : 'red';
    const initialAlertText = amount !== 0
        ? <span style={{ backgroundColor, padding: '6px' }}>{`${increase ? '+' : '-'}${Math.abs(amount)} Para`}</span>
        : '';



    // Check if the amount is not 0 before setting the initial animation value
    if (amount !== 0) {
        setShowMoneyAnimation(initialAlertText);
    }

    // Ensure the amount is within the desired range
    const clampedAmount = 10;

    // Dispatch the action to increase or decrease money after a delay
    setTimeout(() => {
        const moneyChange = increase ? Math.floor(clampedAmount) : Math.ceil(clampedAmount);
        dispatch({ type: 'CHANGE_MONEY', payload: moneyChange });

        setShowMoneyAnimation('');
    }, 1000);

    return () => {
        setShowMoneyAnimation(increase ? clampedAmount : 0);
    };
};


const handleMoodAnimation = (dispatch, amount, setShowMoodAnimation, increase = true) => {

    // Set an initial alert text based on the increase/decrease with color
    const backgroundColor = increase ? 'green' : 'red';
    const initialAlertText = amount !== 0
        ? <span style={{ backgroundColor, padding: '6px' }}>{`${increase ? '+' : '-'}${Math.abs(amount)} Ruh Hali`}</span>
        : '';

    // Check if the amount is not 0 before setting the initial animation value
    if (amount !== 0) {
        setShowMoodAnimation(initialAlertText);
    }
    // Ensure the amount is within the desired range
    const clampedAmount = 10;

    // Dispatch the action to increase or decrease mood after a delay
    setTimeout(() => {
        const moodChange = increase ? Math.floor(clampedAmount) : Math.ceil(clampedAmount);
        dispatch({ type: 'CHANGE_MOOD', payload: moodChange });

        // Reset the mood animation after the action is dispatched
        setShowMoodAnimation('');
    }, 1000);

    return () => {
        setShowMoodAnimation(increase ? clampedAmount : 0);
    };
};

const handleIntelligenceAnimation = (dispatch, intelligenceCheckResult, setShowIntelligenceAnimation) => {
    // Set an initial alert text based on the intelligence check result
    const backgroundColor = intelligenceCheckResult ? 'green' : 'red';
    const initialAlertText = intelligenceCheckResult
        ? <span style={{ backgroundColor, padding: '6px' }}>Zeka Kontrol Başarılı!</span>
        : <span style={{ backgroundColor, padding: '6px' }}>Zeka Kontrol Başarısız!</span>;


    // Display the initial alert text with inline styles
    setShowIntelligenceAnimation({
        text: initialAlertText,
        style: {
            backgroundColor,
            padding: '6px',
        },
    });

    // Reset the intelligence animation after a delay
    setTimeout(() => {
        setShowIntelligenceAnimation('');
    }, 1000);
};

export default { handleMoodAnimation, handleIntelligenceAnimation, handleMoneyAnimation };
