// StatContainer Do not delete this.

import React from 'react';
import StatBar from './StatBar';
import useAnimation from './useAnimation';

function StatContainer({ label, value, color, animationValue, circleBorderColor }) {
    const animationInfo = useAnimation(animationValue);



    const statValueContainerStyle = {
        display: 'flex',

        alignItems: 'center', // Align statValue in the center
    };



    return (
        <div className='lg:w-[160px]'>
            <div className='flex-col flex w-full gap-2 mx-auto'>
                <StatBar label={label} value={value} color={color} circleBorderColor={circleBorderColor} />
                <div style={statValueContainerStyle}>

                    {animationInfo && animationInfo.text && (
                        <div style={{ marginRight: '5px', color: 'green' }}>
                            {animationInfo.text}
                        </div>
                    )}


                    <div className='text-md font-bold lg:text-xl mx-auto align-center flex'>
                        {value}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StatContainer;
