import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {name: 'Keaton', age: 19},
            {name: 'kebin', age: 20},
            {name: 'karson', age: 30}
        ]
    }
  render() {
    return (
      <div className="App">
        <h1>Ola, me llamo Keaton</h1>
          <p>Dis work</p>
          <button>Switch name</button>
          <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age} />
          <Person name = {this.state.persons[1].name} age = {this.state.persons[1].age}> my hobby is ball</Person>
          <Person name = {this.state.persons[2].name} age = {this.state.persons[2].age} />
      </div>
    );
      // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "It works"));
  }
}

export default App;
