import React, { useState } from 'react';

const UserInputForm = ({ onInputSubmit, merdivenYolu }) => {
    const [userName, setUserName] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const enteredName = e.target.elements.userName.value;
        onInputSubmit(enteredName, merdivenYolu);
        setUserName('');
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black z-50">
            <form onSubmit={handleFormSubmit} className="bg-black p-8 rounded-lg shadow-lg">
                <label className="block mb-4 font-bold text-white ">
                    KAHRAMANIN ADI NE?
                    <input
                        type="text"
                        name="userName"
                        className="w-full border mt-4 text-black border-gray-300 p-2 rounded-md"
                        required
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </label>
                <button
                    type="submit"
                    className="  p-2 lg:p-4 bg-black text-[#d8d8d8] rounded-none border  border-[#f5fdc3] text-md flex justify-center items-center  hover:border-black hover:text-[#f5fdc3] font-medium"
                >
                    NE KAZANDIM?
                </button>
            </form>
        </div>
    );
};

export default UserInputForm;
