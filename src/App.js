import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Recovery from './components/Recovery/Recovery';
import Agreement from './components/Agreement/Agreement';

import './App.css';
import Navigation from "./components/Navigation/Navigation";



class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div>
                <Navigation />
                <Route exact path="/" component={Home} />
                <Route path="/user-agreement" component={Agreement} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/password-recovery" component={Recovery} />
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
