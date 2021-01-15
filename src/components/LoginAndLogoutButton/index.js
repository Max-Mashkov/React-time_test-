import React from 'react';
import style from './index.module.scss';
export default function LoginAndLogoutButton (props) {
    const {onClick, text} = props;
    return (
    <button className={style.logButton} onClick={onClick}>
        {text}
    </button>
        )
}