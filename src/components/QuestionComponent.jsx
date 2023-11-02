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

const questionContainerStyle = {
    maxHeight: '50vh',
    width: '95vw',
    padding: '20px',
    backgroundColor: 'rgba(23, 22, 22, 0.95)',
    color: '#a4abc6',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Montserrat', // Add Montserrat font
    gap: '4px',
};

const specialQuestionStyle = {
    backgroundColor: 'rgba(23, 28, 14, 0.9)',
    color: '#a4abc6',
    fontSize: '14px', // Increase font size

    height: '205px',
    fontFamily: 'Montserrat', // Add Montserrat font
};

if (window.innerWidth < 600) {
    specialQuestionStyle.width = '30%';
    specialQuestionStyle.marginBottom = "13px";
    questionContainerStyle.width = '250px';
} else {

    specialQuestionStyle.width = '17%';
    specialQuestionStyle.height = '450px';
    specialQuestionStyle.marginBottom = "130px";
    questionContainerStyle.width = '30%';

}

const QuestionComponent = ({ story, handleChoice, buttonsContainerStyle }) => (
    <div className='' id='story' style={story.text.includes('Görünüşe göre emektarı değiştirme zamanı') ? { ...specialQuestionStyle } : questionContainerStyle}>
        <div style={{ whiteSpace: 'pre-line', fontSize: '20px', }} className='flex text-[#f5fdc3] items-center justify-center text-md sm:text-xl mt-8'>
            {applyStyles(story.text)}
        </div>
        <div style={buttonsContainerStyle}>
            {story.choices.map((choice, index) => (
                <ChoiceButton
                    key={index}
                    text={applyStyles(choice.text)}
                    onClick={() => handleChoice(choice.target)}
                    disabled={story.buttonsDisabled}
                    isSpecialQuestion={story.text.includes('Görünüşe göre emektarı değiştirme zamanı')}
                />
            ))}
        </div>
    </div>
);
export default QuestionComponent;
