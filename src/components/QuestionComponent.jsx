import React, { useState, useEffect } from 'react';
import ChoiceButton from './ChoiceButton';

const QuestionComponent = ({ story, handleChoice, buttonsContainerStyle, characterStats }) => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [animatedText, setAnimatedText] = useState([]);

    const animateText = () => {
        const textArray = story.text;
        const currentTextItem = textArray[currentTextIndex];

        if (currentTextItem) {
            if (typeof currentTextItem === 'string') {
                const newText = currentTextItem.slice(0, animatedText.length + 1);
                setAnimatedText(newText);

                if (newText.length === currentTextItem.length) {
                    setTimeout(() => {
                        setCurrentTextIndex((prevIndex) => prevIndex + 1);
                    }, 500); // Half-second delay for strings
                }
            } else if (typeof currentTextItem === 'object' && currentTextItem.text) {
                // Check if it's a styled text object with a 'text' property
                const newStyledText = { ...currentTextItem, text: currentTextItem.text };
                setAnimatedText((prev) => [...prev, newStyledText]);

                setCurrentTextIndex((prevIndex) => prevIndex + 1);
            }
        }
    };

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            animateText();
        }, 60); // Adjust the delay as needed

        return () => clearTimeout(timeoutId);
    }, [animatedText, currentTextIndex]);

    useEffect(() => {
        // Reset animatedText when moving to a new question
        setAnimatedText([]);
        setCurrentTextIndex(0);
    }, [story]);

    const onChoiceClick = (target) => {
        // Make sure to update the stats
        handleChoice(target);
    };

    return (
        <div className='h-auto w-auto max-w-xs p-4 lg:max-h-56vh lg:max-w-2xl lg:h-auto lg:p-8 bg-opacity-95 bg-[#000000] flex flex-col rounded-0 items-center justify-center font-montserrat mb-60 lg:mb-20 hover:bg-opacity-60' id='story'>
            <div className='text-[#f5fdc3] hover:text-white text-sm lg:text-xl mt-4 whitespace-pre-line'>
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
            <div style={buttonsContainerStyle}>
                {story.choices.map((choice, index) => (
                    <ChoiceButton
                        key={index}
                        text={choice.text}
                        onClick={() => onChoiceClick(choice.target, characterStats)}
                        disabled={story.buttonsDisabled}
                    />
                ))}
            </div>
        </div>
    );
};

export default QuestionComponent;
