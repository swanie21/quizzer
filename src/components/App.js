import React, { Component } from 'react';
import Quizzes from './Quizzes';
import '../App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Quizzes />
      </div>
    );
  }
}
