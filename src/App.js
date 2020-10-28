import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DateTimeInputField from './components/DateTimeInputField'
import MainMenu from './components/MainMenu'
import CountdownPage from './components/CountdownPage'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'
import middleware from './middleware'
import { composeWithDevTools } from 'redux-devtools-extension'

class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer, composeWithDevTools(middleware))}>
        <div className="App">
          <Router>
            <header className="App-header">
              <div>
                <Route exact path='/' component={MainMenu} />
                <Route exact path='/home' component={CountdownPage} />
                <Route exact path='/templates/:templateID' component={DateTimeInputField} />
              </div>
            </header>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
