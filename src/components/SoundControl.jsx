import {useMainContext} from "../context/main-context.jsx";

const SoundControl = ({ onToggleSound }) => {

    const {isMuted} = useMainContext()
    const handleToggleSound = () => {

        onToggleSound(!isMuted); // Toggle the current state
    };

    return (
        <div
            className='w-10 h-10 cursor-pointer'
            onClick={handleToggleSound}
        >
            {isMuted ? (
                // Muted icon
                <img src="/images/sound-off.svg" alt="Sound Off" className="w-full h-full" />
            ) : (
                // Unmuted icon
                <img src="/images/sound-on.svg" alt="Sound On" className="w-full h-full" />
            )}
        </div>
    );
};

export default SoundControl;
