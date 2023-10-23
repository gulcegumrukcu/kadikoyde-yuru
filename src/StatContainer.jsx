import React from 'react';
import StatBar from './StatBar';

function StatContainer({ label, value, color }) {
    const statContainerStyle = {
        borderRadius: '10px',
        padding: '10px',
        margin: '10px',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '150px',
    };

    const statValueContainerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
    };

    const statValueStyle = {
        fontSize: '14px',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: '5px',
    };

    return (
        <div style={statContainerStyle}>
            <div style={statValueContainerStyle}>
                <div style={statValueStyle}>{label}</div>
            </div>
            <div className='flex-row flex w-full gap-2'>
                <StatBar label={label} value={value} color={color} />
                <div style={statValueStyle}>{value}</div>
            </div>
        </div>
    );
}

export default StatContainer;
