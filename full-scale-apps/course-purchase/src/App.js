import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Coursesales from './Coursesales'

class App extends Component {
  render() {
    let courses = [
      {name: 'Complete Python course', price: 200},
      {name: 'Introduction to Javascript course', price: 150},
      {name: 'Django for beginners course', price: 190},
      {name: 'Django REST Framework course', price: 120},
      {name: 'React js Introduction', price: 160},
    ];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Course Purchase Page.</h1>
        </header>

        <Coursesales items={courses} />
      </div>
    );
  }
}

export default App;
