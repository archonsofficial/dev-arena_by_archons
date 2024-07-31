import React from 'react';

const CircularProgressBar = ({ size = 10, progress = 0, strokeWidth = 10 }) => {
    const center = size / 2;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress / 100) * circumference;

    const circleStyle = {
        fill: 'none',
        transition: 'stroke-dashoffset 0.35s',
        transform: 'rotate(-90deg)',
        transformOrigin: '50% 50%',
        
    };
    return (
        <svg width={size} height={size}>
            
            <circle
                stroke="#2a2a2a"
                cx={center}
                cy={center}
                r={radius}
                strokeWidth={strokeWidth}
                style={{ fill: 'none'  }}
            />
            <circle
                stroke="#F0F277"
                cx={center}
                cy={center}
                r={radius}
                strokeWidth={strokeWidth}
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                style={circleStyle}
            />
            
        </svg>
    );
};

export default CircularProgressBar;
