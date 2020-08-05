import React from 'react';
import './App.scss';
import { Route } from "react-router-dom";
import Header from './components/header/Header';
import Login from './components/login/Login';


const App = (props) => {
    return (
        <div className='app'>
            <Header/>
            <div className='app-content'>
                <Route path="/login" render={ () => < Login /> }/>
            </div>
        </div>
    );
}

export default App;
