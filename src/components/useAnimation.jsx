import { useState, useEffect } from 'react';

const useAnimation = (animationValue) => {
    const [animationInfo, setAnimationInfo] = useState(null);

    useEffect(() => {
        if (animationValue) {
            setAnimationInfo({
                showAnimation: true,
                text: animationValue,
            });
            const timeoutId = setTimeout(() => {
                setAnimationInfo(null);
            }, 2000); // Adjust the duration as needed

            return () => {
                clearTimeout(timeoutId);
            };
        }
    }, [animationValue]);

    return animationInfo;
};

export default useAnimation;
