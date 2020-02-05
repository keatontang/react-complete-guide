import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {name: 'Keaton', age: 19},
            {name: 'kebin', age: 20},
            {name: 'karson', age: 30}
        ],
        otherState: 'some boi'
    };


    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                {name: newName, age: 19},
                {name: 'kebin', age: 20},
                {name: 'karson', age: 40}
            ],
        });
    };

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                {name: 'yoza', age: 19},
                {name: event.target.value, age: 20},
                {name: 'karson', age: 40}
            ],
        });

}

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        return (
            <div className="App">
                <h1>Ola, me llamo Keaton</h1>
                <p>Dis work</p>
                <button
                    style ={style}
                    onClick={this.switchNameHandler.bind(this, 'keras')}>Switch name</button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}
                />
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    click={this.switchNameHandler.bind(this, 'dog!')}
                    changed={this.nameChangedHandler}> My hobbies:kk </Person>
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age}
                />
            </div>
        );
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "It works"));
    };
}



export default App;


