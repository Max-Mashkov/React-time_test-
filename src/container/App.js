import React from 'react';
//Style
import 'normalize.css';
//Parts
import { Header } from '../components/Header/Header';
import { Time } from '../components/Time/Time';
import { showHello as Hello} from '../components/Greeting';
import {ShowUserName as UserName} from '../components/UserName';
export function App() {
    return (
        <header>
            <Header />
            <Time newDate={'August 19, 1992 05:00:00'}/>
            <Hello/>
            <UserName/>

        </header>

    )
}