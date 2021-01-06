import React from 'react';
import ReactDOM from 'react-dom';
import {element as Text} from './components/Text';
import {element as Hello} from './components/Hello';

ReactDOM.render(
    <div>
        {Text}
        {Hello}
    </div>,
    document.getElementById('name')
);
