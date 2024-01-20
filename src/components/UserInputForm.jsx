import React, { useState } from 'react';

const UserInputForm = ({ onInputSubmit, merdivenYolu }) => {
    const [userName, setUserName] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const enteredName = e.target.elements.userName.value;
        onInputSubmit(enteredName, merdivenYolu);
        setUserName('');
    };

    const formStyle = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        textAlign: 'center',
        zIndex: 1000,
    };

    const inputStyle = {
        fontSize: '18px',
        padding: '10px',
        margin: '10px',
        borderRadius: '4px',
    };

    const buttonStyle = {
        backgroundColor: '#4CAF50',
        border: 'none',
        color: 'white',
        padding: '15px 32px',
        textAlign: 'center',
        fontSize: '16px',
        margin: '10px',
        cursor: 'pointer',
        borderRadius: '8px',
    };

    return (
        <div style={formStyle}>
            <form onSubmit={handleFormSubmit}>
                <label>
                    İsim:
                    <input type="text" name="userName" style={inputStyle} required />
                </label>
                <br />
                <button type="submit" style={buttonStyle}>
                    Ne kazandım?
                </button>
            </form>
        </div>
    );
};

export default UserInputForm;
