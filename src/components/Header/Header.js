import React, { Component } from 'react';

//style
import style from './Header.module.scss';
import logo from './img/logo.png';

export class Header extends Component {
    render() {
        return (
            <header className={style.header}>
                <span>
                    <img src={logo} alt="" />
                </span>
                <p>0631604183</p>
            </header>
        )
    }
}