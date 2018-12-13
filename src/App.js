import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const helloWorld = 'Добро пожаловать в Путь к изучению React';
    return (
      <div className='App'>
        <h2>{helloWorld}</h2>
      </div>
    );
  }
}

export default App;
