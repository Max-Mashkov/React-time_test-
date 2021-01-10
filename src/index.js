import React from 'react';
import ReactDOM from 'react-dom';
import {element as Text} from './components/Greeting';
import {element as Hello} from './components/UserName';
import { App  } from './container/App';


ReactDOM.render(
        <App/>,
    document.getElementById('name')
);
