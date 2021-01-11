import React from 'react';
//Style
import 'normalize.css';
//Parts
import { Header } from '../components/Header/Header';
import { Time } from '../components/Time/Time';
import {element as Hello} from '../components/UserName';
import {element as UserName} from '../components/UserName';

export function App() {
    return (
        <header>
            <Header />
            <Time />
        </header>

    )
}