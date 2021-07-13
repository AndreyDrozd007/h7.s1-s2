import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Tap.css'
import AppFunction from './TapApp'
import CounterApp from './CounterApp'

ReactDOM.render(
  <React.StrictMode>
    <AppFunction />
    <CounterApp />
  </React.StrictMode>,
  document.getElementById('root')
);

