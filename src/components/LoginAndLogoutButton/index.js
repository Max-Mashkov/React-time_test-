import React from 'react';
export default function LoginAndLogoutButton (props) {
    const {onClick, text} = props;
    return (
    <button onClick={onClick}>
        {text}
    </button>
        )
}