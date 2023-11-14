import { useState, useEffect } from 'react';

const useAnimation = (initialValue) => {
    const [animationState, setAnimationState] = useState(false);

    useEffect(() => {
        if (initialValue) {
            setAnimationState(true);
            const timeoutId = setTimeout(() => {
                setAnimationState(false);
            }, 2000); // Adjust the duration as needed

            return () => {
                clearTimeout(timeoutId);
            };
        }
    }, [initialValue]);

    return initialValue ? initialValue : animationState;
};

export default useAnimation;