import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import { players } from './Players'; //destructured because I will add more variables in future

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
