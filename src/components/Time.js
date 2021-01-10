import React from 'react';

export function Time() {
    const currentTime = new Date().toLocaleTimeString();

    return (
        <span>{currentTime}</span>
    )
}