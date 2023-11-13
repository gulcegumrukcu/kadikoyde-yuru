import React from 'react';
import Menu from './Menu';
import SoundControl from './SoundControl';


const Settings = ({ onMenuClick, onToggleSound }) => {
    return (
        <div className='fixed bottom-0 right-0 bg-black flex-row gap-4 rounded-none p-2 text-white flex mx-auto'>
            <Menu onClick={onMenuClick} />
            <SoundControl onToggleSound={onToggleSound} />
        </div>
    );
};

export default Settings;

