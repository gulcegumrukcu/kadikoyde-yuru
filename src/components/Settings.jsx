import React from 'react';
import Menu from './Menu';
import SoundControl from './SoundControl';


const Settings = ({ onMenuClick, onToggleSound }) => {
    return (
        <div className='fixed top-0 left-0 bg-black flex-row gap-4 p-4 text-white flex mx-auto w-36'>
            <Menu onClick={onMenuClick} />
            <SoundControl onToggleSound={onToggleSound} />
        </div>
    );
};

export default Settings;

