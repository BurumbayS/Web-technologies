import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Todo from './Todo';
import Main from './Main'
import registerServiceWorker from './registerServiceWorker';
import 'react-rangeslider/lib/index.css'

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
