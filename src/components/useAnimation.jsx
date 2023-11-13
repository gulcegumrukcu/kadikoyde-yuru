import { useState, useEffect } from 'react';

const useAnimation = (animationValue) => {
    const [showAnimation, setShowAnimation] = useState(false);

    useEffect(() => {
        if (animationValue) {
            setShowAnimation(true);
            const timeoutId = setTimeout(() => {
                setShowAnimation(false);
            }, 2000); // Adjust the duration as needed

            return () => {
                clearTimeout(timeoutId);
            };
        }
    }, [animationValue]);

    return showAnimation;
};

export default useAnimation;