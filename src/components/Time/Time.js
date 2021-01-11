import React from 'react';
import style from './Time.module.scss';
export function Time() {
    const currentTime = new Date().toLocaleTimeString();

    return (
        <span className={style.tick}>{currentTime}</span>
    )
}


