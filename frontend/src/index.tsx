import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '../node_modules/uikit/dist/js/uikit';
import '../node_modules/uikit/dist/js/uikit-icons';
import * as serviceWorker from './serviceWorker';
const UIkit = require('uikit');
const Icons = require('uikit/dist/js/uikit-icons');
UIkit.use(Icons);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
