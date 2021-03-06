import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Login } from './features/login/Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <Login />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       
      </header>
    </div>
  );
}

export default App;
