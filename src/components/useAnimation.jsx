import { useState, useEffect } from 'react';

const useAnimation = (animationValue) => {
    const [animationState, setAnimationState] = useState(false);

    useEffect(() => {
        if (animationValue) {
            setAnimationState(true);
            const timeoutId = setTimeout(() => {
                setAnimationState(false);
            }, 2000); // Adjust the duration as needed

            return () => {
                clearTimeout(timeoutId);
            };
        }
    }, [animationValue]);

    return animationValue ? animationValue : animationState;
};

export default useAnimation;
