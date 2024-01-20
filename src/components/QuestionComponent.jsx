import React, { useState, useEffect } from 'react';
import ChoiceButton from './ChoiceButton';

const QuestionComponent = ({ story, handleChoice, buttonsContainerStyle, characterStats, setShowInputForm }) => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [animatedText, setAnimatedText] = useState([]);
    const [textAnimationCompleted, setTextAnimationCompleted] = useState(false);

    const animateText = () => {
        const textArray = story.text;
        const currentTextItem = textArray[currentTextIndex];

        if (currentTextItem) {
            const newText = currentTextItem.slice(0, animatedText.length + 1);
            setAnimatedText(newText);

            if (newText.length === currentTextItem.length) {
                setTimeout(() => {
                    if (currentTextIndex + 1 === textArray.length) {
                        setTextAnimationCompleted(true);
                    } else {
                        setCurrentTextIndex((prevIndex) => prevIndex + 1);
                        setAnimatedText([]);
                    }
                }, 500);
            }
        }
    };

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            animateText();
        }, 70);

        return () => clearTimeout(timeoutId);
    }, [animatedText, currentTextIndex]);

    useEffect(() => {
        if (currentTextIndex === story.text.length) {
            setTextAnimationCompleted(true);
        }
    }, [animatedText, currentTextIndex, story.text]);

    useEffect(() => {
        setAnimatedText([]);
        setCurrentTextIndex(0);
        setTextAnimationCompleted(false);
    }, [story]);

    const onChoiceClick = (target) => {
        // Make sure to update the stats
        if (target === 'input') {
            setShowInputForm(true);
        } else {
            handleChoice(target, characterStats);
        }
    };

    return (
        <div className='h-auto w-auto max-w-xs p-4 lg:max-h-56vh lg:max-w-2xl lg:h-auto lg:p-8 bg-opacity-95 bg-[#000000] flex flex-col rounded-0 items-center justify-center mb-60 lg:mb-20 hover:bg-opacity-60' id='story' style={{ fontFamily: 'Kanit, sans-serif !important' }}>
            <div className='text-[#f5fdc3] hover:text-white text-sm lg:text-xl  whitespace-pre-line'>
                {Array.isArray(animatedText) ? (
                    animatedText.map((item, index) => (
                        typeof item === 'object' ? (
                            <span key={index} style={item.style} className="">
                                {item.text}
                            </span>
                        ) : (
                            <span key={index} className="">
                                {item}
                            </span>
                        )
                    ))
                ) : (
                    animatedText
                )}
            </div>
            {textAnimationCompleted && (
                <div style={buttonsContainerStyle}>
                    {story.choices && Array.isArray(story.choices) && story.choices.map((choice, index) => (
                        <ChoiceButton
                            key={index}
                            text={choice.text}
                            onClick={() => onChoiceClick(choice.target)}
                            disabled={story.buttonsDisabled}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default QuestionComponent;
