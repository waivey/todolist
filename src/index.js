import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

var destination = document.querySelector("#container");

ReactDOM.render(
    <div>
        <p>Hello!</p>
    </div>,
    destination
);


serviceWorker.unregister();
