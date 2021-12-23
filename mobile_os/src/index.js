import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import os from './os';
import manufacture  from './manufature';


ReactDOM.render(
  <>
  <div>
    <h1>Operating System</h1>
      <h3>Android</h3>
      <h3>Blackberry</h3>
      <h3>Iphone</h3>
      <h3>Windows</h3>
  </div>
  
  <div>
    <h1>Mobile Manufactures</h1>
      <h3>Samesung</h3>
      <h3>HTC</h3>
      <h3>Mocromax</h3>
      <h3>Apple</h3>
  </div>
  </>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
