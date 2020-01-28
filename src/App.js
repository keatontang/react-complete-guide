import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Ola, me llamo Keaton</h1>
          <p>Dis work</p>
          <Person />
      </div>
    );
      // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "It works"));
  }
}

export default App;
