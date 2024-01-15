import React, { useState, useEffect } from 'react';
import ChoiceButton from './ChoiceButton';

const QuestionComponent = ({ story, handleChoice, buttonsContainerStyle, characterStats, }) => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [animatedText, setAnimatedText] = useState([]);
    const [textAnimationCompleted, setTextAnimationCompleted] = useState(false); // New state

    const animateText = () => {
        const textArray = story.text;
        const currentTextItem = textArray[currentTextIndex];



        if (currentTextItem) {
            const newText = currentTextItem.slice(0, animatedText.length + 1);
            setAnimatedText(newText);

            if (newText.length === currentTextItem.length) {
                setTimeout(() => {
                    if (currentTextIndex + 1 === textArray.length) {
                        // Check if it's the last text item (ending)
                        setTextAnimationCompleted(true);
                    } else {
                        setCurrentTextIndex((prevIndex) => prevIndex + 1);
                        setAnimatedText([]); // Clear animatedText for regular strings
                    }
                }, 500); // Half-second delay for strings
            }
        }


    };



    useEffect(() => {
        const timeoutId = setTimeout(() => {
            animateText();
        }, 75); // Adjust the delay as needed

        return () => clearTimeout(timeoutId);
    }, [animatedText, currentTextIndex]);

    useEffect(() => {
        if (currentTextIndex === story.text.length) {
            // Check if text animation is completed
            setTextAnimationCompleted(true);
        }
    }, [animatedText, currentTextIndex, story.text]);

    useEffect(() => {
        // Reset animatedText when moving to a new question
        setAnimatedText([]);
        setCurrentTextIndex(0);
        setTextAnimationCompleted(false); // Reset text animation completion state
    }, [story]);


    const onChoiceClick = (target) => {
        // Make sure to update the stats
        handleChoice(target);
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
                            onClick={() => onChoiceClick(choice.target, characterStats)}
                            disabled={story.buttonsDisabled}
                        />
                    ))}
                </div>
            )}
        </div >
    );
};

export default QuestionComponent;