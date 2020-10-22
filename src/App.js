import React from 'react';
import logo from './logo.svg';
import './App.css';
import DateTimeInputField from './components/DateTimeInputField'
import MainMenu from './components/MainMenu'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          {/* <DateTimeInputField /> */}
          <MainMenu />
        </div>
      </header>
    </div>
  );
}

export default App;
