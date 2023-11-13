// QuestionComponent.js

import React from 'react';
import ChoiceButton from './ChoiceButton';



const applyStyles = (text) => {
    if (typeof text !== 'string') {
        // If text is not a string, return it as it is
        return text;
    }

    const parts = text.split(/(".*?")/);
    const textWithItalic = parts.map((part, index) => (
        part.startsWith('"') ? <span key={index} style={{ fontStyle: 'italic' }}>{part}</span> : part
    ));
    return textWithItalic;
};


const QuestionComponent = ({ story, handleChoice, buttonsContainerStyle }) => (
    <div className='h-auto w-auto max-w-xs p-4 lg:max-h-56vh lg:max-w-2xl lg:h-auto lg:p-8 bg-opacity-95 bg-[#161617] flex flex-col rounded-0 items-center justify-center font-montserrat lg:mb-20 mb-20 hover:bg-black ' id='story'>
        <div className='text-[#f5fdc3] text-sm lg:text-xl mt-4 whitespace-pre-line'>
            {Array.isArray(story.text) ? (
                story.text.map((item, index) => (
                    <span key={index} style={item.style} className="">
                        {typeof item === 'object' ? item.text : item}
                    </span>
                ))
            ) : (
                <span className="">{story.text}</span>
            )}
        </div>
        <div style={buttonsContainerStyle}>
            {story.choices.map((choice, index) => (
                <ChoiceButton
                    key={index}
                    text={applyStyles(choice.text)}
                    onClick={() => handleChoice(choice.target)}
                    disabled={story.buttonsDisabled}
                />
            ))}
        </div>
    </div>
);



export default QuestionComponent;
