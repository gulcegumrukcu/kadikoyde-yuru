import React from 'react';

function StatBar({ label, value, color }) {
    const statBarStyle = {
        height: '20px',
        width: '100%',
        backgroundColor: '#ddd',
        borderRadius: '5px',
        margin: '5px 0',
        border: '1px solid #ccc',
    };

    return (
        <div style={{ ...statBarStyle, width: `${value}%`, backgroundColor: color }}>
            {/* You can add labels or additional content inside the StatBar if needed */}
        </div>
    );
}

export default StatBar;
