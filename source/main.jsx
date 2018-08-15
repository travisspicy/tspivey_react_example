import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './app/App.jsx';

document.addEventListener('DOMContentLoaded', function() {
   ReactDOM.render(
       <HashRouter><App /></HashRouter>,
       document.getElementById('app')
   );
});
