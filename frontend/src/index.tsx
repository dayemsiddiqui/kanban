import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import '../node_modules/uikit/dist/js/uikit';
import '../node_modules/uikit/dist/js/uikit-icons';
import * as serviceWorker from './serviceWorker';
import { CustomWindow } from './interfaces/CustomWindow.interface';
import { BrowserRouter } from 'react-router-dom';
const { registerObserver } = require('react-perf-devtool');

declare let window: CustomWindow;
// assign the observer to the global scope, as the GC will delete it otherwise
window.observer = registerObserver({});
const UIkit = require('uikit');
const Icons = require('uikit/dist/js/uikit-icons');
UIkit.use(Icons);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
