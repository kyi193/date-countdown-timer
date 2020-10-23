import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DateTimeInputField from './components/DateTimeInputField'
import MainMenu from './components/MainMenu'
import { HashRouter as Router, Route } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <header className="App-header">
            <div>
              <Route exact path='/' component={MainMenu} />
              <Route exact path='/templates/:templateID' component={DateTimeInputField} />
            </div>
          </header>
        </Router>
      </div>
    );
  }
}

export default App;
