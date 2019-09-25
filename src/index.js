import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ToDoList from "./ToDoList";

var destination = document.querySelector("#container");

ReactDOM.render(
    <div>
        <ToDoList/>
    </div>,
    destination
);


serviceWorker.unregister();
