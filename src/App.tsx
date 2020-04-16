import React from 'react';
import './App.css';
// @ts-ignore
import {Route} from 'react-router-dom';
import Forecast from './components/forecast';

function App() {
    return (
        <div className="App">
            <Route path="/" component={Forecast}/>
        </div>
    );
}

export default App;
