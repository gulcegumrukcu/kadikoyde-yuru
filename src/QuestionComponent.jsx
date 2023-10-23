// QuestionComponent.js

import React from 'react';
import ChoiceButton from './ChoiceButton';

const questionContainerStyle = {

    maxHeight: '50vh',
    width: '90vw',
    padding: '20px',
    backgroundColor: 'rgba(23, 22, 22, 0.8)',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
};

const specialQuestionStyle = {
    backgroundColor: 'rgba(23, 28, 14, 0.9)',
    color: '#fff',
    fontSize: '9px',
    height: '205px',

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
        <div style={{ whiteSpace: 'pre-line' }} className='flex items-center justify-center text-md sm:text-xl  mt-8'>
            <p>{story.text}</p>
        </div>
        <div style={buttonsContainerStyle}>
            {story.choices.map((choice, index) => (
                <ChoiceButton
                    key={index}
                    text={choice.text}
                    onClick={() => handleChoice(choice.target)}
                    disabled={story.buttonsDisabled}
                    isSpecialQuestion={story.text.includes('Görünüşe göre emektarı')}
                />
            ))}
        </div>
    </div>
);

export default QuestionComponent;
