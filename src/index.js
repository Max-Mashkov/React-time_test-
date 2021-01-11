import React from 'react';
import ReactDOM from 'react-dom';
import { App  } from './container/App';



setInterval(
    () => {
        ReactDOM.render(<App/>, document.getElementById('name'));
    },1000)