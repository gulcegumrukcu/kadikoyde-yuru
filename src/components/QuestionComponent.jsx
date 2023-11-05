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





const buttonStyle = {
    width: 'auto',
    margin: '24px 0',
    padding: '12px 8px',
    backgroundColor: '#000',
    color: '#fff',
    borderRadius: '0',
    height: 'auto',
    border: '2px solid white',
};

const questionContainerStyle = {
    maxHeight: '50vh',
    width: 'auto',
    maxWidth: '40vw',
    height: 'auto',
    padding: '30px',
    backgroundColor: 'rgba(23, 22, 22, 0.95)',
    color: '#a4abc6',
    display: 'flex',
    flexDirection: 'column',

    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Montserrat', // Add Montserrat font
    gap: '10px',
};





const QuestionComponent = ({ story, handleChoice, buttonsContainerStyle }) => (
    <div className='' id='story' style={questionContainerStyle}>
        <div style={{ whiteSpace: 'pre-line', fontSize: '20px' }} className=' text-[#f5fdc3]  text-md sm:text-xl mt-4'>
            {Array.isArray(story.text) ? (
                story.text.map((item, index) => (
                    typeof item === 'object' ? (
                        <span key={index} style={item.style}>{item.text}</span>
                    ) : (
                        <span key={index}>{item}</span>
                    )
                ))
            ) : (
                <span>{story.text}</span>
            )}
        </div>
        <div style={buttonsContainerStyle}>
            {story.choices.map((choice, index) => (
                <ChoiceButton
                    key={index}
                    text={applyStyles(choice.text)}
                    onClick={() => handleChoice(choice.target)}
                    disabled={story.buttonsDisabled}

                    style={buttonStyle}
                />
            ))}
        </div>
    </div>
);

export default QuestionComponent;
