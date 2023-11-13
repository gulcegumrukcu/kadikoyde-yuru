// utils.js
const handleMoodAnimation = (dispatch, amount, setShowMoodAnimation, increase = true) => {
    console.log('handleMoodAnimation called with amount:', amount);

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
    const clampedAmount = Math.min(Math.max(amount, -6), 6);

    // Dispatch the action to increase or decrease mood after a delay
    setTimeout(() => {
        const moodChange = increase ? Math.floor(clampedAmount) : Math.ceil(clampedAmount);
        dispatch({ type: 'CHANGE_MOOD', payload: moodChange });

        // Reset the mood animation after the action is dispatched
        setShowMoodAnimation('');
    }, 2000);

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
    }, 2000);
};

export default { handleMoodAnimation, handleIntelligenceAnimation };
