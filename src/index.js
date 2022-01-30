//import React with the ReactDOM library
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './App';

//importing main App component and displaying it in the root id, which is being loaded in
//public html which is being loaded by the browser
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>

    , document.getElementById(`root`));