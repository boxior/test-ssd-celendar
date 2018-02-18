import React, {Component} from 'react';
// import {Router, Route, NavLink} from 'react-router-dom';
// import createBrowserHistory from 'history/createBrowserHistory'
import './App.scss';

import Header from "../Header/Header";
import Main from "../Main/Main";

// const history = createBrowserHistory();

class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <Header/>
                <Main/>
            </div>
        )
    }
}

export default App;