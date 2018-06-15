import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import todos from './todos.json'
import 'bulma/css/bulma.css';
import 'font-awesome/css/font-awesome.css'

ReactDOM.render(<App todos={todos} />, document.getElementById('root'));
registerServiceWorker();
